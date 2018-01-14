import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/githubservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any=[];
  repos:any=[];
  username:string;
 

  constructor(private _githubService:GithubService) {}

  ngOnInit(){
    this.user = false;
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      //console.log(user)
      this.user = user;
      
    })

    this._githubService.getRepos().subscribe(repos => {
      //console.log(res)
      this.repos = repos;
      
    })
  }

}
