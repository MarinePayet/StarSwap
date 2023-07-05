import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {

  private configUrl = 'https://swapi.dev/api/';
  planets: any;

  constructor( private http: HttpClient){
  }

  getPlanets(){
    this.http.get<any>(`${this.configUrl}/planets`).subscribe(data => {
      this.planets = data;
    });
  }

  ngOnInit(){
    this.getPlanets();
    };
}
