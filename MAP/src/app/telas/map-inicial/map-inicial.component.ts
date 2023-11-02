import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map-inicial',
  templateUrl: './map-inicial.component.html',
  styleUrls: ['./map-inicial.component.css']
})
export class MapInicialComponent implements OnInit{
  //minhasMaps: []; // Suponha que Atividade seja a interface para seus dados.

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    
  }
}
