import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2000, 0, 1); // year, month(zero-based), day()
  price = 9.924234113;
  rate = 0.32;
  course = COURSES[1];

  OnCourseSelected(course:Course) {
    console.log("parent clicked", course)
  }
}
