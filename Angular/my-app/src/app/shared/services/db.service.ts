import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {}

  // Adding the records to the server
  // C from CRUD
  addRecord(empData: any){
    return this.http.post("http://localhost:3000/Employees/",empData)
  }

  // Read all records from the server
  // R from CRUD
  getRecords(){
   return this.http.get("http://localhost:3000/Employees")
  }

  // Delete records from the server
  // D from CRUD
  deleteRecord(id:any){
    const url = "http://localhost:3000/Employees/" + id
    return this.http.delete(url)
  }



}
