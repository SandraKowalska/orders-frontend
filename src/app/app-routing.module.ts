import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerInvoiceListComponent } from './computer-invoice-list/computer-invoice-list.component';
import { ComputerInvoiceFormComponent } from './computer-invoice-form/computer-invoice-form.component';

export const routes: Routes = [
    { path: 'computerInvoices', component: ComputerInvoiceListComponent },
    { path: 'addComputerInvoice', component: ComputerInvoiceFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }