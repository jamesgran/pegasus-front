import { Component } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css'
})
export class VerClientesComponent {
  constructor(private router: Router){

  }
  misClientes: Cliente[] = [];

  eliminarCliente(idCliente: number): void {
    this.misClientes = this.misClientes.filter(
      (cliente) => cliente._id !== idCliente
    );

    console.log('Eliminar', this.misClientes);
  }

  crearCliente(): void {
    this.router.navigateByUrl('agregar-cliente')

  }

}
