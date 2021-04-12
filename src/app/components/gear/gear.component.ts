import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gear } from 'src/app/models/gear';
import { GearService } from 'src/app/services/gear.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {

  gears:Gear[]=[];
  constructor(private gearService:GearService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["gearId"]){
        this.getGearById(params["gearId"])
      }
      else{
        this.getGears();
      }
    })
    
  }

  getGears(){
    this.gearService.getGears().subscribe(response=>{
      this.gears=response.data
    })
  }

  getGearById(gearId:number){
    this.gearService.getGearById(gearId).subscribe(response=>{
      this.gears=response.data
    })
  }
}
