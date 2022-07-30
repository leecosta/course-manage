import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/start.module';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

//Segregando a aplicação em módulos
@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule, //recursos básicos do angular, equivalente ao BrowserModule
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
