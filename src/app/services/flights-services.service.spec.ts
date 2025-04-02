import { TestBed } from '@angular/core/testing';

import { FlightsServicesService } from './flights-services.service';

describe('FlightsServicesService', () => {
  let service: FlightsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
