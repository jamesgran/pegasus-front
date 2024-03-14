import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, 
    MatSlideToggleModule, 
    MatButtonModule,
    MatDialogModule,
    LoginComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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


