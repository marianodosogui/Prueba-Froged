import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.scss']
})
export class NavesComponent implements OnInit {

  naves;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getStarships().subscribe(res =>{

      this.naves = res.results;
    })
  }

}
