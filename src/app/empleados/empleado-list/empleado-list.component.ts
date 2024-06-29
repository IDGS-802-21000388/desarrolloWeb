import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {

  constructor( private empleadoService: EmpleadoService ) { }

  public tableVisible: boolean = true;

  // Definimos un método get para obtener la lista de empleados desde el servicio
  get empleados(): Empleado[] {
    return this.empleadoService.getEmpleados();
  }

  // Definimos un método para eliminar un empleado por su índice
  deleteEmpleado(index: number): void {
    this.empleadoService.deleteEmpleado(index);
  }
  
  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible;
  }
}
