import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserType } from '../enum/user-type.enum';
import { User } from '../models/user.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public toggleDropdown:boolean = false
  public user:User
  public userTypeList:string[] = [
    UserType[0],
    UserType[1]
  ]
  public productInCartLength: number = 0
  private userChanged$ : Subscription;
  private productsInCartChanged$ : Subscription;
  get UserType(){
    return UserType
  }
  constructor(private userService : UserService,
              private shoppingService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.userChanged$ = this.userService.userChanged.subscribe(
      (user:User) => {
        this.user = user
      }
    )

    this.productsInCartChanged$ = this.shoppingService.productsInCartChanged.subscribe(
      (productsInCart) => {
        this.productInCartLength = productsInCart.length
      }
    )

  }

  ngOnDestroy(){
    this.userChanged$?.unsubscribe()
    this.productsInCartChanged$?.unsubscribe()
  }

  onToggleDropdown(event: Event){
    // console.log('event', event)
    this.toggleDropdown = !this.toggleDropdown
  }
  onSelect(type:string){
    switch (type) {
      case UserType[0]:
        this.user.userType = UserType.admin
        break;
      case UserType[1]:
        this.user.userType = UserType.basic
        break;
    }
    this.userService.changeUser(this.user)
    this.toggleDropdown = !this.toggleDropdown
  }
}
