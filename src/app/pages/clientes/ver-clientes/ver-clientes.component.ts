import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { Router } from '@angular/router';
import { ClientesService } from '../../../services/clientes/clientes.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog , MatDialogModule} from '@angular/material/dialog';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule, ActualizarClienteComponent],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css',
})
export class VerClientesComponent implements OnInit {
  misClientes: Cliente[] = [];
  

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((data: any) => {
      console.log(data);
      this.misClientes = data.clientes;
    });
  } 

  eliminarCliente(idCliente: number): void {
    const dialogRef = this.modal.open(EliminarClienteComponent, {
      width: '400px',
      data: idCliente
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  crearCliente(): void {
    this.router.navigateByUrl('agregar-cliente');
  }

  editarCliente(cliente: any){

    const dialogRef = this.modal.open(ActualizarClienteComponent, {
      width: '700px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
