const productsList = [
    {N: 1,id: "Phone", brand:"Apple", model: "iPhone 14", quality: "Top", price: 1199},
    {N: 2,id: "Phone", brand:"Apple", model: "iPhone SE", quality: "Medium", price: 499},
    {N: 3,id: "Phone", brand:"Samsung", model: "Galaxy S23", quality: "Top", price: 1049},
    {N: 4,id: "Phone", brand:"Samsung", model: "A14", quality: "Affordable", price: 259},
    {N: 5,id: "Phone", brand:"Motorola", model: "Moto G72", quality: "Affordable", price: 375},
    {N: 6,id: "Phone", brand:"Xiaomi", model: "12 Pro", quality: "Medium", price: 499},
    {N: 7,id: "Smart Watch",brand: "Apple", model: "Series 8", quality: "Top", price: 559},
    {N: 8,id: "Smart Watch",brand: "Samsing", model: "Galaxy Watch 4", quality: "Top", price: 390},
    {N: 9,id: "Smart Watch",brand: "Huawei", model: "Gt Runner", quality: "Medium", price: 259},
    {N: 10,id: "Smart Watch",brand: "Xiaomi", model: "Amazfit Gt", quality: "Affordable", price: 129},
    {N: 11,id: "Smart Watch",brand: "Smart-Watch", model: "W28 Pro Serie 8", quality: "Affordable", price: 84},
    {N: 12,id: "Game Console",brand: "Play Station", model: "5", price: 808},
    {N: 13,id: "Game Console",brand: "xBox", model: "One", price: 600},
    {N: 14,id: "Game Console",brand: "Nintendo Switch", model: "Deluxe", price: 699},
    {N: 15,id: "Laptop", brand: "Apple", model: "MacBook Pro", quality: "Top", price: 2899},
    {N: 16,id: "Laptop", brand: "Apple", model: "MacBook Air M2", quality: "Top", price: 1829},
    {N: 17,id: "Laptop", brand: "ASUS", model: "X515EA", quality: "Medium", price: 599},
    {N: 18,id: "Laptop", brand: "Dell", model: "Vostro 3501", quality: "Medium", price: 568},
    {N: 19,id: "Laptop", brand: "Lenovo", model: "IdealPad", quality: "Affordable", price: 299},
    {N: 20,id: "Laptop", brand: "Lenovo", model: "N23 Celeron", quality: "Affordable", price: 210},
    {N: 21,id: "Music",type: "headPhone", brand: "Apple", model: "AirPods Max", quality: "top", price: 815},
    {N: 22,id: "Music",type: "EarPhone", brand: "Apple", model: "AirPods 3ª Gen", quality: "top", price: 339},
    {N: 23,id: "Music",type: "HeadPhone", brand: "Sony", model: "WH-H900N", quality: "top", price: 476},
    {N: 24,id: "Music",type: "headPhone", brand: "Sony", model: "WH-XB910N", quality: "medium", price: 239},
    {N: 25,id: "Music",type: "EarPhone", brand: "JBL", model: "Tune 115TWS", quality: "Affordable", price: 89},
    {N: 26,id: "Music",type: "headPhone", brand: "JBL", model: "Tune 500", quality: "Affordable", price: 33},
];


class Shopping{
    constructor(){
        this.products = productsList;
        this.bag = [];
    }

    //crear categorias por productos
    showCategory(){    
        this.products.forEach(element => {
            if(!category.includes(element.id)){ //En este caso preguntamos si en el array category NO esta el primer elemente, como el array esta vacio, se agrega, es decir que cuando se pregunte si no esta y esta no lo agrega
                category.push(element.id);
            }
        })
        return category.join("\n")
    }

    // convertir el array 'category' en upperCase
    start(){
        const upperCat = this.convertUpper(category);
        return upperCat
    }

    // convertir de arrays en uppercase
    convertUpper(array){
        return array.map((element) => element.toUpperCase())
    }

    showProducts(category){
        let acum = `Productos en: ${category}\n\n`;
        
        const categoryProducts = this.products.filter((item)=>item.id.toUpperCase() === category.toUpperCase());
        // categoryProducts.sort((a, b) => b.price - a.price);
        
        categoryProducts.forEach(item => {
            acum += `${item.N}) - ${item.brand} ${item.model} --- $${item.price}\n`;  
        });

        // return prompt(acum);
        return acum;
    }

    addBag(productNumber){
        const userProduct = this.products.find(item => item.N === productNumber);
        if(userProduct){
            this.bag.push(userProduct);
            console.log(`Agregado al Carrito: ${userProduct.brand} ${userProduct.model}`);
        }else{
            console.log("Lo sentimos. Producto invalido :(");
        }
    }
    
    quitBag(productNumber){
        const index = this.bag.findIndex(item => item.N === productNumber);
        if(index !== -1){
            const quitProduct = this.bag.splice(index, 1);
            console.log(`Eliminado: ${quitProduct.brand} ${quitProduct.model}`);
        }else("No se encontro el producto seleccionado.")
    }

    check(){
        this.bag.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}

const startShopping = () => {
    while (welcome !== "ESC") {
        welcome = prompt(`Welcome to Swift TECH\n\nPlease select one category!\n\n${cart.showCategory()}`).toUpperCase();
        
        if (cart.start().includes(welcome)) {
            let choose = ""
            while (choose !== "ESC") {
                choose = prompt(`${cart.showProducts(welcome)}\n"ESC" Para ir atras`).toUpperCase();
      
                if (choose !== "ESC") {
                    let productNumber = parseInt(choose);
                    cart.addBag(productNumber);
                }
            }
        }else if(welcome === "ESC") {
            removeFromBag();
        }
    }
    checkOut()
}

// quitar producto de carrito
const removeFromBag = () => {
    let removeChoice = "";

    while (removeChoice !== "0") {
        removeChoice = prompt(`Productos en el carrito:\n\n${cart.bag.map(item => `${item.N}) - ${item.brand} ${item.model} --- $${item.price}`).join("\n")}\n\nIngrese el número del producto que desea eliminar del carrito (0 para finalizar):`);
  
        const productNumber = parseInt(removeChoice);
        cart.quitBag(productNumber);
    }
}

// suma total
const checkOut = () =>{
    const cartItem = cart.bag.map(item => `${item.N}) - ${item.brand} ${item.model} --- $${item.price}`);
    alert(`Productos en el carrito:\n\n${cartItem.join("\n")}\n\nTotal: $${cart.check()}`);
} 