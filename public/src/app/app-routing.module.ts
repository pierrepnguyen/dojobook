import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { MessagingComponent } from './messaging/messaging.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: IndexComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
