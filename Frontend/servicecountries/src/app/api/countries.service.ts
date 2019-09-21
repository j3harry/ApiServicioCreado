import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countriesUrl = 'http://localhost:3000/user';
  constructor(public http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesUrl).pipe(
      tap(data => console.log('ALL ' + JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = 'no hay conexion';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred ${ err.error.message }`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}

