import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {
  public products:Product[]
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  onSelectProduct(product:Product){
    // console.log(product)
    // this.router.navigate([product.productId], { relativeTo: this.route });
  }
}
