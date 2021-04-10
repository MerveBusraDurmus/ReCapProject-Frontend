import { TestBed } from '@angular/core/testing';

import { GearService } from './gear.service';

describe('GearService', () => {
  let service: GearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
