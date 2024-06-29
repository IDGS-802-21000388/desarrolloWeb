import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {

  empleado: Empleado = {
    numeroEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  };

  constructor( private empleadoService: EmpleadoService ) { }

  addEmpleado() { 

    // validaciones
    if ( this.empleado.nombre.trim().length === 0 || 
          this.empleado.correo.trim().length === 0 || 
          this.empleado.telefono.trim().length === 0 || 
          this.empleado.fechaNacimiento.trim().length === 0 || 
          this.empleado.sexo.trim().length === 0 ) {
      return;
    }

    this.empleadoService.addEmpleado(this.empleado);

    // limpiar el formulario
    this.empleado = {
      numeroEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      sexo: ''
    };
  }

}
