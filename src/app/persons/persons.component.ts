import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  private configUrl = 'https://swapi.dev/api/';
  persons: any;

  constructor( private http: HttpClient){
  }

  getPersons(){
    this.http.get<any>(`${this.configUrl}/people`).subscribe(data => {
      this.persons = data;
      console.log(this.persons);
    });
  }



  ngOnInit(){
    this.getPersons();
    };

}



