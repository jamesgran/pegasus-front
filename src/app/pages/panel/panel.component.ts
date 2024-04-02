import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from "../../shared/footer/footer.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { VerClientesComponent } from "../clientes/ver-clientes/ver-clientes.component";
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';

@Component({
    selector: 'app-panel',
    standalone: true,
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.css',
    imports: [
        RouterOutlet,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        FooterComponent,
        MatToolbarModule,
        MatListModule,
        RouterLink,
        VerClientesComponent
    ]
})
export class PanelComponent implements OnDestroy{

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private autenticacionService: AutenticacionService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  cerrarSesion():void {
    this.autenticacionService.logout()
  }


}
