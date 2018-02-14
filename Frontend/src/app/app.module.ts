import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { D3Service } from 'd3-ng2-service';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChartComponent } from './components/chart/chart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chart', component: ChartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [D3Service, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
