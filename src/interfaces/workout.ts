interface WorkoutDetails{
    type:string,
    time:number
}

export interface Workout{
    id:number,
    name:string,
    workoutlist:WorkoutDetails[],
}