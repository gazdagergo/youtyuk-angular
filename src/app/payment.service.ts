import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class PaymentService {
  payments: AngularFireList<any>;
  payItems: any[];
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    const payments = db.list('/payments');
    this.payments = payments;
  }

  newPayment() {
    this.payments.push({
      paymentId: 0
    })
    .then(item => {
      const s = this.db.list(`/payments/${item.key}`)
      .valueChanges()
      .subscribe(i => {
        console.log(i, i[0])
        if (i[0] !== 0) {
          s.unsubscribe();
        }
      })
    });
  }

  getPaymentUrl() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("https://444.hu"), 1000)
    })
  }

}
