import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Peliculas } from '../model/peliculas.model';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  formPeliculas:FormGroup;
  id: string;

  constructor(private formBuild: FormBuilder, private peliculas: PeliculasService, private route : ActivatedRoute, private router : Router) {
    this.formPeliculas = this.formBuild.group({
      titulo:['',[Validators.required, Validators.minLength(1),Validators.maxLength(30),Validators.pattern('[a-zA-z 0-9]*')]],
      genero: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(15),Validators.pattern('[a-zA-z ]*')]],
      director:['',[Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern('[a-zA-z ]*')]]
    });
    this.route.params.subscribe(parameters => {
      if(parameters.id){
        this.id = parameters.id;

        this.peliculas.getSinglePelicula(parameters.id).subscribe(res=>{
            this.formPeliculas.get('titulo').setValue(res.titulo);
            this.formPeliculas.get('genero').setValue(res.genero);
            this.formPeliculas.get('director').setValue(res.director);
        });
      }
    });
   }

  ngOnInit(): void {
  }

  peliculasSave(){
    const data = new Peliculas();

    data.titulo = this.formPeliculas.get('titulo').value;
    data.genero = this.formPeliculas.get('genero').value;
    data.director = this.formPeliculas.get('director').value;

    if(this.id){
      this.peliculas.updatePeliculas(this.id,data).subscribe(()=>{
        this.router.navigate(['list']);
      },error =>{
        alert("No se pudo actualizar el elemento");
      });
    }else{
      this.peliculas.savePeliculas(data).subscribe(() => {
        this.router.navigate(['list']);
      },error=>{
        alert("No se pudo guardar");
      });
    }


    }
}
