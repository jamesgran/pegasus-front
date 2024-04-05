import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InteraccionService } from '../../../services/interaccion/interaccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-interaccion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './crear-interaccion.component.html',
  styleUrl: './crear-interaccion.component.css',
})
export class CrearInteraccionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private interaccionService: InteraccionService
  ) {}

  get usuarioID(){
    return localStorage.getItem('usuario')
  }

  interaccionForm = new FormGroup({
    fecha: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    detalles: new FormControl('', Validators.required),
    resultado: new FormControl('', Validators.required),
    calificacion: new FormControl(''),
    notas: new FormControl('')
  });

  crearInteraccion(){
    const interaccion = {
      fecha: this.interaccionForm.value.fecha,
      tipo: this.interaccionForm.value.tipo,
      detalles: this.interaccionForm.value.detalles,
      resultado: this.interaccionForm.value.resultado,
      calificacion: this.interaccionForm.value.calificacion,
      notas: this.interaccionForm.value.notas,
      cliente_id: this.data._id,
      usuario_id: this.usuarioID
    }

    this.interaccionService.crearInteraccion(interaccion).subscribe({
      next: (res:any) =>{
        Swal.fire('Completado', 'Interaccion creada exitosamente', 'success')
      },
      error: (err: any) => {
        Swal.fire('Error!', 'error al crear', 'error')

      }
    })

  }
}
