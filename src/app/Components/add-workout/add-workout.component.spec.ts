import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWorkoutComponent } from './add-workout.component';
import { WorkoutService } from '../../services/workout.service';

describe('AddWorkoutComponent', () => {
  let component: AddWorkoutComponent;
  let fixture: ComponentFixture<AddWorkoutComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkoutComponent],
      imports: [ReactiveFormsModule],
      providers: [WorkoutService]
    })
    .compileComponents();

    workoutService = TestBed.inject(WorkoutService);
    fixture = TestBed.createComponent(AddWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addWorkout on submit', () => {
    const addWorkoutSpy = spyOn(workoutService, 'addWorkout').and.callThrough();
    component.filterForm.setValue({ username: 'John', workoutType: 'Running', workoutMinutes: 30 });
    component.onSubmit();
    expect(addWorkoutSpy).toHaveBeenCalledWith('John', 'Running', 30);
  });

  it('should update workouts list on submit', () => {
    component.filterForm.setValue({ username: 'John', workoutType: 'Running', workoutMinutes: 30 });
    component.onSubmit();
    expect(component.workouts?.length).toBe(1);
    expect(component.workouts?.[0].name).toBe('John');
  });
});
