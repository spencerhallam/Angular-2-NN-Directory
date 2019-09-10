import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmdataService {
  
  constructor(private http: HttpClient) { }
  
  getProducts() {
    //EXAMPLE: return this.http.get('https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches');
    return this.http.get('https://data.ct.gov/resource/y6p2-px98.json');
  }
}
