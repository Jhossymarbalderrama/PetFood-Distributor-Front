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
  public articles?: Article[];
  public isLoading: boolean = true;

  constructor(private ArticleService: ArticleService) {}

  ngOnInit() {
    if (this.ArticleService.aboutArticles) {
      this.articleFirst = this.ArticleService.aboutFirstElement;
      this.articles = this.ArticleService.aboutArticles;
      this.isLoading = false;
    } else {
      let id_section_About: number = 2;
      this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) => {
        this.articleFirst = articleData.shift();
        this.articles = articleData;
        this.ArticleService.aboutFirstElement = this.articleFirst;
        this.ArticleService.aboutArticles = this.articles;
        this.isLoading = false;
      });
    }
  }

}
