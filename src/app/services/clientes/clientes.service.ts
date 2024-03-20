import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ClienteModel } from '../../core/models/cliente.model';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }


  getClientes(){
    return this.httpClient.get(`${base_url}/cliente`)
  }
  crearCliente(cliente: ClienteModel){
    return this.httpClient.post(`${base_url}/cliente`, cliente )

  }
}
