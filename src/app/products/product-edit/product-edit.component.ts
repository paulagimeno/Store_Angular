import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  title: string = "";
  description: string = "";
  price: number = 0;
  category: string="";
  image: string="";
  createdProduct: Product | undefined;

  productToUpdate: Product | undefined;
  titleToUpdate: string = "";
  descriptionToUpdate: string = "";
  priceToUpdate: number = 0;
  categoryToUpdate: string = "";
  imageToUpdate: string = "";

  constructor(private productService: ProductService) { }

  create(): void {
    let product: Product = {
      title: this.title, 
      id: undefined, 
      description: this.description, 
      price: this.price,
      category: this.category,
      image: this.image
    }

    this.productService.create(product).subscribe(data => this.createdProduct = data)
  
    this.title = "";
  }

  update(): void{
    if(!this.productToUpdate) return;
    this.productToUpdate.title = this.titleToUpdate;
    this.productToUpdate.description = this.descriptionToUpdate;
    this.productToUpdate.price = this.priceToUpdate;
    this.productToUpdate.category = this.categoryToUpdate;
    this.productToUpdate.image = this.imageToUpdate;

    this.productService.update(this.productToUpdate).subscribe(data => console.log(data));
  }
}