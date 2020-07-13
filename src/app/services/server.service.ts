import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  

  API_URL: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=f2c04e22';
  

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.API_URL);
  }

  search(name) {
    let API_URL2: string = "http://www.omdbapi.com/?t=" +name+ "&apikey=f2c04e22";
    return this.http.get(API_URL2);
  }

}




