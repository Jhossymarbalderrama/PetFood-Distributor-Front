import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap} from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './auth.service';
import { Contact } from '../models/contact';
import { Article } from '../models/article';
import { ArticleService } from './article.service';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  userDataContact: any;
  articleSectionContact: any;


  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private AuthService: AuthService,
    private ArticleService: ArticleService) {      
  }

  getContact():Observable<Contact>{
    return this.http
    .get<Contact>(this.AuthService.getURL()+"contact/"+(this.AuthService.getUserLog()).id, {responseType: "json"})
    .pipe(
      catchError(
        this.errorHandlerService.handleError<Contact>("getContact")
      )
    )
  }

  getContactArticle():Observable<Article>{
    return this.http
    .get<Article>(this.AuthService.getURL()+"article/user/"+(this.AuthService.getUserLog()).id, {responseType: "json"})
    .pipe(      
      catchError(
        this.errorHandlerService.handleError<Article>("getArticleContact")
      )
    )
  }

  getContactArticleXSection():Observable<Article>{
    let idSection: number = 1;
    
    return this.ArticleService.getContactArticleXSection(idSection);
  }
}
