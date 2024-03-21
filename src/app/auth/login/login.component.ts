import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { RUTAS } from '../../core/enum/rutas.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private autenticacionService: AutenticacionService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get login() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  realizoLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.value;

    this.autenticacionService.login(data).subscribe({
      next: (res: any) => {
        if (res && res.usuario) {
          const { nombre } = res.usuario;
          Swal.fire({
            html: `Bienvenido ${nombre}`,
          }).then(() => {
            this.router.navigateByUrl(RUTAS.CLIENTES);
          });
        }
      },
      error: (error: any) => {
        console.error(error.error)
      }
    });
  }

}
