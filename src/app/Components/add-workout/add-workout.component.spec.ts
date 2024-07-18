import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutComponent } from './add-workout.component';

describe('AddWorkoutComponent', () => {
  let component: AddWorkoutComponent;
  let fixture: ComponentFixture<AddWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
