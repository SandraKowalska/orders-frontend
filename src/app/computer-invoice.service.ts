import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComputerInvoice } from './computer-invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerInvoiceService {

  private computerInvoiceUrl: string;
  private addComputerInvoiceUrl: string;
  private searchComputerInvoiceUrl: string;

  constructor(private http: HttpClient) {
    this.computerInvoiceUrl = 'http://localhost:8080/computerInvoices';
    this.addComputerInvoiceUrl = 'http://localhost:8080/addComputerInvoice';
    this.searchComputerInvoiceUrl = 'http://localhost:8080/computerInvoices/search';
  }

  public findAll(): Observable<ComputerInvoice[]> {
    return this.http.get<ComputerInvoice[]>(this.computerInvoiceUrl);
  }

  public save(computerInvoices: ComputerInvoice): Observable<Object> {
    return this.http.post(this.addComputerInvoiceUrl, computerInvoices);
  }

  public searchComputerInvoiceByWord(filters: { computerName?: string; postingDate?: string; sort?: string }): Observable<ComputerInvoice[]> {
    let params = new HttpParams();
    if (filters.computerName) params = params.set('computerName', filters.computerName);
    if (filters.postingDate) params = params.set('postingDate', filters.postingDate);
    if (filters.sort) params = params.set('sort', filters.sort);
    return this.http.get<ComputerInvoice[]>(this.searchComputerInvoiceUrl, { params });
  }
}
