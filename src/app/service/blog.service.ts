import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  json = './assets/blog.json';

  constructor(public http: HttpClient) {
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.json);
  }


}
