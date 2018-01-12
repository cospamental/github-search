import { Component } from '@angular/core';
import { GithubService } from './github/githubservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[GithubService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

//2f97a80221ecfd07fa6c0695911cd5f78a5ac9a0
