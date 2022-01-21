import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { HomeUsersComponent } from './pages/home-users/home-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SearchUserComponent } from './pages/search-user/search-user.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeUsersComponent,
    SearchUserComponent
  ],
  //Exportamos nuestros componentes para utilizrlos en el exterior
  exports:[
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class UserModule { }
