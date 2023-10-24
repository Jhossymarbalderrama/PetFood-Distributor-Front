import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Observable, catchError, tap} from 'rxjs';
import { Article } from '../models/article';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // Section About
  aboutFirstElement: Article | undefined;
  aboutArticles: Article[] | undefined;

  // Section History
  historyArticles:  Article[] | undefined;

  // Section Export
  exportFirstElement: Article | undefined;
  exportArticles: Article[] | undefined;

  // Section About All
  aboutAllFirstElement: Article | undefined;
  aboutAllArticles: Article[] | undefined;

  // Section Dealership
  dealershipFirstElement: Article | undefined;
  dealershipArticles: Article[] | undefined

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private AuthService: AuthService
  ) {

  }

  getContactArticleXSection(id_section: number):Observable<Article>{
    return this.http
    .get<Article>(this.AuthService.getURL()+"article/section/"+id_section,  {responseType: "json"})
    .pipe(
      catchError(
        this.errorHandlerService.handleError<Article>("getArticleContact")
      )
    )
  }
}
