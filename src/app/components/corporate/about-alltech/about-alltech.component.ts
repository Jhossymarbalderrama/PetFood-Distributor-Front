import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-about-alltech',
  templateUrl: './about-alltech.component.html',
  styleUrls: ['./about-alltech.component.css']
})
export class AboutAlltechComponent implements OnInit{
  public articleFirst?: Article;
  public articles?: Article | any;

  constructor(
    private ArticleService: ArticleService
  ){
    let id_section_About: number = 7;
    this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) =>{
      this.articleFirst = articleData.shift();
      this.articles = articleData;      
    });
  }

  ngOnInit(): void {
    
  }
}
