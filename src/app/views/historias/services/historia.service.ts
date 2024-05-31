import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AutorModel } from "../models/historia.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class AutorService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/autor'
  constructor(private http: HttpClient) {

  }

  getTodosLosAutores (): Observable<AutorModel[]> {
    return this.http.get<AutorModel[]>(`${this.API_URL}/traerautor`);
  }

  agregarAutor(autor: AutorModel) : Observable<AutorModel> {
    return this.http.post<AutorModel>(`${this.API_URL}/crear`, autor);
  }

  editarAutor(autor: AutorModel) : Observable<AutorModel> {
    return this.http.put<AutorModel>(`${this.API_URL}/editar/${autor._id}`, autor);
  }

  eliminarAutor(idAutor : string) : Observable<AutorModel> {
    console.log(idAutor);
    // return this.http.delete<AutorModel>(`${this.API_URL}/eliminar/${idautor}`);
    return this.http.delete<AutorModel>(this.API_URL+'/eliminar/'+idAutor);

  }
}