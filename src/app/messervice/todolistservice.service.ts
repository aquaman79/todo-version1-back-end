import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodolistserviceService {

  myURL="http://localhost:4200/todo-list/"
  constructor(private httpClient :HttpClient) { }
  getAll()
  {
    return new Observable(observer=>{
      this.httpClient.get(this.myURL).subscribe()
    })
  }
  get(id:number){
    return   new Observable(observer=>{
      
    })
  }
  
}
