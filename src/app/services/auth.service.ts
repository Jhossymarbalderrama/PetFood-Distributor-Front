import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap} from 'rxjs';

import { User } from '../models/user';
import { Person } from '../models/person';
import { Contact } from '../models/contact';

import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:3000/";

  httpOptions: { headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  fetAllUser():Observable<User[]>{
    return this.http
      .get<User[]>(this.url+"user", {responseType: "json"})
      .pipe(
        tap((_) => console.log('fetched users')),
        catchError(
          this.errorHandlerService.handleError<User[]>("fetchAllUsers",[])
        )
      );
  }
}
