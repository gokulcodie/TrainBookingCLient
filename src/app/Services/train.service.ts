import { Injectable } from '@angular/core';
import {Train} from "../Models/train";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private url:string="http://localhost:3000/trains"
  constructor(private _http:HttpClient) { }

  public getTrains():Observable<any>{
    return this._http.get(this.url);
  }

  addNewTrain(train:any):Observable<any> {
    return this._http.post(this.url,train);
  }
}
