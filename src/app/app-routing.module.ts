import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RegisterComponent } from './register/register.component';
// import { EmployeelistComponent } from './employeelist.component';

const routes: Routes = [
  // {  path: 'index', redirectTo: "", pathMatch: 'full' }, // Redirect empty path to home
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'profile', component : ProfileComponent},
  { path: 'edit' , component: EditprofileComponent},
  { path: 'register' , component: RegisterComponent},
  // { path: 'employeelist' , component : EmployeelistComponent},
  
  // { path : 'navbar' ,component :NavbarComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any other invalid paths to home

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
