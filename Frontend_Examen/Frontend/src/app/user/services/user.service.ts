import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User, _User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //Nuestra base de la url de la api
  private url: string = environment.base_url;
  constructor(
    private http: HttpClient
  ) { }

  //Creamos nuestro servicio que extrae los usuarios validando los datos con la clase USER
  //Despues simplificamos el objecto a un array simple con nuestra interfaz
  public getAllTodos(): Observable<User[]> {
    return this.http.get<_User>(this.url + '/users/get-users')
      .pipe(map(response => response.users))
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Buscamos y mandamos un observable de igual manera simplificando el objeto a un array
  public search(type: any, termino: string): Observable<User[]> {
    return this.http.get<_User>(`${this.url}/users/search/${type}/${termino}`)
      .pipe(map(response => response.users))


  }

  //Servicio para registrar usuario
  public creatUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.url + '/users/create-user', user)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Servicio para eliminar usuario
  public deleteUser(id_user: number): Observable<User> {
    return this.http.delete<User>(this.url + '/users/delete-user/' + id_user)

  }
  public editUser(id_user: number, user: User): Observable<User[]> {
    return this.http.put<User[]>(`${this.url}/users/edit-user/${id_user}`, user)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //  Servicio para extrar usuario por id
  public getUserById(id_user: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/get-user/${id_user}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Manejar errores 
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

