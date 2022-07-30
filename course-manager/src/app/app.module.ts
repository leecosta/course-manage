import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './courses/course.module';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, Error404Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule, //Módulo de cursos
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
