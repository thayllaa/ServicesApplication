import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(public subjects: SubjectsService) { }

  ngOnInit() {
  }

}