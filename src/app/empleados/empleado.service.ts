import { Injectable } from '@angular/core';
import { Empleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() {
    this._empleados = this.getEmpleados();
   }
  
  private localStorageKey = 'empleados';
  private _empleados: Empleado[] = [];

  // Obtener empleados desde el localStorage
  getEmpleados(): Empleado[] {
    this._empleados = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return this._empleados;
  }

  // Agregar un nuevo empleado y actualizar el localStorage
  addEmpleado(empleado: Empleado): void {
    this._empleados.push(empleado);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._empleados));
  }

  // Eliminar un empleado por su índice y actualizar el localStorage
  deleteEmpleado(index: number): void {
    this._empleados.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._empleados));
  }
}
