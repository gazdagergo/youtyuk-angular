import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {
  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/courses')
    .valueChanges().subscribe(courses => {
      this.courses = courses;
    })
  }

  ngOnInit() {
  }

}
