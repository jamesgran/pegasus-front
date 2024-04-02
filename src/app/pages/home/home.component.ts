import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        RouterLink,
        MatSlideToggleModule,
        MatButtonModule,
        MatDialogModule,
        LoginComponent,
        FooterComponent,
        RouterOutlet
    ]
})
export class HomeComponent {

  constructor(private modal: MatDialog){

  }

  openLogin(){
    const dialogRef = this.modal.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  }


