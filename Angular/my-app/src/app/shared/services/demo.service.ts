import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  products = [
    {productId:'P101', productName:'Milk', productPrice:45},
    {productId:'P102', productName:'Bread', productPrice:60},
    {productId:'P103', productName:'Smartphone', productPrice:15000},
    {productId:'P104', productName:'Camera', productPrice:30000}
  ]
  constructor() { }
}
