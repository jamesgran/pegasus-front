import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { OportunidadesService } from '../../../services/oportunidades/oportunidades.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RUTAS } from '../../../core/enum/rutas.enum';


@Component({
  selector: 'app-crear-oportunidad',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    NgIf,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    
  ],
  templateUrl: './crear-oportunidad.component.html',
  styleUrl: './crear-oportunidad.component.css',
})
export class CrearOportunidadComponent {
  resultado: boolean = true;
  hayCliente: boolean= false;

  
  //documento: string;
  clienteBuscado: any;

  constructor(
    private clienteService: ClientesService,
    private oportunidadService: OportunidadesService,
    private router: Router
    ) {}


  clienteForm = new FormGroup({
    documento: new FormControl('', Validators.required),
  });

  secondFormGroup = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required)
  });

  get usuarioID(){
    return localStorage.getItem('usuario')
  }

  buscarCliente() {
    const documento = this.clienteForm.value.documento || '';
    this.clienteService
      .getClientesByDocumento(documento)
      .subscribe({
        next: (res: any) => {
          
          //verificar que el cleinte buscado pertensca al usuario logueado
          if(res.clientes.length > 0  && res.clientes[0].usuario_id === this.usuarioID){
            console.log(res.clientes)
            this.resultado=true
            this.clienteBuscado=res.clientes
            this.hayCliente=true
          }else{
            this.resultado=false
            
          }
          

          
          
          
        },
        error( error: any){
          console.log(error)
          
        }
      })

  }

  crearOportunidad(){
    //TODO añadir modelo o interface
    const oportunidad = {
      descripcion: this.secondFormGroup.value.descripcion,
      deadline: this.secondFormGroup.value.deadline,
      cliente_id: this.clienteBuscado[0]._id,
      usuario_id: this.usuarioID,
    }
    this.oportunidadService.crearOportunidad(oportunidad).subscribe({
      next: (res:any) =>{
        console.log('oportunidad Creada', res)
        Swal.fire('Completado', 'Oportunidad creada satisfactoriamente','success' ).then(() => {
          this.router.navigateByUrl(RUTAS.VER_OPORTUNIDADES);
        });
        
      },
      error: (error: any) =>{
        console.log('error al crear', error)
        Swal.fire('Error!', 'Error al crear', 'error')
      }
    })
    

  }
}
