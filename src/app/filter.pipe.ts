import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, itemtomatch: any): any {
    if (itemtomatch === undefined) return products;
    return products.filter(product => {
      return product.item.toLowerCase().includes(itemtomatch.toLowerCase());
    });
  }

}
