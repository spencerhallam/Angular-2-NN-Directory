import { Component, OnInit } from '@angular/core';
import { FarmdataService } from '../farmdata.service';
import { FilterPipe } from '../filter.pipe'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // pipes: [FilterPipe]
})
export class ProductsComponent implements OnInit {
  
  products: any;
  itemtomatch: any;

  constructor(private productinfo: FarmdataService) { }
  
  ngOnInit() {
    this.productinfo.getProducts().subscribe(productinfo => {

    this.products = productinfo
    const grabkeys = ()=> {
      const newarray = [];
      for(let i = 0; i < this.products.length; i++){
        newarray.push(Object.keys(this.products[i]));
      } 
    }
    grabkeys();

  })
}

}

