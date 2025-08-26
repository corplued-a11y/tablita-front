import { TestBed } from '@angular/core/testing';

import { TablitasService } from './tablitas.service';

describe('TablitasService', () => {
  let service: TablitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
