import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../core/models/usuario.model';


const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  constructor(private httpClient: HttpClient) { }

  get token (): string {
    return localStorage.getItem('token') || ''
  }

  get headers (){
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  getUsuarios(){
    return this.httpClient.get(`${base_url}/usuario`, this.headers)
  }
  crearUsuario(usuario: UsuarioModel){
    return this.httpClient.post(`${base_url}/usuario`, usuario , this.headers)
  }
  //TODO crear servicios en el back
  actualizarUsuario(usuario: UsuarioModel){
    return this.httpClient.put(`${base_url}/usuario/${usuario._id}`, usuario, this.headers)
  }
  eliminarUsuario(id: number){
  return this.httpClient.delete(`${base_url}/usuario/${id}`, this.headers)
  } 


}
