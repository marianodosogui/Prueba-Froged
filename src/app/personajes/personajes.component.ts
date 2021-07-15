import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getPeoples().subscribe(res =>{

      this.personajes = res.results;
    })
  }

}
