class Conversion{
    convertir(medida,unidad1,unidad2,tipo){
        unidad1 = unidad1.toLowerCase();
        unidad2 = unidad2.toLowerCase();

        if(unidad1=='m' && unidad2=='cm' && tipo=='L'){
            console.log('Resultado: '+(medida*100)+'cm');
        }else if(unidad1=='cm' && unidad2=='m' && tipo=='L'){
            console.log('Resultado: '+(medida/100)+'m');
        }else if(unidad1=='km' && unidad2=='m' && tipo=='L'){
            console.log('Resultado: '+(medida*1000)+'m');
        }else if(unidad1=='m' && unidad2=='km' && tipo=='L'){
            console.log('Resultado: '+(medida/1000)+'km');
        }else if(unidad1=='ft' && unidad2=='m' && tipo=='L'){
            console.log('Resultado: '+(medida/3.2808)+'m');
        }else if(unidad1=='m' && unidad2=='ft' && tipo=='L'){
            console.log('Resultado: '+(medida*3.2808)+'ft');
        }else if(unidad1=='c' && unidad2=='f' && tipo=='T'){
            console.log('Resultado: '+(((medida*9)/5)+32)+'f');
        }else if(unidad1=='f' && unidad2=='c' && tipo=='T'){
            console.log('Resultado: '+(((medida-32)*5)/9)+'c');
        }else if(unidad1=='k' && unidad2=='f' && tipo=='T'){
            console.log('Resultado: '+(((medida-273.15)*1.8)+32)+'f');
        }else if(unidad1=='f' && unidad2=='k' && tipo=='T'){
            console.log('Resultado: '+(((medida-32)/1.8)+273.15)+'k');
        }else if(unidad1=='k' && unidad2=='c' && tipo=='T'){
            console.log('Resultado: '+(medida-273.15)+'c');
        }else if(unidad1=='c' && unidad2=='k' && tipo=='T'){
            console.log('Resultado: '+(medida+273.15)+'k');
        }else{
            console.log('Error, asegurse de haber mandado correctamente los parámetros');
        }
    }
}

/*var con = new Conversion();
con.convertir(50,'cm','m','L');*/