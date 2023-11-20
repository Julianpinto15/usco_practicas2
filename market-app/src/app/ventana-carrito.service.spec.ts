import { TestBed } from '@angular/core/testing';

import { VentanaCarritoService } from './service/ventana-carrito.service';

describe('VentanaCarritoService', () => {
  let service: VentanaCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
