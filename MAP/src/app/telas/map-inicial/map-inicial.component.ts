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
          console.error('Response is not an array of objects');
        }
      },
      (error) => {
        console.error('Failed to load map data', error);
        localStorage.setItem('access', '');
      }
    );
  }



  showEditForm: boolean = false;
  selectedMap: any;
  deletedMapId: any[] = [];
  showModal = false;
  getactivities: any [] = [];
  title: string = "";
  description: string = "";
  isListVisible1 = false;
  isListVisible2 = false;
  isListVisible3 = false;
  isListVisible4 = false;
  isListVisible5 = false;
  isListVisible6 = false;
  isListVisible7 = false;
  isListVisible8 = false;
  toggleList1(){
    this.isListVisible1 = !this.isListVisible1;
  }
  toggleList2(){
    this.isListVisible2 = !this.isListVisible2;
  }
  toggleList3(){
    this.isListVisible3 = !this.isListVisible3;
  }
  toggleList4(){
    this.isListVisible4 = !this.isListVisible4;
  }
  toggleList5(){
    this.isListVisible5 = !this.isListVisible5;
  }
  toggleList6(){
    this.isListVisible6 = !this.isListVisible6;
  }
  toggleList7(){
    this.isListVisible7 = !this.isListVisible7;
  }
  toggleList8(){
    this.isListVisible8 = !this.isListVisible8;
  }
  editMap(map: any) {
    this.title = map.title; // Set the title variable with the map's title
    this.description = map.description; // Set the description variable with the map's description
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
        alert('delete map');
      },
      (error) => {
        alert('failed to delete')
      }
    )
  }

  saveMap() {
    // Save the changes made in the edit form
    // Your save logic goes here
    this.mapService.putMap(this.accessToken, '', 1).subscribe(
      (response: any) => {
        alert('create Map successfully');
        this.router.navigate(['map-inicial']);
      },
      (error) => {
        console.error('createMap failed:', error);
        alert('falha no createMap');
      }
    );
  }

  cancelEdit(map: any) {
    // Cancel the edit and hide the edit form
    map.editing = !map.editing;
  }
}
