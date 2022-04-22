import { TestBed } from '@angular/core/testing';

import { TodolistserviceService } from './todolistservice.service';

describe('TodolistserviceService', () => {
  let service: TodolistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
