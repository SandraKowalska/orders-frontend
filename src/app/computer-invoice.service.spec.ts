import { TestBed } from '@angular/core/testing';

import { ComputerInvoiceService } from './computer-invoice.service';

describe('ComputerInvoiceService', () => {
  let service: ComputerInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
