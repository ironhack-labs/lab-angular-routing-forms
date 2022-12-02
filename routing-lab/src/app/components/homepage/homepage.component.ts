import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
