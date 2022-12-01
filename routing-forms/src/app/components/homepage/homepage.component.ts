import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  prj1: boolean
  prj2: boolean
  prj3: boolean
  project: any
  constructor() {
    this.prj1 = false
    this.prj2 = false
    this.prj3 = false
    this.project = document.querySelector('bottom')
  }

  showPrj1() {
    this.prj1 = true
    this.prj2 = false
    this.prj3 = false
  }
  showPrj2() {
    this.prj2 = true
    this.prj1 = false
    this.prj3 = false
  }
  showPrj3() {
    this.prj3 = true
    this.prj2 = false
    this.prj1 = false
  }
}
