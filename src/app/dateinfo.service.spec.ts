import { TestBed } from '@angular/core/testing';

import { DateinfoService } from './dateinfo.service';

describe('DateinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateinfoService = TestBed.get(DateinfoService);
    expect(service).toBeTruthy();
  });
});
