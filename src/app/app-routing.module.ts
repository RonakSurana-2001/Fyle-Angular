import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AddWorkoutComponent } from './Components/add-workout/add-workout.component';
import { ViewAllComponent } from './Components/view-all/view-all.component';
import { ViewChartComponent } from './Components/view-chart/view-chart.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'add-workout', component: AddWorkoutComponent},
  {path: 'view-all', component:ViewAllComponent},
  {path: 'view-chart', component:ViewChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
