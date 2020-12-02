import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDisposalleService {

  private  baseUrl = 'http://localhost:9092/springboot-crud-rest/api/disposalle';
  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(`${this.baseUrl}`);
  }

  add(ex){
    return this.http.post(`${this.baseUrl}`, ex);
  }

  editt(ex){
    return this.http.put(`${this.baseUrl}`, ex);
  }

  info(id){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  delete(id){
    console.log("idd : "+id);
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
