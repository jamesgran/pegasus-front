import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {

  constructor(private httpClient: HttpClient) { }

  get token (): string {
    return localStorage.getItem('token') || ''
  }

  get usuario_id(): string {
    return localStorage.getItem('usuario') || ''
  }

  get headers (){
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  getOportunidades(){
    return this.httpClient.get(`${base_url}/oportunidad/${this.usuario_id}`, this.headers)
  }
  getOportunidadesByUsuario(){
    return this.httpClient.get(`${base_url}/oportunidad/OportunidadesByUsuario/${this.usuario_id}`, this.headers)

  }

  //TODO añadir modelo o interface
  crearOportunidad(oportunidad: any){
    return this.httpClient.post(`${base_url}/oportunidad`, oportunidad , this.headers)
  }
  actualizarOportunidad(oportunidad: any){//TODO model o interface
    return this.httpClient.put(`${base_url}/oportunidad/${oportunidad._id}`, oportunidad, this.headers)
  }

/*   
  crearCliente(cliente: ClienteModel){
    return this.httpClient.post(`${base_url}/cliente`, cliente , this.headers)
  }

  eliminarCliente(id: number){
  return this.httpClient.delete(`${base_url}/cliente/${id}`, this.headers)
  } */
}
