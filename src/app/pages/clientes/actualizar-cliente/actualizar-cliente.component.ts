import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,

} from '@angular/material/dialog';
import { ClienteModel } from '../../../core/models/cliente.model';
import { Cliente } from '../../../core/interfaces/cliente';
import { ClientesService } from '../../../services/clientes/clientes.service';


@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css',
})
export class ActualizarClienteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private clienteService: ClientesService,
  ) {}

  clienteForm = new FormGroup({
    nombre: new FormControl(this.data.nombre.toString(), Validators.required),
    telefono: new FormControl(
      this.data.telefono.toString(),
      Validators.required
    ),
    email: new FormControl(this.data.email.toString(), [
      Validators.required,
      Validators.email,
    ]),
    tipoDocumento: new FormControl(
      this.data.tipoDocumento.toString(),
      Validators.required
    ),
    noDocumento: new FormControl(
      this.data.noDocumento.toString(),
      Validators.required
    ),
    direccion: new FormControl(
      this.data.direccion.toString(),
      Validators.required
    ),
  });

  actualizarCliente() {
    const clienteActualizado = this.clienteForm.value;

    if (this.clienteForm.valid) {
      //validar si el formulario fue llenado correctamente
      const newData: ClienteModel = {
        nombre: clienteActualizado.nombre || '',
        telefono: clienteActualizado.telefono || '',
        email: clienteActualizado.email || '',
        tipoDocumento: clienteActualizado.tipoDocumento || '',
        noDocumento: clienteActualizado.noDocumento || '',
        direccion: clienteActualizado.direccion || '',
      };
      this.clienteService.actualizarCliente(this.data._id, newData).subscribe({
        next: (res: any) => {
          console.log('Cliente actualizado', res)
        },
        error : (error: any) => {
          console.log('Error al crear el cliente', error)
        }
      })


    }
  }
}
