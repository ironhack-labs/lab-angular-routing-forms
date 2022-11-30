import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  projectList: Project[];

  constructor(){
    this.projectList = [
      new Project("Project A", 2022, "Data"),
      new Project("Project B", 2022, "UX"),
      new Project("Project C", 2021, "UX"),
      new Project("Project D", 2020, "Web Development"),
      new Project("Project E", 2020, "Web Development"),
      new Project("Project F", 2020, "Data"),
    ]
  }

  ngOnInit(): void {}

}
