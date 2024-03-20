import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ClienteModel } from '../../../core/models/cliente.model';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Cliente){

  }

  clienteForm = new FormGroup({
    nombre: new FormControl(this.data.nombre, Validators.required),
    telefono: new FormControl(this.data.telefono, Validators.required),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    tipoDocumento: new FormControl(this.data.tipoDocumento, Validators.required),
    noDocumento: new FormControl(this.data.noDocumento, Validators.required),
    direccion: new FormControl(this.data.direccion, Validators.required),

  })

  actualizarCliente(){
    console.log(this.data)
  }

}
