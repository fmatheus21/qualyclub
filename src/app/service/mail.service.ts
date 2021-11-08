import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private readonly apiUrl = `${environment.apiUrl}`;
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sendContact(data: any): Observable<any> {
    let url = `?name=${data.name}&email=${data.email}&phone=${data.phone}&subject=${data.subject}&message=${data.message}`;
    return this.http.get(this.apiUrl + `/assets/mail/send-mail-contact.php${url}`).pipe(
      catchError(this.handleError)
    );
  }

  /* sendContact(data: any): Observable<any> {
     console.log(data);
     return this.http.post(this.apiUrl + '/assets/mail/send-mail-contact.php', data, this.httpOptions).pipe(
       catchError(this.handleError)
     );
   }*/

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
