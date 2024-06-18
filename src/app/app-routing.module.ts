import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate:[authGuard]},
  {path:'about',component:AboutusComponent, canActivate:[authGuard]},
  {path:'contact',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
