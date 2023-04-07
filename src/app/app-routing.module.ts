import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForntpageComponent } from './forntpage/forntpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  
  {path:"" ,redirectTo:"/login" , pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},

  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user',canActivate:[AuthGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin',canActivate:[AuthGuard], loadChildren: () => import('./admin/admin.module'  ).then(m => m.AdminModule)},

  { path:'**' , component:PageNotFoundComponent}
  





  // {path:"admin" ,component:AdminComponent},
  // {path:"admin",loadChildren: () => import('./admin/admin.module').then(m =>  m.AdminModule) }


  
   // {path:"user", component:UserComponent,children:[
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
    
  //   {path:"navbar" ,component:NavbarComponent},
  //   {path:"home" , component:HomeComponent},
  //   {path:"edit" , component:EidtComponent}
  // ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
