import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit, OnDestroy {
  public products:Product[]
  private productsChanged$ : Subscription;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.productsChanged$ = this.productService.productsChanged.subscribe(
      res => this.products = res
    )
  }

  ngOnDestroy(): void {
    this.productsChanged$?.unsubscribe()
  }
  onSelectProduct(product:Product){
    // console.log(product)
    // this.router.navigate([product.productId], { relativeTo: this.route });
  }
}
