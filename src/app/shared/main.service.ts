import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'Óculos nosso sol',
      price: 70.0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155468-300-300?v=1759863418&width=300&height=300&aspect=true',
    },
    {
      id: 2,
      name: 'Bermuda praia',
      price: 50.0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155488-300-300?v=1759080575&width=300&height=300&aspect=true',
    },
    {
      id: 3,
      name: 'Relógio rústico',
      price: 20.0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155484-300-300?v=1760014996&width=300&height=300&aspect=true',
    },
    {
      id: 3,
      name: 'Bolsa femenina',
      price: 70.0,
      image:
        'https://storecomponents.vtexassets.com/arquivos/ids/155482-300-300?v=1758818442&width=300&height=300&aspect=true',
    },
  ];
}
