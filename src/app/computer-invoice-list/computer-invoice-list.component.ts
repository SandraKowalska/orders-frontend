import { Component, OnInit } from '@angular/core';
import { ComputerInvoice } from '../computer-invoice';
import { ComputerInvoiceService } from '../computer-invoice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-computer-invoice-list',
  templateUrl: './computer-invoice-list.component.html',
  styleUrl: './computer-invoice-list.component.css',
  standalone: false
})
export class ComputerInvoiceListComponent implements OnInit {

  computerInvoices!: ComputerInvoice[];
  searchForm!: FormGroup;

  constructor(private computerInvoiceService: ComputerInvoiceService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      word: [null]
    })
    this.getComputerInvoices();
  }

  searchComputerInvoice() {
    console.log(this.searchForm.value);
    this.computerInvoiceService.searchComputerInvoiceByWord(
      this.searchForm.get(["word"])!.value
    ).subscribe(data => {
      this.computerInvoices = data;
      console.log(this.computerInvoices);
    });
  }


  getComputerInvoices() {
    this.computerInvoiceService.findAll().subscribe(data => {
      this.computerInvoices = data;
    });
  }
}
