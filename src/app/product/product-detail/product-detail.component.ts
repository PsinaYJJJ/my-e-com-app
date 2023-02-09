import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined
  private productId: number
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = Number(params['productId'])
      if(this.productId){
        console.log("this.productId", this.productId)
        this.product = this.productService.getProductbyProductId(this.productId)
      }else if(!params['productId']){
        this.productId = this.productService.getFirstProductId()
        this.router.navigate([this.productId], { relativeTo: this.route });
      }
    });
  }
}
