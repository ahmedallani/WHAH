import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:3000';

  google() {
    return this.http.get(this.ROOT_URL + '/google');
  }
}
