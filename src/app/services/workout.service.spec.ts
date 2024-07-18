import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
import { Workout } from 'src/interfaces/workout';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null when no data is stored', () => {
    expect(service.getWorkouts()).toBeNull();
  });

  it('should save and retrieve workouts', () => {
    const workouts: Workout[] = [
      { id: 1, name: 'John', workoutlist: [{ type: 'Running', time: 30 }] }
    ];
    service.saveWorkouts(workouts);
    expect(service.getWorkouts()).toEqual(workouts);
  });

  it('should add a new workout for a new user', () => {
    service.addWorkout('John', 'Running', 30);
    const workouts = service.getWorkouts();
    expect(workouts?.length).toBe(1);
    expect(workouts?.[0].name).toBe('John');
    expect(workouts?.[0].workoutlist.length).toBe(1);
    expect(workouts?.[0].workoutlist[0].type).toBe('Running');
  });

  it('should add a workout to an existing user', () => {
    service.addWorkout('John', 'Running', 30);
    service.addWorkout('John', 'Swimming', 45);
    const workouts = service.getWorkouts();
    expect(workouts?.length).toBe(1);
    expect(workouts?.[0].name).toBe('John');
    expect(workouts?.[0].workoutlist.length).toBe(2);
    expect(workouts?.[0].workoutlist[1].type).toBe('Swimming');
  });
});
