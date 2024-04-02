import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { RUTAS } from '../../core/enum/rutas.enum';
import { UsuarioModel } from '../../core/models/usuario.model';
import { LoginInterface } from '../../core/interfaces/login-interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  usuario: UsuarioModel;
  
  constructor(private httpClient: HttpClient, private router: Router) {}

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  validarToken(): Observable<boolean>{
    return this.httpClient.get(`${base_url}/auth`,{
      headers: {
        'x-token': this.token,
      }
    }).pipe(
      map((resp: any) =>{
        const {
          _id,
          nombre,
          tipoDocumento,
          noDocumento,
          mail,
          password,
          rol,
          estado,
          createdAt,
        } = resp.usuario;

        this.usuario = new UsuarioModel(
          _id,
          nombre,
          tipoDocumento,
          noDocumento,
          mail,
          password,
          rol,
          estado,
          createdAt,
        );
        localStorage.setItem('token', resp.token)
        localStorage.setItem('usuario', resp.usuario._id)
        
        return true
      }), 
      catchError((error) =>{
        console.error(error)
        return of(false)
      })
    )
  }

  login(login: any) {
    return this.httpClient.post(`${base_url}/auth`, login).pipe(
      //pipe permite unir otra funcion o encadenar el tap
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        this.router.navigateByUrl(RUTAS.CLIENTES)
      })
    );
  }

  logout() {
    localStorage.removeItem('token');//en vez de guardar elimina todo lo que se llame token
    localStorage.removeItem('usuario')
    this.router.navigateByUrl(RUTAS.INICIO)
  }
}
