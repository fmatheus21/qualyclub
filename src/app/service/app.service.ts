import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  blog = './assets/blog.json';
  banner = './assets/banner.json';

  constructor(public http: HttpClient) {
  }

  loadBanner(): Observable<any[]> {
    return this.http.get<any[]>(this.banner);
  }

  loadBlog(): Observable<any[]> {
    return this.http.get<any[]>(this.blog);
  }


}
