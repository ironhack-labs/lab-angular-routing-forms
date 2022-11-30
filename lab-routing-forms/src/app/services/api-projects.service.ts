import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProjectsService {
  readonly baseUrl: string =
    'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

  constructor(private http: HttpClient) {}
  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.baseUrl}`);
  }
}
