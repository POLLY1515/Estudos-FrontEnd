const obj = {
    id: 53,
    date: "2021-10-20",
    items:[
        {
            description: "Celular",
            price:1499.00,
            quantity:1
        },
        {
            description: "Mouse",
            price:100.0,
            quantity:2
        }
    ],
    client:{
        name:"Maria braw",
        email: "maria@gmail.com",
        active:true
    }
};

const {id,client} = obj;
console.log(id);
console.log(client);

function subTotal({price,quantity}){
    return price * quantity;
}

function total({items}){
    let soma = 0;
    for(let i = 0; i < items.length;i++){
        soma = soma + subTotal(items[i]);
    }
    return soma;
}
console.log(subTotal(obj.items[0]));
console.log(subTotal(obj.items[1]));
console.log(total(obj));

