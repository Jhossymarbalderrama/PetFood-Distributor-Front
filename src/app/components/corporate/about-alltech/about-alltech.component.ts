import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-about-alltech',
  templateUrl: './about-alltech.component.html',
  styleUrls: ['./about-alltech.component.css']
})
export class AboutAlltechComponent implements OnInit {

  imgPort:string = '../../../../assets/img/corporate/About alltech/city.webp';
  public articleFirst?: Article;
  public articles?: Article | any;

  constructor(
    private ArticleService: ArticleService
  ) {
    if (this.ArticleService.aboutAllArticles && this.ArticleService.aboutAllFirstElement) {
      this.articleFirst = this.ArticleService.aboutAllFirstElement;
      this.articles = this.ArticleService.aboutAllArticles;
    } else {
      let id_section_About: number = 7;
      this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) => {
        this.articleFirst = articleData.shift();
        this.articles = articleData;
        this.ArticleService.aboutAllFirstElement = this.articleFirst;
        this.ArticleService.aboutAllArticles = this.articles;
      });
    }
  }

  ngOnInit(): void {

  }
}
