import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuel } from '../models/fuel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient:HttpClient) { }

  getFuels():Observable<ListResponseModel<Fuel>>{
    let newPath=this.apiUrl+"fuels/getall"
    return this.httpClient.get<ListResponseModel<Fuel>>(newPath)
  }

  getFuelById(fuelId:number):Observable<ListResponseModel<Fuel>>{
    let newPath=this.apiUrl+"fuels/getbyid?fuelId="+fuelId
    return this.httpClient.get<ListResponseModel<Fuel>>(newPath)
  }
}
