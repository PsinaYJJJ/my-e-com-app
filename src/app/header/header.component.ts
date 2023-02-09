import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserType } from '../enum/user-type.enum';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public toggleDropdown:boolean = false
  public user:User
  public userTypeList:string[] = [
    UserType[0],
    UserType[1]
  ]
  private userChanged$ : Subscription;
  get UserType(){
    return UserType
  }
  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.userChanged$ = this.userService.userChanged.subscribe(
      (user:User) => {
        this.user = user
      }
    )
  }

  ngOnDestroy(){
    this.userChanged$?.unsubscribe()
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
  }
}
