import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-clientes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-clientes.component.html',
  styleUrl: './agregar-clientes.component.css'
})
export class AgregarClientesComponent {

  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoDocumento: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  })

  crearCliente(){

  }

}
