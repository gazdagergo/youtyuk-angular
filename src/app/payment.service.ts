import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  constructor() { }

  getPaymentUrl() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("https://444.hu"), 1000)
    })
  }

}
