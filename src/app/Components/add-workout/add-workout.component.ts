import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Workout } from 'src/interfaces/workout';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {


  workouts: Workout[] | null=null
  username: string = '';
  workoutType: string = '';
  workoutMinutes: number=0;

  constructor() {
  }

  ngOnInit(): void {
    const storedData: Workout[] = JSON.parse(
      localStorage.getItem('userData') || '[]'
    );
    this.workouts = storedData.length ? storedData : null;
  }

  onSubmit() {
    const storedData=localStorage.getItem("userData")
    let userData:Workout[]=storedData?JSON.parse(storedData):[]
    let user = userData.find((u: any) => u.name === this.username);
    if(!user){
      user={
        id:userData.length+1,
        name:this.username,
        workoutlist:[{type:this.workoutType,time:this.workoutMinutes}],
      }
      userData.push(user)
    }
    else{
      user.workoutlist.push({type:this.workoutType,time:this.workoutMinutes})
    }
    localStorage.setItem("userData",JSON.stringify(userData))
  }
}
