import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import sha256 from 'crypto-js/sha256';


const endpoint = 'https://mongodbutch.herokuapp.com/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  //metodo para obtener todos los productos
  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'users/getAll/').pipe(
      map(this.extractData));
  }

  addUser(user): Observable<any> {
    console.log(user);
    return this.http.post<any>(endpoint + 'users/post', JSON.stringify(user), httpOptions).pipe(
      tap((user) => console.log(`added user`)),
      catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser(id, user): Observable<any> {
    return this.http.put(endpoint + 'user/update/' + id, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  getLastLog(): Observable<any> {
    return this.http.get(endpoint + 'logs/getLast').pipe(
      map(this.extractData));
  };

  addLog(logs): Observable<any> {
    return this.http.post<any>(endpoint + `logs/post`, JSON.stringify(logs), httpOptions).pipe(
      tap((logs) => console.log(`added logs`)),
      catchError(this.handleError<any>('addLogs'))
    );
  }

  updateLog(id, log): Observable<any> {
    return this.http.put(endpoint + 'logs/update/' + id, JSON.stringify(log), httpOptions).pipe(
      tap(_ => console.log(`updated log id=${id}`)),
      catchError(this.handleError<any>('updateLog'))
    );
  }

  getTemp(): Observable<any> {
    return this.http.get(endpoint + 'temp/getLast').pipe(
      map(this.extractData));
  }

  login(user: any): Observable<any> {
    return this.http.post(endpoint + 'users/post' + JSON.stringify(user), httpOptions);
  }
  


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

  var user = "SGodina"
  var pass = "SG54321"

  var userEn = sha256(user);
  var passEn = sha256(pass);

