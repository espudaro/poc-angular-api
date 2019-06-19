import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  title = 'Poc de Angular com Ruby';
  products;

  constructor(private http: HttpClient) {

    http.get('http://54.207.97.97:9090/products')
      .subscribe(res => this.products = res);
  }

}
