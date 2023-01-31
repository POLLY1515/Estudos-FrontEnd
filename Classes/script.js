class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

 total(){
    return this.price * this.quantity;
 }  
add(amount){
  return this.quantity += amount;
}
remove(amount){
    if(this.quantity >= amount){
        return this.quantity -= amount;

    }
}

label(){
    return "Dados: " + this.name + " , " + this.price.toFixed(2);
}


}
 
const p1 = new Product("Iphone",6000 ,6);
const p2 = new Product("Geladeira",3500,5);

