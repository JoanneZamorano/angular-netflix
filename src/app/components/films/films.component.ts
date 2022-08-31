import { filmsInterface, topInterface } from './../../models/films.interface.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {
  
  @Input() films!: filmsInterface;


  


  constructor() { }

  ngOnInit(): void {
    console.log('films', this.films);
  }
}

