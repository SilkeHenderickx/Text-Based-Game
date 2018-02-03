import { Component, OnInit, Input } from '@angular/core';
import { Student} from './student';
import{ STUDENT} from './mock-students';
import { Observable } from 'rxjs';



let interval: number;
let quantity: number;
let student: Student;

export function modifyProductivityOnce(quantity: number, student: Student)
{
  //if(student.productivity > 0 && student.productivity < 100){
  student.productivity += quantity;
}
//}
