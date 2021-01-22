import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Peliculas } from '../model/peliculas.model';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'titulo', 'genero', 'director', 'actions'];
  dataSource = new MatTableDataSource<Peliculas>();
  constructor(private pelculas: PeliculasService, private route:Router) {
    this.pelculas.getPeliculas().subscribe(res => {
      this.dataSource.data = res;
    });
  }


  ngOnInit(): void {
  }

  edit(id:string){
    this.route.navigate(['peliculas',id])
  }

  delete(id:string){
    this.pelculas.deletePeliculas(id).subscribe(()=>{
      this.refresh();
    },error =>{
      alert("Ocurrio un error al borrar el elemento")
    });
  }

  refresh(){
    this.pelculas.getPeliculas().subscribe(res=>{
      this.dataSource.data=res;
    })

  }

}
