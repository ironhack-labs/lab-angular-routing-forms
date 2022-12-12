import { TestBed } from '@angular/core/testing';

import { ApiProjectsService } from './api-projects.service';

describe('ApiProjectsService', () => {
  let service: ApiProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
