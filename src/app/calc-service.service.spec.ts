/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalcServiceService } from './calc-service.service';

describe('Service: CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcServiceService]
    });
  });

  it('should ...', inject([CalcServiceService], (service: CalcServiceService) => {
    expect(service).toBeTruthy();
  }));
});
