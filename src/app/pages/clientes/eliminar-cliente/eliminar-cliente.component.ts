import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Cliente } from '../../../core/interfaces/cliente';
import { ClientesService } from '../../../services/clientes/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-cliente',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './eliminar-cliente.component.html',
  styleUrl: './eliminar-cliente.component.css',
})
export class EliminarClienteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
  private clienteService: ClientesService,) {}

    eliminarCliente() {

     this.clienteService.eliminarCliente(this.data).subscribe({
      next: (res: any) =>{
        Swal.fire('Completado', 'Cliente eliminado exitosamente', 'success')
      },
      error: (error: any) =>{
        Swal.fire('Error', 'Error al eliminar', 'error')
      }
    }) 

  }
}
