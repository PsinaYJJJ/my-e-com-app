import { Component, OnInit } from '@angular/core';
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
  get UserType(){
    return UserType
  }
  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

  onToggleDropdown(event: Event){
    console.log('event', event)
    this.toggleDropdown = !this.toggleDropdown
  }
}
