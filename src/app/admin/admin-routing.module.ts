import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EidtComponent } from './eidt/eidt.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path:"navbar",component:NavbarComponent},
  // {path:"home", component:HomeComponent},
  // {path:"edit",component:EidtComponent},


  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home',pathMatch: 'full'},
      { path: 'navbar', component: NavbarComponent},
      { path: 'home', component: HomeComponent},
      { path: 'edit', component:EidtComponent}
               ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})


export class AdminRoutingModule { }
