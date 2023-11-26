import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map-inicial',
  templateUrl: './map-inicial.component.html',
  styleUrls: ['./map-inicial.component.css']
})
export class MapInicialComponent implements OnInit{
  accessToken = (localStorage.getItem('access') || '').replace(/"/g, ''); // Remove double quotes
  minhasMaps: any[] = []; // Suponha que Atividade seja a interface para seus dados.
  mapsCompartilhadas: any[] = []; // Suponha que Atividade seja a interface para
  constructor( private router: Router, private mapService: MapService)  {} // private mapService: MapService

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mapService.getMap(this.accessToken).subscribe(
      (response: Object) => {
        if (Array.isArray(response)) {
          this.minhasMaps = response as any[];
          console.log(this.minhasMaps);
        } else {
          console.error('A resposta não é um array de atividades.');
        }
      },
      (error) => {
        console.error('Falha em carregar as MAPs.', error);
        localStorage.setItem('access', '');
      }
    );
  }

  showEditForm: boolean = false;
  selectedMap: any;
  deletedMapId: any[] = [];
  showModal = false;
  activities: any[] = [];
  title: string = "";
  description: string = "";
  
  editMap(map: any) {
    this.title = map.title; // Set the title variable with the map's title
    this.description = map.description; // Set the description variable with the map's description
    this.activities = map.activities[map.id];
    this.showModal = true; // Show the modal
  }
  hidenModal(){
    this.showModal = false;
  }

  deleteMap(map: any) {
    console.log(map);
    this.deletedMapId.push(map);
    this.mapService.deleteMap(this.accessToken, map).subscribe(
      (response: any) => {
        alert('MAP deletada.');
      },
      (error) => {
        alert('Falha em deletar MAP.')
      }
    )
  }

  saveMap() {
    // Save the changes made in the edit form
    // Your save logic goes here
    this.mapService.putMap(this.accessToken, '', 1).subscribe(
      (response: any) => {
        alert('MAP editada com sucesso!');
        this.router.navigate(['map-inicial']);
      },
      (error) => {
        console.error('createMap failed:', error);
        alert('Falha na edição da MAP.');
      }
    );
  }

  cancelEdit(map: any) {
    // Cancel the edit and hide the edit form
    map.editing = !map.editing;
  }
}
