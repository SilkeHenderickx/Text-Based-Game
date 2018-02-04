import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import{ Subject} from '../subject';
import{ SUBJECTS} from '../mock-subjects';
import{ Student} from '../student';
import{ STUDENT} from '../mock-students';
import{modifyProductivityRecurring} from '../productivity-modifier-recurring';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects = SUBJECTS;
  student = STUDENT;

  constructor() { }

  selectedSubject: Subject;

  onSelect(subject: Subject): void{
    this.selectedSubject = subject;
  }


  ngOnInit() {
    @Input() student: Student;
    modifyProductivityRecurring(+1, this.student, 10000);
  }

}
