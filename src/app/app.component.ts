import { Component } from '@angular/core';
import { GithubService } from './github/githubservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[GithubService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
