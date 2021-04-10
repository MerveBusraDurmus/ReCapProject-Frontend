import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GearResponseModel } from '../models/gearResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  apiUrl="https://localhost:44330/api/gears/getall"
  constructor(private httpClient:HttpClient) { }

  getGears():Observable<GearResponseModel>{
    return this.httpClient.get<GearResponseModel>(this.apiUrl)
  }
}
