import { TestBed } from '@angular/core/testing';

import { FarmdataService } from './farmdata.service';

describe('FarmdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmdataService = TestBed.get(FarmdataService);
    expect(service).toBeTruthy();
  });
});
