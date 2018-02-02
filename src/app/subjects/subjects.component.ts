import { Component, OnInit } from '@angular/core';
import{ Subject} from '../subject';
import{ SUBJECTS} from '../mock-subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects = SUBJECTS;

  subject: Subject = {
    id: 1,
    name: 'Mathematics for Applied Computer Sciences'

  };

  constructor() { }

  ngOnInit() {
  }

}
