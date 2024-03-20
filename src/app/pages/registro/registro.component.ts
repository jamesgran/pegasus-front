import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    tipoDocumento: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),

  })

  crearUsuario(){

  }

}
