import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';


import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private access_token:string = environment.access_token;

  constructor(private _http:HttpClient) {
    console.log("Service is ready..");
    this.username = 'cospamental';

   }

   getUser(){
     return this._http.get('https://api.github.com/users/'+this.username + '?access_token=' + this.access_token)
      .map(result => result);
   }

   getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username + '/repos' + '?access_token=' + this.access_token)
    .map(result => result);
   }

}
