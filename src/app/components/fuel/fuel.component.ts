import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/models/fuel';
import { FuelService } from 'src/app/services/fuel.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  fuels:Fuel[]=[];
  constructor(private fuelService:FuelService) { }

  ngOnInit(): void {
    this.getFuels();
  }

  getFuels(){
    this.fuelService.getFuels().subscribe(response=>{
      this.fuels=response.data

    })
  }
}
