import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { BookDataComponent } from './book-data/book-data.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  //{ path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', 'canActivate': [AuthGuard], component: DashboardComponent },
  { path: 'hello', component: HelloworldComponent },
  { path: 'books', component: BookDataComponent },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
