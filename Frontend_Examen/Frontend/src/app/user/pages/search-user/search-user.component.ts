import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public users: User[]=[];

  
  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //Extraemos los params y los pasamos como parametros a nuestra funcion search
    this.activatedRoute.params.subscribe(({ type,termino }) => {
      this.search(type,termino);
    })
  }

  eliminar(id_user:number){
    this.userService.deleteUser(id_user).subscribe(resp => {
     console.log("data componente"+resp)
      })
  }

  //Declaramos nuestra funcion search con dos parametros con alguns valores posibles
  search(
    type: 'nombres' | 'apellidoP' | 'apellidoM',
    termino:string
  ){
    this.userService.search(type,termino).subscribe(users => {
      this.users=users
      console.log(users)
      Swal.fire({
        title: 'Exito',
        text: `Se elimino el usuario correctamente`,
        icon: 'success',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Entendido',
        timer: 3500,
      })
     
  })}
}
