import { Component, createComponent, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // Agora que já definiu o RouterModule, não precisa mais do selector
  // selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
//onInit passa a informação no momento de inicialização do componente
export class CourseListComponent implements OnInit {
  // Boas práticas: variável que começa com _ significa que quer
  // que ela exista apenas dentro desse componente
  filtredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      // next -> se der certo, retorna..
      next: (courses) => {
        this._courses = courses;
        this.filtredCourses = this._courses;
      },
      // se der erro..
      error: (err) => console.log('Error', err),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: (err) => console.log('Error', err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filtredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          //toLocaleLowerCase faz ele não diferenciar letras minúsculas das maiúsculas
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
