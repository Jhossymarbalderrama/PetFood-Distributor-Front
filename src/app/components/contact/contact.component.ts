import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  private userLog: User = {
    id: 1,
    user: "blackdev",
    password: "blackdev998"
  }

  users$: Observable<User[]>;

  constructor(
    private auth:AuthService
  ){
    let userLists: any;

    this.users$ = this.fetchAllUsers();
    
    this.auth.fetAllUser().subscribe(user =>{
      userLists = user;
      console.log(userLists);
      
    });

    if(userLists){
      if(userLists.find(this.userLog)){
        console.log("Usuario encontrado...");
        console.log("Me traigo sus datos...");
        
      }
    }
  }

  ngOnInit(): void {    
  }

  fetchAllUsers(): Observable<User[]>{
    return this.auth.fetAllUser();
  }
}
