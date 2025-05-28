import { Component, OnInit } from '@angular/core';
import { ComputerInvoice } from '../computer-invoice';
import { ComputerInvoiceService } from '../computer-invoice.service';

@Component({
  selector: 'app-computer-invoice-list',
  templateUrl: './computer-invoice-list.component.html',
  styleUrl: './computer-invoice-list.component.css',
  standalone: false
})
export class ComputerInvoiceListComponent implements OnInit {

  computerInvoices!: ComputerInvoice[];
  filters = {
    computerName: '',
    postingDate: '',
    sort: ''
  }

  constructor(private computerInvoiceService: ComputerInvoiceService) {
  }

  ngOnInit(): void {
    this.searchComputerInvoice();
  }

  searchComputerInvoice(): void {
    this.computerInvoiceService.searchComputerInvoiceByWord(this.filters).subscribe(data => {
      this.computerInvoices = data;
    });
  }

  toggleSort(field: string): void {
    if (this.filters.sort === field) {
      this.filters.sort = '-${field}'; //descending
    } else if (this.filters.sort === '-${field}') {
      this.filters.sort = field; //ascending
    } else {
      this.filters.sort = field;
    }
    this.searchComputerInvoice();
  }

  sortIndicator(field: string): string {
    if (this.filters.sort === field) return '▲';
    if (this.filters.sort === '-${field}') return '▼ ';
    return '';
  }
}
