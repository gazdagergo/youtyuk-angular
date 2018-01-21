import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class PaymentService {
  payments: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    const payments = db.list('/payments');
    this.payments = payments;
  }

  newPayment() {
    this.payments.push({
      paymentId: 'fooo'
    });
  }

  getPaymentUrl() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("https://444.hu"), 1000)
    })
  }

}
