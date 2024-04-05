import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InteraccionService } from '../../../services/interaccion/interaccion.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-interaccion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  templateUrl: './editar-interaccion.component.html',
  styleUrl: './editar-interaccion.component.css'
})
export class EditarInteraccionComponent {
  get usuarioID(){
    return localStorage.getItem('usuario')
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private interaccionService: InteraccionService
  ){}

  interaccionForm = new FormGroup({
    fecha: new FormControl(this.data.fecha, Validators.required),
    tipo: new FormControl(this.data.tipo, Validators.required),
    detalles: new FormControl(this.data.detalles, Validators.required),
    resultado: new FormControl(this.data.resultado, Validators.required),
    calificacion: new FormControl(this.data.calificacion),
    notas: new FormControl(this.data.notas)
  });

  actualizarInteraccion(){
    console.log('datos', this.data)
    const interaccion = {
      _id: this.data._id,
      fecha: this.interaccionForm.value.fecha,
      tipo: this.interaccionForm.value.tipo,
      detalles: this.interaccionForm.value.detalles,
      resultado: this.interaccionForm.value.resultado,
      calificacion: this.interaccionForm.value.calificacion,
      notas: this.interaccionForm.value.notas,
      cliente_id: this.data.cliente_id,
      usuario_id: this.usuarioID
    }

    this.interaccionService.actualizarInteraccion(interaccion)
    .subscribe({
      next: (res: any) =>{
        Swal.fire('Completado', 'Interaccion actualizada exitosamente', 'success')
      },
      error: (err: any) => {
        Swal.fire('Error!', 'error al crear', 'error')

      }
    })


  }

}
