import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ClienteModel } from '../../../core/models/cliente.model';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { ActualizarClienteComponent } from "../actualizar-cliente/actualizar-cliente.component";
import { RUTAS } from '../../../core/enum/rutas.enum';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-agregar-clientes',
    standalone: true,
    templateUrl: './agregar-clientes.component.html',
    styleUrl: './agregar-clientes.component.css',
    imports: [ReactiveFormsModule, RouterLink, MatButtonModule, MatIconModule]
})
export class AgregarClientesComponent {
  

  constructor(private router: Router, private clienteService: ClientesService){}

  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoDocumento: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  })

  crearCliente(){
    const clienteNuevo = this.clienteForm.value;
    const usuarioId = this.clienteService.usuario_id
    

    //validar si el formulario fue llenado correctamente
    if(this.clienteForm.valid){
      const data: ClienteModel = {
        nombre: clienteNuevo.nombre || "",
        direccion: clienteNuevo.direccion || "",
        telefono: clienteNuevo.telefono || "",
        tipoDocumento: clienteNuevo.tipoDocumento || "",
        noDocumento: clienteNuevo.noDocumento || '',
        email: clienteNuevo.email || '',
        usuario_id: usuarioId
      }

      this.clienteService.crearCliente(data).subscribe({
        next: (res: any) => {
          Swal.fire('Completado', 'Cliente creado con exito', 'success')
          this.router.navigateByUrl(RUTAS.CLIENTES)
        },
        error: (error:any) => {
          Swal.fire('Error', 'Error al crear', 'error')
        }
      })
    }

  }
  atras(){
    this.router.navigateByUrl(RUTAS.CLIENTES)
  }

}
