import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComputerInvoice } from './computer-invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerInvoiceService {

  private computerInvoiceUrl: string;
  private addComputerInvoiceUrl: string;

  constructor(private http: HttpClient) {
    this.computerInvoiceUrl = 'http://localhost:8080/computerInvoices';
    this.addComputerInvoiceUrl = 'http://localhost:8080/addComputerInvoice';
  }

  public findAll(): Observable<ComputerInvoice[]> {
    return this.http.get<ComputerInvoice[]>(this.computerInvoiceUrl);
  }

  public save(computerInvoices: ComputerInvoice): Observable<Object> {
    return this.http.post(this.addComputerInvoiceUrl, computerInvoices);
  }

  public searchComputerInvoiceByWord(word: string): Observable<ComputerInvoice[]> {
    return this.http.get<ComputerInvoice[]>(this.computerInvoiceUrl + "/search/" + word);
  }
}
