import { TestBed } from '@angular/core/testing';

import { OrdinateursService } from './ordinateurs.service';

describe('OrdinateursService', () => {
  let service: OrdinateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdinateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
