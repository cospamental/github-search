import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './github/githubservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
