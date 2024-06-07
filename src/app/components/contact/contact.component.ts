import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public contact?: Contact;
  public article?: Article;
  public isLoading: boolean = true;

  constructor(
    private AuthService: AuthService,
    private ContactService: ContactService
  ) {
    if (this.ContactService.userDataContact) {
      this.contact = this.ContactService.userDataContact;
    } else {
      this.ContactService.getContact().subscribe(contactData => {
        this.contact = contactData;
        this.ContactService.userDataContact = this.contact;
        this.checkLoadingStatus();
      });
    }

    if (this.ContactService.articleSectionContact) {
      this.article = this.ContactService.articleSectionContact;
    } else {
      this.ContactService.getContactArticleXSection().subscribe((articlesData: any) => {
        this.article = articlesData[0];
        this.ContactService.articleSectionContact = this.article;
        this.checkLoadingStatus();
      });
    }
  }

  ngOnInit(): void {}

  private checkLoadingStatus() {
    if (this.contact && this.article) {
      this.isLoading = false; 
    }
  }
}
