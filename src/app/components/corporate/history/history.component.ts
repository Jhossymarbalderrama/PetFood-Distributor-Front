import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public articles?: Article | any;

  constructor(
    private ArticleService: ArticleService
  ){
    let id_section_About: number = 3;
    this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) =>{
      this.articles = articleData;      
    });
  }

  ngOnInit(): void {
    
  }
}
