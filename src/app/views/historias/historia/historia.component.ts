import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { AutorModel } from '../models/historia.model';
import { AutorService } from '../services/historia.service';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,
    CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule ,FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.scss'
})
export class AutorComponent {
  listaAutores : AutorModel[] = [];
  autorModelo : AutorModel = new AutorModel();
  /**
   *
   */
  constructor(private autorService: AutorService) {
    this.getAutores();

  }

  getAutores(){
    this.autorService.getTodosLosAutores().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaAutores = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarAutor(){
    console.log(this.autorModelo);
    if (this.autorModelo._id == '') {
      console.log("guardar", this.autorModelo);
      this.agregarAutor();
    } else {
      console.log("editar", this.autorModelo);
      this.editarAutor();
    }


  }
  agregarAutor(){
    this.autorService.agregarAutor(this.autorModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getAutores();
          this.autorModelo = new AutorModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarAutor(autor: AutorModel){
    console.log("itema para eliminar", autor);
    this.autorService.eliminarAutor(autor._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getAutores();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verAutor(autor: AutorModel){
    this.autorModelo = autor;
  }

  editarAutor(){
    this.autorService.editarAutor(this.autorModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getAutores();
          this.autorModelo = new AutorModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
