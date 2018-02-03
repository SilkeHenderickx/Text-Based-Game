import { Component, OnInit, Input } from '@angular/core';
import { Student} from './student';
import{ STUDENT} from './mock-students';
import { Observable } from 'rxjs';



let interval: number;
let quantity: number;
let student: Student;

export function modifyProductivityRecurring(quantity: number, student: Student, interval: number)
{
  //if(student.productivity > 0 && student.productivity < 100){

  Observable.interval(interval).subscribe(x=> {
    student.productivity += quantity;
  })
}
//}
