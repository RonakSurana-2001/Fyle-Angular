import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css'],
})

export class ViewChartComponent implements OnInit {

  username:string=''
  userTodisplay: number = 0;
  usernames: string[] = [];
  workoutTypes: string[] = [];
  workoutTimes: number[] = [];
  basicData: any;

  constructor() { }
  basicOptions: any = {
    plugins: {
      title: {
        display: true,
        text: `${this.username} Chart Title`,
        padding: {
          top: 10,
          bottom: 30
        },
        font:{size: 25},
        align:'start',
        color:'black'
      },
    },
  };

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("userData") || '[]');
    user.forEach((element: any) => {
      this.usernames.push(element.name);
    });
    this.updateChartData();
  }

  getUserDetails(index: number): void {
    this.userTodisplay = index;
    this.updateChartData();
  }

  updateChartData(): void {
    let user = JSON.parse(localStorage.getItem("userData") || '[]');
    this.workoutTypes = [];
    this.workoutTimes = [];
    console.log(user)
    this.username=user[this.userTodisplay]?.name
    user[this.userTodisplay]?.workoutlist.forEach((lst: any) => {
      this.workoutTypes.push(lst.type);
      this.workoutTimes.push(lst.time);
    });

    this.basicData = {
      labels: this.workoutTypes,
      datasets: [
        {
          label: 'Minutes',
          backgroundColor: '#42A5F5',
          data: this.workoutTimes
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        title: {
          display: true,
          text: `${this.username}'s workout progress`,
          padding: {
            top: 10,
            bottom: 30
          },
          font:{size: 25},
          align:'start',
          color:'black'
        },
      },
    };

  }

}
