import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from 'src/app/models/fuel';
import { FuelService } from 'src/app/services/fuel.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  fuels:Fuel[]=[];
  currentFuel:Fuel;
  constructor(private fuelService:FuelService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["fuelId"]){
        this.getFuelById(params["fuelId"])
      }
      else{
        this.getFuels();
      }
    })
    
  }

  getFuels(){
    this.fuelService.getFuels().subscribe(response=>{
      this.fuels=response.data

    })
  }

  getFuelById(fuelId:number){
    this.fuelService.getFuelById(fuelId).subscribe(response=>{
      this.fuels=response.data
    })
  }

  setCurrentFuel(fuel:Fuel){
    this.currentFuel=fuel;
  }


  getCurrentFuelClass(fuel:Fuel){
    if(fuel==this.currentFuel){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
