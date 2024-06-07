import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  imgCat: string = '../../../../assets/img/corporate/export/cat.webp';
  public articleFirst?: Article;
  public articles?: Article[];
  public isLoading: boolean = true;

  constructor(private ArticleService: ArticleService) {}

  ngOnInit(): void {
    if (this.ArticleService.exportArticles && this.ArticleService.exportFirstElement) {
      this.articleFirst = this.ArticleService.exportFirstElement;
      this.articles = this.ArticleService.exportArticles;
      this.isLoading = false;
    } else {
      let id_section_About: number = 5;
      this.ArticleService.getContactArticleXSection(id_section_About).subscribe((articleData: any) => {
        this.articleFirst = articleData.shift();
        this.articles = articleData;
        this.ArticleService.exportFirstElement = this.articleFirst;
        this.ArticleService.exportArticles = this.articles;
        this.isLoading = false; 
      });
    }
  }
}
