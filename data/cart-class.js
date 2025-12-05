//Cart class for generating object
class Cart{
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadFromLocalStorage(localStorageKey)
    }

    //Methods
    loadFromLocalStorage(){
       this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) ||
       [
        {
            productId:'0',
            quantity:1,
            deliveryOptionId:'0'
        },
        {
            productId:'1',
            quantity:2,
            deliveryOptionId:'1'
        }
       ] 
    }

    saveToStorage(){
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems))
    }

    updateDelOption(productId,deliveryOptionId){
    let matchingItem;
    this.cartItems.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item;
        }
    })
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage()
    }

    removeItem(prodId){
    const newCart = [];
    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== prodId){
            newCart.push(cartItem)
        }
    })
    this.cartItems = newCart;
    this.saveToStorage()
    }

}

const cart = new Cart('cart-oop')
const business = new Cart('business');

console.log(cart)
