import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  forms!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
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

  datosFormulario(){
    console.log(this.forms);

    if(this.forms.valid){
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Sus datos han sido registrados con exito'
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error de validacion',
        text: 'Por favor complete todos los campos'
      })
    }
  }

}

