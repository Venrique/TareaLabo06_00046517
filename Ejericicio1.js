var productos = [];
var ventas = [];

function mantenimiento(){
    let bandera = 0;
    while(bandera == 0){
        let opcion = prompt('Ingrese una opción:\n1.Agregar producto\n2.Modificar Stock\n3.Registrar venta\n4.Promedio de ventas realizadas\n5.Productos sin Stock\n6.Salir ','# opción');
        switch(opcion){
            case '1':
                let codigo = prompt('Ingrese el código del producto:');
                let descripcion = prompt('Ingrese la descripción del producto:');
                let tipo = prompt('Ingrese el tipo de producto:');
                let precioc = prompt('Ingrese el precio de compra:');
                let preciov = prompt('Ingrese el precio de venta:');
                let stock = prompt('Ingrese el stock del producto:');
                agregar(codigo,descripcion,tipo,precioc,preciov,stock);
                break;
            case '2':
                let cod = prompt('Ingrese el código del producto que desea modificar:');
                let cant = prompt('Ingrese el nuevo stock para el producto: ');
                modstock(cod,cant);
                break;
            case '3':
                let cod2 = prompt('Ingrese el código del producto que va a vender: ');
                let cant2 = prompt('Ingrese la cantidad de producto que va a vender: ');
                venta(cod2,cant2);
                break;
            case '4':
                let cantprod = prompt('Ingrese el código del producto: ');
                promedio(cantprod);
                break;
            case '5':
                ver();
                break;
            case '6':
                bandera = 1;
                break;
            default:
                console.log('Ingrese una opción válida.');
                break;
        }
    }
}

function agregar(cod,des,tipo,pc,pv,stock){
    let prod = {
        codigo: cod,
        descripcion: des,
        tipo: tipo,
        precioCompra: pc,
        precioVenta: pv,
        stock: stock
    }
    productos.push(prod);
    console.log(productos);
}

function venta(cod,cant){
    for(let i of productos){
        if(i.codigo == cod){
            if(parseInt(i.stock) > cant){
                i.stock = i.stock-cant;
                let venta = {
                    codProducto: cod,
                    cantidadVendida: cant
                }
                ventas.push(venta);
                console.log(ventas);
            }else{
                console.log('No hay suficientes productos en stock para realizar la venta.');
            }
        }
    }
}

function promedio(cod){
    let contador = 0;
    for(let i of ventas){
        if(i.codProducto==cod){
            contador+=1;
        }
    }
    console.log('Promedio de venta del producto: '+(contador/ventas.length)*100+'%');
}

function modstock(cod,cant){
    for(let i of productos){
        if(i.codigo == cod){
            i.stock = cant;
        }
    }
}

function ver(){
    for(let i of productos){
        if(i.stock==0){
            console.log('- - - - - ');
            console.log('Producto: '+i.codigo);
            console.log('Descripción: '+i.descripcion);
            console.log('Tipo producto: '+i.tipo);
            console.log('Precio Compra: '+i.precioCompra);
            console.log('Precio Venta: '+i.precioVenta);
            console.log('Stock: '+i.stock);
        }
    }
}