import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
