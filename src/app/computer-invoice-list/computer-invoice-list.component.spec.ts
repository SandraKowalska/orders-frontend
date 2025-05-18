import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerInvoiceListComponent } from './computer-invoice-list.component';

describe('ComputerInvoiceListComponent', () => {
  let component: ComputerInvoiceListComponent;
  let fixture: ComponentFixture<ComputerInvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputerInvoiceListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComputerInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
