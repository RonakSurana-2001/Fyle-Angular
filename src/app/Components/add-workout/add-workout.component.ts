import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Workout } from 'src/interfaces/workout';
import { WorkoutService } from '../../services/workout.service';

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

  constructor(private workoutService: WorkoutService) {
  }

  filterForm = new FormGroup({
    username: new FormControl(''),
    workoutType: new FormControl(''),
    workoutMinutes:new FormControl(),
  });

  ngOnInit(): void {
    const storedData: Workout[] = JSON.parse(
      localStorage.getItem('userData') || '[]'
    );
    this.workouts = storedData.length ? storedData : null;
    this.workouts = this.workoutService.getWorkouts();
  }

  onSubmit() {
    const formValue = this.filterForm.value;
    const storedData=localStorage.getItem("userData")
    let userData:Workout[]=storedData?JSON.parse(storedData):[]
    let user = userData.find((u: any) => u.name === formValue.username);
    if(!user){
      user={
        id:userData.length+1,
        name:formValue.username || '',
        workoutlist:[{type:formValue.workoutType || '',time:formValue.workoutMinutes}],
      }
      userData.push(user)
      this.workoutService.addWorkout(formValue.username || '', formValue.workoutType || '', formValue.workoutMinutes);
    }
    else{
      user.workoutlist.push({type:formValue.workoutType || '',time:formValue.workoutMinutes})
      this.workoutService.addWorkout(formValue.username || '', formValue.workoutType || '', formValue.workoutMinutes);
    }
    localStorage.setItem("userData",JSON.stringify(userData))
  }
}
