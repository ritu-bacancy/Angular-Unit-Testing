import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public getData() {
    const url = 'https://dog.ceo/api/breed/mastiff/list';
    return this.http.get<any>(url);
  }
}
