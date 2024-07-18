import { Injectable } from '@angular/core';
import { Workout } from 'src/interfaces/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  getWorkouts(): Workout[] | null {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  }

  saveWorkouts(workouts: Workout[]): void {
    localStorage.setItem('userData', JSON.stringify(workouts));
  }

  addWorkout(username: string, workoutType: string, workoutMinutes: number): void {
    const storedData = localStorage.getItem('userData');
    let userData: Workout[] = storedData ? JSON.parse(storedData) : [];
    let user = userData.find((u: any) => u.name === username);

    if (!user) {
      user = {
        id: userData.length + 1,
        name: username,
        workoutlist: [{ type: workoutType, time: workoutMinutes }],
      };
      userData.push(user);
    } else {
      user.workoutlist.push({ type: workoutType, time: workoutMinutes });
    }
    this.saveWorkouts(userData);
  }
}
