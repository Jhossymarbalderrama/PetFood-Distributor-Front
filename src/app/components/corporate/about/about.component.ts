import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  imgDog: string = '../../../../assets/img/corporate/about/dog.webp';
  public articleFirst?: Article;
  public articles?: Article[] | undefined;

  constructor(
    private ArticleService: ArticleService
  ){
   if(this.ArticleService.aboutArticles){
    this.articleFirst = this.ArticleService.aboutFirstElement;
    this.articles = this.ArticleService.aboutArticles;
   }else{
    let id_section_About: number = 2;
    this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) =>{           
      this.articleFirst = articleData.shift();
      this.articles = articleData;    
      this.ArticleService.aboutFirstElement = this.articleFirst;
      this.ArticleService.aboutArticles = this.articles;  
    });
   }
  }

  ngOnInit(): void {
    
  }
}
