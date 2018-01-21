import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmersComponent } from './farmers/farmers.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'farmers',  component: FarmersComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
