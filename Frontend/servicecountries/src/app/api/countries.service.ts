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
      tap(data => data),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = 'no hay conexion';

    switch(err.status) {
      case 0:
        errorMessage = `Problemas en el servidor... CODIGO DE ERROR: ${ err.status }`;
        break;
      case 400:
        errorMessage = `Ops, problemas en el servidor... CODIGO DE ERROR: ${ err.status }`;
        break;
      case 403:
        errorMessage = `El usuario no tiene acceso a esta operación... CODIGO DE ERROR: ${ err.status }`;
        break;
      case 500:
        errorMessage = `El servidor no pudo procesar la petición... CODIGO DE ERROR: ${ err.status }`;
        break;
      default:
        errorMessage = `Por favor intente de nuevo... CODIGO DE ERROR: ${ err.status }`;
    }

    return throwError(errorMessage);
    /*
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred ${ err.error.message }`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
    */
  }
}

