import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsersComponent } from './user/pages/home-users/home-users.component';
import { SearchUserComponent } from './user/pages/search-user/search-user.component';
import { UserComponent } from './user/pages/user/user.component';

//Arreglo que contiene todas nuestras rutas de navegacion
const routes: Routes = [

  {
    path:'',
    component:HomeUsersComponent,
    pathMatch:'full'
  },
  {
    path:'user/:id',
    component:UserComponent,
  },
  {
    path:'search/:type/:termino',
    component:SearchUserComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
];


@NgModule({

//Importamos y exportamos nuestras rutas para hacer uso de ellas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
