import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../../data/mocked-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
