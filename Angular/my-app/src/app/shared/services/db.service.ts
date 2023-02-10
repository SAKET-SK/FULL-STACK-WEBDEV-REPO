import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {}

   getRecords(){
   return this.http.get("http://localhost:3000/Employees")
  }

}
