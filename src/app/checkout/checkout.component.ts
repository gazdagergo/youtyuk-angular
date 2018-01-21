import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public paymentService: PaymentService) { }

  ngOnInit() {
  }

  redirectToPayment(){
    this.paymentService.getPaymentUrl()
    .then((url: string) => {
      window.location.href=url;
    })
  }

}
