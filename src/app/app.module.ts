import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerInvoiceListComponent } from './computer-invoice-list/computer-invoice-list.component';
import { ComputerInvoiceFormComponent } from './computer-invoice-form/computer-invoice-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputerInvoiceService } from './computer-invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    ComputerInvoiceListComponent,
    ComputerInvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ComputerInvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
