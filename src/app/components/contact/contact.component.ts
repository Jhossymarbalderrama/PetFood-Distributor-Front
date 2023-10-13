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
  // users$: Observable<User[]>;

  public contact?: Contact;
  public article?: Article;

  constructor(
    private AuthService:AuthService,
    private ContactService: ContactService
  ){
    // let userLists: any;

    // this.users$ = this.fetchAllUsers();
    
    // this.auth.fetAllUser().subscribe(user =>{
    //   userLists = user;
    //   console.log(userLists);
      
    // });

    // if(userLists){
    //   if(userLists.find(this.userLog)){
    //     console.log("Usuario encontrado...");
    //     console.log("Me traigo sus datos...");
        
    //   }
    // }
    this.ContactService.getContact().subscribe(contactData =>{
      this.contact = contactData;     
      console.log(this.contact);
      
    });

    this.ContactService.getContactArticle().subscribe(articleData =>{
      this.article = articleData;
      console.log(this.article);
      
    })
  }

  ngOnInit(): void {    
  }

  // fetchAllUsers(): Observable<User[]>{
  //   return this.auth.fetAllUser();
  // }
}
