import { Component, OnInit } from '@angular/core';
import { User, _User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})

export class HomeUsersComponent implements OnInit {
  public users: User[]=[];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {

    //Cargamos los usuarios al inciar la pagina
    this.cargarUsuarios();
  }
 
  //Cargamos usuarios mediante la funcion de nuestro servicio
  cargarUsuarios(){
    this.userService.getAllTodos().subscribe(users => {
     console.log("data componente"+users)
//Igualamos nuestra variable publica al resultado de nuestra subscripcion
        this.users=users
      })
  }
  
  //Funcion eliminar, mandamos parametro id de nuestro html
  eliminar(id_user:number){
    this.userService.deleteUser(id_user).subscribe(resp => {
     console.log("data componente"+resp)
      })
  }
  
}
