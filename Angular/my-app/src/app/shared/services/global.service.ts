import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseURL:string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getRecords(table: string){
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }

  addRecord(table:any, empData: any){
    const url = `${this.baseURL}/${table}`;
    return this.http.post(url,empData)
  }

  getRecord(table:any, id:any){
    const url = `${this.baseURL}/${table}/${id}`
    return this.http.get(url)
  }

  updateRecord(table:any, empData:any){
    const url = `${this.baseURL}/${table}/${empData.id}`
    return this.http.put(url, empData)
  }

  deleteRecord(table:any, id:any){
    const url = `${this.baseURL}/${table}/${id}`;
    return this.http.delete(url)
  }

  login(user:any){
    sessionStorage.setItem("userkey",user)
  }
  logout(){
    sessionStorage.removeItem("userkey")
  }
}
