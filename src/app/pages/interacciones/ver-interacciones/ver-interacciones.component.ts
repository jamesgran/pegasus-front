import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { InteraccionService } from '../../../services/interaccion/interaccion.service';

@Component({
  selector: 'app-ver-interacciones',
  standalone: true,
  imports: [
    MatAccordion,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './ver-interacciones.component.html',
  styleUrl: './ver-interacciones.component.css',
})
export class VerInteraccionesComponent implements OnInit, OnDestroy{
  dataSource: MatTableDataSource<any>;
  interaccionesSubscription: Subscription;
  displayedColumns: string[] = [
    'documento',
    'nombre',
    'tipo',
    'fecha',
    'resultado',
    'acciones'
  ];
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private interaccionesService: InteraccionService) {
  }


  ngOnInit(): void {
    this.cargarInteracciones();
  }

  ngOnDestroy(): void {
    if (this.interaccionesSubscription) {
      this.interaccionesSubscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarInteracciones(): void {
    this.interaccionesSubscription = this.interaccionesService
      .getInteraccionesByUsuario()
      .subscribe((res: any) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res.interacciones);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource)
      });
  }

  editarInteraccion(interaccion: any){

  }
}