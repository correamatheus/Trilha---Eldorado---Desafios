import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faCartShopping = faCartShopping;
  faTrash = faTrash;
  faXmark = faXmark;

  cartShopping = 0;
  cartList: Product[] = [];
  products: Product[] = [
    {
      id: 1,
      name: 'Óculos nosso sol',
      price: 70.0,
      amount: 0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155468-300-300?v=1759863418&width=300&height=300&aspect=true',
    },
    {
      id: 2,
      name: 'Bermuda praia',
      price: 50.0,
      amount: 0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155488-300-300?v=1759080575&width=300&height=300&aspect=true',
    },
    {
      id: 3,
      name: 'Relógio rústico',
      price: 20.0,
      amount: 0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155484-300-300?v=1760014996&width=300&height=300&aspect=true',
    },
    {
      id: 3,
      name: 'Bolsa de praia',
      price: 70.0,
      amount: 0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155482-300-300?v=1758818442&width=300&height=300&aspect=true',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(item: Product) {
    if (this.cartList.length < 1) {
      // item.amount += 1;
      this.cartList.push(item);
      this.cartShopping = this.cartList.length;
    }

    const isFinded = this.cartList.find(c => c.id === item.id);

    if (isFinded) {
      isFinded.amount += 1;
    }else {
      item.amount += 1;
      this.cartList.push(item);
      this.cartShopping = this.cartList.length;
    }

  }

  deleteFromCart(item: Product){
    const indexProduct = this.cartList.indexOf(item);
    this.cartList.splice(indexProduct, 1);
  }

  changeAmount(changeAmount: any, item: Product){
    console.log(changeAmount.target.value);
    const isFinded = this.cartList.find(c => c.id === item.id);
    isFinded!.amount += 1;
  }


  //LOGICA DO POPUP
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
