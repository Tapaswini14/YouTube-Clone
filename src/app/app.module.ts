import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { ShortsComponent } from './Components/shorts/shorts.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortsComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
