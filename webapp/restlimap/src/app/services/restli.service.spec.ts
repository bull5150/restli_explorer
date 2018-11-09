/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestliService } from './restli.service';

describe('Service: Restli', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestliService]
    });
  });

  it('should ...', inject([RestliService], (service: RestliService) => {
    expect(service).toBeTruthy();
  }));
});
