import { Component, OnInit, Input } from '@angular/core';
import { Subject} from '../subject';
import { Student} from '../student';
import{modifyProductivityOnce} from '../productivity-modifier-once';

@Component({
  selector: 'app-study-subject',
  templateUrl: './study-subject.component.html',
  styleUrls: ['./study-subject.component.css']
})
export class StudySubjectComponent implements OnInit {

  @Input() subject: Subject;
  @Input() student: Student;




  constructor() {
    this.maxgrade = 20;
    this.mingrade = 0;
    this.maxproductivity = 100;
    this.minproductivity = 0;
    this.productivityCostPerStudy = 10;
  }

  Study(subject: Subject, student: Student): void{
    if(this.student.productivity > this.minproductivity){
      if(typeof this.subject !== 'undefined'){
        if((this.subject.grade < this.maxgrade) && (this.subject.grade >= this.mingrade)){
          this.subject.grade = this.subject.grade + 1;
          modifyProductivityOnce(-10, this.student);
        }
      }
    }
  }

  ngOnInit() {
  }

}
