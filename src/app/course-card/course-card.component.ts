import { Component, Input, Output } from '@angular/core';
import { COURSES } from '../../db-data';
import {Course} from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  OnCardClicked() {
    console.log("clicked");
    this.courseEmitter.emit(this.course);
  }

  hasImage() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    return {
      'beginer': this.course.category == "BEGINNER",
    }
  }

  cardStyles() {
    return {
      'background-image': "url(" + this.course.iconUrl + ")"
    }
  }
}
