import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { BookDataComponent } from './book-data/book-data.component';

const routes: Routes = [
  { path: 'hello', component: HelloworldComponent },
  { path: 'books', component: BookDataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
