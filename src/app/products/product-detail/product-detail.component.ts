import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Product | undefined;

  constructor(private productService: ProductService,  private activatedRoute: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
    this.productService.findById(id).subscribe(data => this.product = data);
  });
};

navigateToDetails(product: Product){
  this.router.navigate(['/product-edit', product.id]);
}

}
