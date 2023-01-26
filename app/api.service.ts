import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getJPData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  getDData(){
    return this.http.get('https://dummyjson.com/products/1');
  }

}