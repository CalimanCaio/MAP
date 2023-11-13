import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MapService } from 'src/app/services/map.service';


@Component({
  selector: 'app-criacao-map',
  templateUrl: './criacao-map.component.html',
  styleUrls: ['./criacao-map.component.css']
})
export class CriacaoMapComponent {

  isListVisible1 = false;
  isListVisible2 = false;
  isListVisible3 = false;
  isListVisible4 = false;
  isListVisible5 = false;
  isListVisible6 = false;
  isListVisible7 = false;
  isListVisible8 = false;

  checkedCheckboxIds: string[] = [];
  getactivities: any[] = [];
  accessToken = (localStorage.getItem('access') || '').replace(/"/g, '');
  title = '';
  description = ''; // Make sure to explicitly set the type to string
  selectedActivity: number = 0;
  // constructor() {} // Inject the AuthService
  constructor(private router: Router, private mapService: MapService) {} // Inject the AuthService
  ngOnInit() {
  }
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

  onSubmit() {
    const trueIds = this.getactivities.reduce((acc: number[], value: boolean, index: number) => {
      if (value === true) {
        acc.push(index);
      }
      return acc;
    }, []);
    const createMap = {
      title : this.title,
      description : this.description,
      activities: trueIds
    }
    console.log('0000000000000000000000000000', createMap, '0000000000000000000000000000')
    this.mapService.postMap(this.accessToken, createMap).subscribe(
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
}
