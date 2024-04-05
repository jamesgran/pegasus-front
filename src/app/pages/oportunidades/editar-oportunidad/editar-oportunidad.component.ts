import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { OportunidadesService } from '../../../services/oportunidades/oportunidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-oportunidad',
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
  templateUrl: './editar-oportunidad.component.html',
  styleUrl: './editar-oportunidad.component.css'
})
export class EditarOportunidadComponent {
  
  constructor(
    //TODO add model to data
    @Inject(MAT_DIALOG_DATA) public data: any,
    private oportunidadService: OportunidadesService,
    
  ){}
  estadoSeleccionado = this.data.estado

  oportunidadForm = new FormGroup({
    descripcion: new FormControl(this.data.descripcion, Validators.required),
    deadline: new FormControl(this.data.deadline, Validators.required),
    estado: new FormControl(this.data.estado, Validators.required)

  })

  actualizarOportunidad(){
    const oportunidad = {
      _id: this.data._id,
      deadline: this.oportunidadForm.value.deadline,
      descripcion: this.oportunidadForm.value.descripcion,
      estado: this.oportunidadForm.value.estado
      

    }
    this.oportunidadService.actualizarOportunidad(oportunidad).subscribe({
      next: (res:any) => {
        Swal.fire('Completado', 'Oportunidad actualizada satisfactoriamente','success' )

      },
      error: (err: any) => {
        Swal.fire('Error!', 'Error al actualizar', 'error')
      }
    })
  }

}
