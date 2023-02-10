export class Product {
    productName : string
    pic? : string
    productType : string
    description : string
    price : number
    stock : number
    productId : number
    shopId : number
    createdDate : Date
    lastEdited? : Date
  }
  export class ProductInCart extends Product{
    amount : number
    totalPrice : number
    isCheckOut : boolean
  }