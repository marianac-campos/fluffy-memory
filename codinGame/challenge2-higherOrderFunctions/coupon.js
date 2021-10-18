const cart = [
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  ]
  
  function applyCoupon(cart){
    if(cart.category == 'tech'){
      return cart.price-(cart.price*0.2);
     } else {
         return `(N/A) ${cart.price}`;
     }
 }
 
 const desconto = cart.map(applyCoupon);

console.log(desconto);