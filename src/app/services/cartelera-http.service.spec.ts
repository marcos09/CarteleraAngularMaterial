import { TestBed, inject } from '@angular/core/testing';

import { CarteleraHttpServiceService } from './cartelera-http-service.service';

describe('CarteleraHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarteleraHttpServiceService]
    });
  });

  it('should be created', inject([CarteleraHttpServiceService], (service: CarteleraHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
