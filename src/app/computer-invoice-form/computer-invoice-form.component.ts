import { Component, OnInit } from '@angular/core';
import { ComputerInvoice } from '../computer-invoice';
import { Router } from '@angular/router';
import { ComputerInvoiceService } from '../computer-invoice.service';

@Component({
  selector: 'app-computer-invoice-form',
  templateUrl: './computer-invoice-form.component.html',
  styleUrl: './computer-invoice-form.component.css',
  standalone: false
})
export class ComputerInvoiceFormComponent implements OnInit {

  computerInvoice: ComputerInvoice = new ComputerInvoice


  constructor(private computerInvoiceService: ComputerInvoiceService, private router: Router) { }
  ngOnInit(): void { }

  saveInvoice() {
    this.computerInvoiceService.save(this.computerInvoice).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  gotoComputerInvoiceList() {
    this.router.navigate(['/computerInvoices']);
  }

  onSubmit() {
    console.log(this.computerInvoice);
    this.gotoComputerInvoiceList();
    this.saveInvoice();
  }
}
