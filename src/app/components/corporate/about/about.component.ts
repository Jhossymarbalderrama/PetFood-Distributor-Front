import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  public articleFirst?: Article;
  public articles?: Article | any;

  constructor(
    private ArticleService: ArticleService
  ){
    let id_section_About: number = 2;
    this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) =>{
      this.articleFirst = articleData.shift();
      this.articles = articleData;      
    });
  }

  ngOnInit(): void {
    
  }
}
