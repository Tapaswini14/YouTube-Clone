import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ShortsComponent } from './Components/shorts/shorts.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shorts',
    component: ShortsComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
