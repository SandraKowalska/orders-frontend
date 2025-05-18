import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerInvoiceFormComponent } from './computer-invoice-form.component';

describe('ComputerInvoiceFormComponent', () => {
  let component: ComputerInvoiceFormComponent;
  let fixture: ComponentFixture<ComputerInvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputerInvoiceFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComputerInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
