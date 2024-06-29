import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CabeceraComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabeceraComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent
  ]
})
export class EmpleadosModule { }
