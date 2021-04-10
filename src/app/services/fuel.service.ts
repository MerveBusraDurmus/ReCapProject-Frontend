import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuelResponseModel } from '../models/fuelResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  apiUrl="https://localhost:44330/api/fuels/getall"
  constructor(private httpClient:HttpClient) { }

  getFuels():Observable<FuelResponseModel>{
    return this.httpClient.get<FuelResponseModel>(this.apiUrl)
  }
}
