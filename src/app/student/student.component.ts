import { Component, OnInit } from '@angular/core';
import { Student} from '../student';
import{ STUDENT} from '../mock-students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student = STUDENT;

  constructor() { }

  ngOnInit() {
  }

}
