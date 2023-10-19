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

  constructor(
    private AuthService:AuthService,
    private ContactService: ContactService
  ){
    this.ContactService.getContact().subscribe(contactData =>{
      this.contact = contactData;     
    });

    this.ContactService.getContactArticleXSection().subscribe((articlesData: any) =>{
      this.article = articlesData[0];
    })
  }

  ngOnInit(): void {    
  }

}
