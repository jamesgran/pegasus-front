import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Cliente } from '../../../core/interfaces/cliente';
import { ClientesService } from '../../../services/clientes/clientes.service';

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
    console.log('are you there?')
    console.log(this.data)
     this.clienteService.eliminarCliente(this.data).subscribe({
      next: (res: any) =>{
        console.log('Cliente eliminado', res)
      },
      error: (error: any) =>{
        console.log('error al eliminar el Cliente', error)
      }
    }) 

  }
}
