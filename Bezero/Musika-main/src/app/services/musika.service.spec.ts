import { TestBed } from '@angular/core/testing';

import { MusikaService } from './musika.service';

describe('MusikaService', () => {
  let service: MusikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
