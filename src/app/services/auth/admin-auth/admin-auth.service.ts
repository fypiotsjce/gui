import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { consts } from 'src/consts';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  apiURL = consts.API_BASE_PATH;
  constructor(private http: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  test(): any{
    console.log("Adm-auth-service test getting-data");
    return this.http
    .get(this.apiURL + "5004")
    .pipe(retry(1), catchError(this.handleError));
  }

    // Error handling
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}
