import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap} from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './auth.service';
import { Contact } from '../models/contact';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(
    private htpp: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private AuthService: AuthService) {      
  }

  getContact():Observable<Contact>{
    return this.htpp
    .get<Contact>(this.AuthService.getURL()+"contact/"+(this.AuthService.getUserLog()).id, {responseType: "json"})
    .pipe(
      catchError(
        this.errorHandlerService.handleError<Contact>("getContact")
      )
    )
  }

  getContactArticle():Observable<Article>{
    return this.htpp
    .get<Article>(this.AuthService.getURL()+"article/user/"+(this.AuthService.getUserLog()).id, {responseType: "json"})
    .pipe(      
      catchError(
        this.errorHandlerService.handleError<Article>("getArticleContact")
      )
    )
  }
}
