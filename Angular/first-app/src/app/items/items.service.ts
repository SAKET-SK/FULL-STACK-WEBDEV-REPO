import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  // CREATE OPERATION -> C
  create(payload: Items) {
    return this.http.post<Items>('http://localhost:3000/items', payload);
  }
  
  // READ OPERATION -> R
  get() {
    return this.http.get<Items[]>('http://localhost:3000/items');
  }

  // UPDATE OPERATION -> U

  // Invokes the HTTP Get endpoint by 'id' value as a filtering parameter.
  getById(id: number) {
    return this.http.get<Items>(`http://localhost:3000/items/${id}`);
   }
    
  // Invokes the HTTP Put endpoint for updating the item. Here 'id' value needs to be passed in the URL 
  // and edited data as a payload.
  update(payload:Items){
    return this.http.put(`http://localhost:3000/items/${payload.id}`,payload);
   }

   // DELETE OPERATION -> D
   delete(id:number){
    return this.http.delete<Items>(`http://localhost:3000/items/${id}`);
 }
}
