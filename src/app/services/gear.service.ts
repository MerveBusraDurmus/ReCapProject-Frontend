import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gear } from '../models/gear';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient:HttpClient) { }

  getGears():Observable<ListResponseModel<Gear>>{
    let newPath=this.apiUrl+"gears/getall"
    return this.httpClient.get<ListResponseModel<Gear>>(newPath)
  }

  getGearById(gearId:number):Observable<ListResponseModel<Gear>>{
    let newPath=this.apiUrl+"gears/getbyid?gearId="+gearId
    return this.httpClient.get<ListResponseModel<Gear>>(newPath)
  }
}
