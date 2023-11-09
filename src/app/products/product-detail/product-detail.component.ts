import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Product | undefined;

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.productService.findById(1).subscribe(data => this.product = data);
  }
}
