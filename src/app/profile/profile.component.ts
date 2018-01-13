import { Component } from '@angular/core';
import { GithubService } from '../github/githubservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any=[];
  repos:any=[];
  username:string;

  constructor(private _githubService:GithubService) {}

  ngOnInit(){
    this._githubService.getUser().subscribe(res => {
      console.log(res)
      this.user = res;
      
    })

    this._githubService.getRepos().subscribe(res => {
      console.log(res)
      this.repos = res;
      
    })
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(res => {
      console.log(res)
      this.user = res;
      
    })

    this._githubService.getRepos().subscribe(res => {
      console.log(res)
      this.repos = res;
      
    })
  }

}
