import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects.model';
import { ApiProjectsService } from 'src/app/services/api-projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projects: Projects[];

  constructor(private api: ApiProjectsService) {
    this.projects = [];
  }

  ngOnInit(): void {
    this.api.getProjects().subscribe((project) => {
      this.projects = project.reverse().slice(0, 3);
      console.log(this.projects.reverse());
    });
  }
}
