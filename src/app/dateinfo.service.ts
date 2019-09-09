import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateinfoService {
  
  constructor(private http: HttpClient) { }
  
  getHistory() {
    //return this.http.get('https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches');
    return this.http.get('https://data.ct.gov/resource/y6p2-px98.json');
    //return this.http.get('https://reqres.in/api/users');
    //return this.http.get('https://history.muffinlabs.com/date');
    //return this.http.get('/api/file.php');
  }
}
