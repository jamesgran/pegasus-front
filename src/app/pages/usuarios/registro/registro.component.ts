import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../../core/models/usuario.model';
import Swal from 'sweetalert2';
import { RUTAS } from '../../../core/enum/rutas.enum';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ){

  }
  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    tipoDocumento: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })

  crearUsuario(){
    const newUsuario: UsuarioModel = {
      nombre: this.usuarioForm.value.nombre || '',
      tipoDocumento: this.usuarioForm.value.tipoDocumento || '',
      noDocumento: this.usuarioForm.value.noDocumento || '',
      email: this.usuarioForm.value.email || '',
      password: this.usuarioForm.value.password || '',
    }

    this.usuarioService.crearUsuario(newUsuario).subscribe({
      next: (res: any)=>{
        Swal.fire('Procceso exitoso', 'Usuario creado exitosamente', 'success')

      },
      error: (err: any) =>{
        Swal.fire('Error', 'Error al crear', 'error')
        this.router.navigateByUrl(RUTAS.INICIO)
      }
    })

  }

}
