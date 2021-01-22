import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
  },{​​
    path: 'home',
    component: HomeComponent

  }​,{
    path: 'peliculas',
    component: PeliculasComponent
  },{
    path: 'peliculas/:id',
    component: PeliculasComponent
  },{
    path : 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
