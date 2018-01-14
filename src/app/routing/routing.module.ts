import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '../users/users.component';
import { ProfileComponent } from '../profile/profile.component';

const routes:Routes=[
  {path:'repo',component:UsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'',redirectTo:'/profile',pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
