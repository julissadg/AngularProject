import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Peliculas } from '../model/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient, ) { }

  getSinglePelicula(id:string){
    return this.http.get<Peliculas>('https://super-rest.herokuapp.com/test/julissa/'+id)
  }

  getPeliculas(): Observable<[Peliculas]>{
    return this.http.get<[Peliculas]>('https://super-rest.herokuapp.com/test/julissa/');
  }

  savePeliculas(data:Peliculas){
    return this.http.post('https://super-rest.herokuapp.com/test/julissa/',data)
  }

  updatePeliculas(id:string,data:Peliculas){
    return this.http.put('https://super-rest.herokuapp.com/test/julissa/'+ id ,data)
  }

  deletePeliculas(id:string){
    return this.http.delete('https://super-rest.herokuapp.com/test/julissa/'+ id)
  }





}
