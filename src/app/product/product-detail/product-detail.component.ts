import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserType } from 'src/app/enum/user-type.enum';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product: Product | undefined
  public isAdmin: boolean = false
  private productId: number
  private userChanged$ : Subscription;
  private isProductsEmpty$ : Subscription;
  public isProductsEmpty: boolean
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private userService: UserService,
    private shoppingCartService: ShoppingCartService,
    ) {}
  ngOnInit(): void {
    this.isAdmin = this.userService.getUser().userType === UserType.admin
    this.userChanged$ = this.userService.userChanged.subscribe(
      (user:User) => {
        this.isAdmin = user.userType === UserType.admin
      }
    )
    this.isProductsEmpty$ = this.productService.isProductsEmpty.subscribe(
      (res) => {
        this.isProductsEmpty = res
        if(this.isProductsEmpty){
          this.product = undefined
        } else{
          this.route.params.subscribe(
            (params: Params) => {
            this.productId = Number(params['productId'])
            if(this.productId){
              this.product = this.productService.getProductbyProductId(this.productId)
            }
            else if(!params['productId']){
              this.setToFirstProduct()
            }
          }
          );
        }
      }
    )
  }

  ngOnDestroy(){
    this.userChanged$?.unsubscribe()
    this.isProductsEmpty$?.unsubscribe()
  }

  isDisableAddToCart(stock:any):Boolean{
    return stock? stock <= 0 : true
  }

  onAddToCart(){
    if(this.product){
      this.shoppingCartService.addProductToCart(this.product)
    }
  }

  setToFirstProduct(){
    this.productId = this.productService.getFirstProductId()
    this.router.navigate([this.productId], { relativeTo: this.route });
  }

  onRemoveProduct(){
    let neighborProduct:Product
    const currentIndex = this.productService.getProductIndexbyProductId(this.productId)
    if (currentIndex > -1){
      if (currentIndex > 0){
        neighborProduct = this.productService.getProductbyIndex(currentIndex-1)
      }else{
        neighborProduct = this.productService.getProductbyIndex(currentIndex+1)
      }
      if(this.product){
        this.productService.deleteProduct(this.product)
      }
      if(neighborProduct?.productId || !this.isProductsEmpty){
        this.router.navigate([`/product/${neighborProduct?.productId}`])
      } else {
        this.router.navigate([`/`])
      }
      
    }
  }
}
