import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './courses/course.module';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule, //Módulo de cursos
    CoreModule,
    // forRoot -> assim que inicializa a app já carrega as rotas
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      // ** -> quando não encontra a url
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
