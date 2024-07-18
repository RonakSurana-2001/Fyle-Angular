import { Component, OnInit, Output } from '@angular/core';
import { Workout } from 'src/interfaces/workout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {

  constructor() { }

  userData: Workout[] | null = null;

  filterForm = new FormGroup({
    searchname: new FormControl(''),
    searchtype: new FormControl('All'),
  });


  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userData") || '[]')
  }

  getAllWorkoutTypes(workoutlist: { type: string; time: number }[]): string {
    let types = ""
    workoutlist.forEach((u: { type: string; time: number }) => {
      types = types + u.type + " , "
    })
    types = types.substring(0, types.length - 2)
    return types
  }

  totalWorkoutMinutes(workoutlist: { type: string; time: number }[]): number {
    let sum = 0;
    workoutlist.forEach((u: { type: string; time: number }) => {
      sum = sum + Number(u.time)
    })
    return sum
  }

  filteredUserData(): Workout[] {
    const formValue = this.filterForm.value;
    console.log(formValue.searchname,formValue.searchtype)
    const userInfo = JSON.parse(localStorage.getItem('userData') || '[]');
    return userInfo.filter((user: any) => {
      if (
        formValue &&
        !user.name.toLowerCase().includes(formValue.searchname?.toLowerCase())
      ) {
        return false;
      }
      // for all workout types
      if (formValue.searchtype == 'All' || formValue.searchtype == '') {
        return true;
      }
      if (formValue.searchtype) {
        const workouts = user.workoutlist.filter(
          (workout: any) => workout.type === formValue.searchtype
        );
        if (workouts.length === 0) {
          return false;
        }
      }
      return true;
    });
  }


  currentPage = 1;
  itemsPerPage:number = 2;
  pageChange(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    this.currentPage--;
  }

  get totalPages() {
    return Math.ceil(this.filteredUserData().length / this.itemsPerPage);
  }

  nextPage() {
    this.currentPage++;
  }

  changeItemsPerPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(target.value, 10);
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUserData().slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

}
