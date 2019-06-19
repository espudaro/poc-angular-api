import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public id: string;
  title = 'Poc de Angular com Ruby';

  productSelect;


  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectProduct();
  }

  selectProduct() {

    // this.http.get('http://54.207.97.97:9090/products')
    //   .subscribe((res: any) => {
    //     let xpto = res.products
    //     this.productSelect = xpto.filter((item) => {
    //       return item.sku === this.id;
    //     })
    //     this.productSelect = this.productSelect[0];
    //   })

    this.http.get('http://54.207.97.97:9090/products/' + this.id )
      .subscribe(res => this.productSelect = res);
  }
}
