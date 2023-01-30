const p1 = {
    name: "Computador",
    price: 30000,
    quantity:2

}

const Product = function(name,price,quantity){
    this.name = name;
    this.pre = price;
    this.quantity = quantity;
}
    
    Product.prototype.total = function() {
      return this.price * this.quantity;
    }

    Product.prototype.add = function(amount){
        return this.quantity += amount;
    }

    Product.prototype.remove = function(amount){
        return this.quantity -= amount;
    }


const p2 = new  Product ("Monitor", 1200.0, 5);
const p3 = new Product("Tv",3600.0,7);
