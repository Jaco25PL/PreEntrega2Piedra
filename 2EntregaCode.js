let welcome = "";
let totalPrice = 0;


class Shopping{
    constructor(){
        this.products = productsList;
        this.bag = [];
        this.category = [];
    }

    //crear categorias por productos
    showCategory(){    
        this.products.forEach(element => {
            if(!this.category.includes(element.id)){
                this.category.push(element.id);
            }
        })
        return this.category.join("\n");
    }

    // convertir el array 'category' en upperCase
    start(){
        const upperCat = this.convertUpper(this.category);
        return upperCat;
    }

    // convertir de arrays en uppercase
    convertUpper(array){
        return array.map((element) => element.toUpperCase());
    }

    // Buscador de products en su category
    showProducts(category){
        let showAll = `Productos en: ${category}\n\n`;
        const categoryProducts = this.products.filter((item)=>item.id.toUpperCase() === category.toUpperCase());
        
        categoryProducts.forEach(item => {
            showAll += `${item.N}) - ${item.brand} ${item.model} --- $${item.price}\n`;  
        });
        return showAll;
    }

    //agragar al carrito (bag)
    addBag(productNumber){
        const userProduct = this.products.find(item => item.N === productNumber);
        if(userProduct){
            this.bag.push(userProduct);
            console.log(`Agregado al Carrito: ${userProduct.brand} ${userProduct.model}`);
        }else{
            console.log("Lo sentimos. Producto invalido :(");
        }
    }
    
    //Quitar del carrito (bag)
    quitBag(productNumber){
        const index = this.bag.findIndex(item => item.N === productNumber);
        if(index !== -1){
            const quitProduct = this.bag.splice(index, 1);
            console.log(`Eliminado: ${quitProduct.brand} ${quitProduct.model}`);
        }else{
            console.log("No se encontro el producto seleccionado.");
        }    
    }

    //cuenta del carrito (bag)
    check(){
        return this.bag.reduce((total, item) => total + item.price, 0);
    }

    
}

const startShopping = () => {
    while (welcome !== "ESC") {
        welcome = prompt(`Bienvenido a Swift TECH\n\nPor favor seleccione una Categoria!\n\n${cart.showCategory()}\n\n"ESC" para ir al carrito`).toUpperCase();
        
        if(welcome===""){
            break
        }else if (cart.start().includes(welcome)) {
            let choose = "";
            while (choose !== "ESC") {
                choose = prompt(`${cart.showProducts(welcome)}\n"ESC" Para ir atras`).toUpperCase();
      
                if (choose !== "ESC") {
                    let productNumber = parseInt(choose);
                    cart.addBag(productNumber);
                }
            }
        }else if(welcome === "ESC") {
            if(cart.bag.length  === 0){
                alert("El carrito esta vacio")
            }else{
                removeFromBag();
            }
        }
    }
    checkOut();
}

// quitar producto de carrito
const removeFromBag = () => {
    let removeChoice = "";

    while (removeChoice !== "0") {
    const removeOption = cart.bag.map(item => `${item.N}) - ${item.brand} ${item.model} --- $${item.price}`);
    removeChoice = prompt(`Productos en el carrito:\n\n${removeOption.join("\n")}\n\nIngrese el número del producto que desea eliminar del carrito (0 para finalizar):`);

    const productNumber = parseInt(removeChoice);
    cart.quitBag(productNumber);
    }
}
    
// suma total
const checkOut = () =>{
    const cartItem = cart.bag.map(item => `${item.N}) - ${item.brand} ${item.model} --- $${item.price}`);
    if(cartItem.length > 0){
        alert(`Productos en el carrito:\n\n${cartItem.join("\n")}\n\nTotal: $${cart.check()}`);
    }else{
        alert("Gracias por visitarnos! Lo esperamos Pronto")
    }

}

const cart = new Shopping();
// startShopping();
