import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EidtComponent } from './eidt/eidt.component';
import { UserComponent } from './user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CustompipesPipe } from './custompipes.pipe';
import { ReverseSlicePipe, reversePipe,indianRupPipe, DateFormatPipe } from './custompipes.pipe';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    EidtComponent,
    UserComponent,
    reversePipe,
    ReverseSlicePipe,
    indianRupPipe,
    DateFormatPipe,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class UserModule { }
