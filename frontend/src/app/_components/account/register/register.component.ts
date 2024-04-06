import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../_interfaces/paciente.interface';
import { ErrorService } from '../../../_services/error.service';
import { PacienteService } from '../../../_services/paciente.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _pacienteService: PacienteService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addPaciente() {

    // Validamos que el usuario ingrese valores
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const paciente: Paciente = {
      email: this.email,
      password: this.password
    }

    this.loading = true;
    this._pacienteService.signIn(paciente).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}
