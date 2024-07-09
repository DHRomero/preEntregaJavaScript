const bebidas =[
    {id:1, nombre:"Pala Corazón", cepa: "Malbec", bodega:"Bodega Niven", precio: 8000 },
    {id:2, nombre:"Criolla Argentina", cepa: "Criolla Grande", bodega:"Bodega Niven", precio: 6500 },
    {id:3, nombre:"Paso de Piedra", cepa: "Cabernet Sauvignon", bodega:"Bodega Viña Alicia", precio: 15000 },
    {id:4, nombre:"Uno", cepa: "Malbec", bodega:"Bodega Niven", precio: 9500 },
    {id:5, nombre:"Aduentus", cepa: "Cabernet Franc", bodega:"Bodega Antigal", precio: 15000 },
    {id:6, nombre:"Claroscuro", cepa: "Cabernet Franc", bodega:"Bodega Claroscuro", precio: 10500 },
    
]
 //console.log(bebidas);

class productos{
    constructor(productos){
        this.lista = productos;
    }

    agregarProducto(nombreP, cepaP, bodegaP, precioP){
        const producto = {id: this.generarId(), nombre: nombreP, cepa: cepaP, bodega: bodegaP, precio: precioP }
        this.lista.push (producto)
        console.log("Producto Agregado");
    }

    buscarProducto (id) {
        return this.lista.find (items => items.id == id);
    }
    
    obtenerProducto (){
        return this.lista;
    }

    totalProductos (){
        return this.lista.length;
    }

   
    generarId () {
        let max = 0;
        this.lista.forEach(item => {
            if(item.id > max){
                max = item.id;
            }
        return max + 1;

        });

    }

    eliminarProducto (id) {
        this.lista = this.lista.filter (items => items.id != id);
        console.log("Se elimino el producto " + id);
    }
}


const catalogo = new productos (bebidas);
console.log(catalogo.obtenerProducto());

let nombreProducto = prompt ("Ingrese el nombre de un nuevo Vino: ");
let cepaProducto = prompt ("Ingrese la Cepa");
let bodega = prompt("Ingrese la Bodega");
let precioProducto = parseFloat(prompt ("ingrese el precio del producto"));


catalogo.agregarProducto (nombreProducto, cepaProducto, bodega, precioProducto);
alert("Se agrego al catalogo el producto: " + "\n Vino: " + nombreProducto + "\n Cepa: " + cepaProducto  + "\n Bodega: " + bodega +  "\n Precio: $" + precioProducto);
console.log(catalogo.obtenerProducto());
console.log(catalogo.eliminarProducto(6));
console.log(catalogo.obtenerProducto());


alert("El total de tus productos en catalogo son: " + catalogo.totalProductos())

