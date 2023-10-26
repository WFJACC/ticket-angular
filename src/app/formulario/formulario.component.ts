import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  forms!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar){
    this.forms = this.fb.group({
      titular:['', [Validators.required, Validators.minLength(10)]],
      curp:['', [Validators.required, Validators.pattern(/^([a-zA-Z]{4})(\d{6})([a-zA-Z]{6})(\d{2})$/)]],
      nombre:['', Validators.required],
      paterno:['', Validators.required],
      materno:['', Validators.required],
      telefono:['', Validators.required],
      celular:['', Validators.required],
      correo:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      nivel:['', Validators.required],
      municipio:['', Validators.required],
      asunto:['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }

  datosFormulario() {
    console.log(this.forms);
  
    if (this.forms.valid) {
      this._snackBar.open('Registro Exitoso: Sus datos han sido registrados con éxito', 'Cerrar', {
        duration: 3000, // Duración del Snackbar en milisegundos (3 segundos en este caso)
      });
    } else {
      this._snackBar.open('Error de validación: Por favor complete todos los campos', 'Cerrar', {
        duration: 3000, // Duración del Snackbar en milisegundos (3 segundos en este caso)
      });
    }
  }

}

