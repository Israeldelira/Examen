import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userForm!: FormGroup;
  public formSubmitted = false;
  public mostrar: boolean = false
  public user: any;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ id }) => {
      this.cargarUsuario(id);
    })

    //Uso de formsGroup para realizar formulario
    this.userForm = this.fb.group({
      nombres: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  //Validamos con un if si mostras el formulario o no
  //Cargamos el usuario si el valor extraido de los params es un id

  cargarUsuario(id: any) {
    if (id == "new") {
      this.mostrar = false
    } else {
      this.mostrar = true

      this.userService.getUserById(id).subscribe(resp => {
        console.log("data del geet" + resp)
        this.user = resp
        console.log(this.user)
        console.log(this.user.resultGetUser?.[0].nombres)
      })
    }
  }

  //Registrar usuario
  agregarUser() {
    console.log(this.userForm)
    this.formSubmitted = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      return;
    }
    this.userService.creatUser(this.userForm.value)
      .subscribe(resp => {
        console.log(resp)
        Swal.fire({
          title: 'Exito',
          text: `Se agrego el usuario correctamente`,
          icon: 'success',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Entendido',
          timer: 3500,
        })
      })
  }
  //Actualizar usuario
  actualizarUser() {
    console.log(this.userForm)
    this.formSubmitted = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      return;

    }
    this.userService.editUser(this.user.resultGetUser?.[0].id_user, this.userForm.value)
      .subscribe(resp => {
        console.log(resp)
        Swal.fire({
          title: 'Exito',
          text: `Se acctualizo el usuario correctamente`,
          icon: 'success',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Entendido',
          timer: 3500,
        })
      })
  }

}