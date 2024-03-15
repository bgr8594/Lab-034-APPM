import { TestBed } from '@angular/core/testing';

import { SeguridadRutasGuard } from './seguridad-rutas.guard';

describe('SeguridadRutasGuard', () => {
  let guard: SeguridadRutasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeguridadRutasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
