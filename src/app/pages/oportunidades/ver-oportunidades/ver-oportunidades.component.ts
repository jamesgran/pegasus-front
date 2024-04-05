import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RUTAS } from '../../../core/enum/rutas.enum';
import { MatDialog , MatDialogModule} from '@angular/material/dialog';
import { OportunidadesService } from '../../../services/oportunidades/oportunidades.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EditarOportunidadComponent } from '../editar-oportunidad/editar-oportunidad.component';

@Component({
  selector: 'app-ver-oportunidades',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './ver-oportunidades.component.html',
  styleUrl: './ver-oportunidades.component.css'
})
export class VerOportunidadesComponent implements OnInit, OnDestroy{
  oportunidadSubscription: Subscription;
  oportunidades: any[] = [];

  constructor(
    private oportunidadService: OportunidadesService,
    private router: Router,
    private modal: MatDialog
  ){}

  ngOnDestroy(): void {
    this.oportunidadSubscription?.unsubscribe()
  }
  ngOnInit(){
    this.cargarOportunidades();
  }


  cargarOportunidades(){
    this.oportunidadSubscription = this.oportunidadService
    .getOportunidadesByUsuario()
    .subscribe((res: any) => {
      this.oportunidades = res.oportunidades;
      console.log(res)
    });
    

  }

  editarOportunidad(oportunidad : any){
    const dialogRef = this.modal.open(EditarOportunidadComponent, {
      width: '700px',
      data: oportunidad
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.cargarOportunidades()
    });
    
  }

  crearOportunidad(){
    this.router.navigateByUrl(RUTAS.ADD_OPORTUNIDAD);

  }

}
