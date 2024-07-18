import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AddWorkoutComponent } from './Components/add-workout/add-workout.component';
import { ViewAllComponent } from './Components/view-all/view-all.component';
import { ViewChartComponent } from './Components/view-chart/view-chart.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule  } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddWorkoutComponent,
    ViewAllComponent,
    ViewChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ChartModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
