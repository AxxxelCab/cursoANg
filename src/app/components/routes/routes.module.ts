import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';

const routes: RoutesModule = [
  { path: "Home", component: HomeComponent },
];

@NgModule({
  declarations: [
    MoviesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
