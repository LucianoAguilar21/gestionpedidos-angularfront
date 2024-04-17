import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngMaterialModule } from './ang-material/ang-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngMaterialModule
  ],
  exports:[
    AngMaterialModule
  ]
})
export class SharedModule { }
