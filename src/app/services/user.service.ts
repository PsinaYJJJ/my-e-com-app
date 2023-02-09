import { Injectable } from '@angular/core';
import { UserType } from '../enum/user-type.enum';
import { User } from '../models/user.model';
import { Subject } from "rxjs";

@Injectable()
export class UserService {
  private user:User = {
    userType : UserType.basic
  }
  userChanged = new Subject<User>()
  constructor() { }

  getUser(){
    return this.deepCopy(this.user)
  }

  deepCopy<T>(source: T): T {
    return Array.isArray(source)
    ? source.map(item => this.deepCopy(item))
    : source instanceof Date
    ? new Date(source.getTime())
    : source && typeof source === 'object'
          ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
             Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop)!);
             o[prop] = this.deepCopy((source as { [key: string]: any })[prop]);
             return o;
          }, Object.create(Object.getPrototypeOf(source)))
    : source as T;
  }

  changeUser(user:User){
    this.user = user
    this.userChanged.next(this.deepCopy(this.user))
  }
}
