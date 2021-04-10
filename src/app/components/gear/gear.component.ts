import { Component, OnInit } from '@angular/core';
import { Gear } from 'src/app/models/gear';
import { GearService } from 'src/app/services/gear.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {

  gears:Gear[]=[];
  constructor(private gearService:GearService) { }

  ngOnInit(): void {
    this.getGears();
  }

  getGears(){
    this.gearService.getGears().subscribe(response=>{
      this.gears=response.data
    })
  }
}
