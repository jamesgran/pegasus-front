import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Cliente } from '../../../core/interfaces/cliente';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-actualizar-usuario',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css',
})
export class ActualizarUsuarioComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private usuarioService: UsuariosService
  ) {}

  usuarioForm = new FormGroup({
    nombre: new FormControl(this.data.nombre.toString(), Validators.required),

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
  });

  actualizarUsuario() {
    const usuarioActualizado = this.usuarioForm.value;

    if (this.usuarioForm.valid) {
      //validar si el formulario fue llenado correctamente
      const newData: any = {
        nombre: usuarioActualizado.nombre || '',
        email: usuarioActualizado.email || '',
        tipoDocumento: usuarioActualizado.tipoDocumento || '',
        noDocumento: usuarioActualizado.noDocumento || '',
      };
      this.usuarioService.actualizarUsuario(this.data._id, newData).subscribe({
        next: (res: any) => {
          console.log('Usuario actualizado', res)
          
        },
        error : (error: any) => {
          console.log('Error al editar el usuario', error)
        }
      })


    }
  }
}
