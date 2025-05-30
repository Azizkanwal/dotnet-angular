import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomePageComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
