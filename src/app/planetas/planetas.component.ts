import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {

  planetas;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getPlanets().subscribe(res =>{

      this.planetas = res.results;
    })
  }

}
