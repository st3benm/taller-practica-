class tallerDos {
    constructor(objeto) {
        this.numeros = objeto.numero
        this.numeros2 = objeto.numero2 || 0;
        this.veces = objeto.veces || 0;
    }
    serieFibonacci() {
        let a = 0, b = 1, c;
        const numero = this.numeros
        let lista = [];
        if (numero <= 0) {
            console.log("El número debe ser mayor a 0");
            return [];
        }

        lista.push(a)
        if (numero > 1) lista.push(b)
        for (let i = 3; i <= numero; i++) {
            c = a + b
            lista.push(c)
            a = b;
            b = c;

        }
        console.log(`Serie de Fibonacci (${numero}):`);
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i]);
        }
        return lista;

    }
    divisores() {
        let cv = 0;
        let lista = [];
        const numero = this.numeros
        console.log(`Divisores de ${numero}`)
        for (let c = 1; c <= numero; c++) {
            if (numero % c === 0) {
                lista.push(c);
                console.log(c)
                cv++
            }
        }
        console.log(`Numeros divisores de ${numero}: ${cv}`)
        return lista;


    }
    sumaDivisores() {
        const numero = this.numeros
        let suma = 0;
        let lista = [];
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                lista.push(i)
                suma += i
            }
        }
        console.log(`Suma de divisores es:${suma}`)
        return suma
    }
    numeroPerfecto() {
        let suma = 0
        const numero = this.numeros
        let lista = [];
        for (let c = 1; c < numero; c++) {
            if (numero % c === 0) {
                lista.push(c)
                suma += c
            }
        }
        if (suma === numero) {
            console.log(`El numero ${numero} es perfecto`)
            return true;
        } else {
            console.log(`Su numero "${numero} no es perfecto `)
            return false;
        }
    }

    numeroPrimo() {
        const numero = this.numeros
        let lista = [];
        for (let c = 2; c < numero; c++) {
            if (numero % c === 0) {
                lista.push(c);



            }
        }
        if (lista.length === 0) {
            console.log(`Su numero es primo`)
            return true;
        } else {
            console.log(`Su numero no es primo`)
            console.log(`Sus numeros divisibles son ${lista}`)
            return false;
        }
    }
    invertirNumero() {
        let numero = this.numeros
        let invertido = 0;
        let lista = [];
        while (numero > 0) {
            let digito = numero % 10;
            lista.push(digito)
            invertido = invertido * 10 + digito
            numero = parseInt(numero / 10)

        }
        console.log(`Numero invertido es ${invertido}`)
        return invertido;
    }
    contarDigitos() {
        let numero = this.numeros
        let cv = 0;
        if (numero === 0) {
            cv = 1
        } else {
            while (numero > 0) {
                numero = Math.floor(numero / 10);
                cv++
            }
        }
        console.log(`El numero tiene ${cv} digitos `)
        return cv;
    }
    factoriales() {
        let numero = this.numeros
        let fact = 1;
        let lista = [];
        for (let c = 1; c <= numero; c++) {
            fact *= c;
            lista.push(c)

        }
        console.log(`El numero factorial de ${numero} es:${fact}`)
        return fact
    }
    multiplicarVeces() {
        const veces = this.veces
        let numero = this.numeros
        let suma = 0;
        let lista = [];
        for (let c = 1; c <= veces; c++) {
            suma += numero
            lista.push(suma)

        }
        console.log(`La respues de la suma es ${suma}`)
        return suma
    }
    restar() {
        const numero2 = this.numeros2
        let numero = this.numeros
        let lista = [];
        if (numero2 <= 0) {
            console.log("El numero a restar (numero2) debe ser mayor que 0");
            return null;
        }
        while (numero > 0) {
            numero = numero - numero2
            lista.push(numero)

        }
        console.log(`Su resta es: ${numero}`)
        return numero
    }
}
function uno() {
    let ejer1 = new tallerDos({ numero: 8 })
    ejer1.serieFibonacci();
}
function dos() {
    let ejer2 = new tallerDos({ numero: 12 })
    ejer2.divisores();
}
function tres() {
    let ejer3 = new tallerDos({ numero: 12 })
    ejer3.sumaDivisores();
}
function cuatro() {
    let ejer4 = new tallerDos({ numero: 6 })
    ejer4.numeroPerfecto();
}
function cinco() {
    let ejer5 = new tallerDos({ numero: 11 })
    ejer5.numeroPrimo();
}
function seis() {
    let ejer6 = new tallerDos({ numero: 1234 })
    ejer6.invertirNumero();
}
function siete() {
    let ejer7 = new tallerDos({ numero: 9876 })
    ejer7.contarDigitos();
}
function ocho() {
    let ejer8 = new tallerDos({ numero: 5 })
    ejer8.factoriales();
}
function nueve() {
    let ejer9 = new tallerDos({ numero: 3, veces: 4 })
    ejer9.multiplicarVeces();
}
function diez() {
    let ejer10 = new tallerDos({ numero: 5, numero2: 4 })
    ejer10.restar();
}

function variosFibonacci() {
    const numeros = [{ numero: 5 }, { numero: 8 }, { numero: 10 }]
    for (let c = 0; c < numeros.length; c++) {
        let Fibonacci = new tallerDos(numeros[c])
        Fibonacci.serieFibonacci();
        console.log(`------------------`)
    }
}
function variosDivisores() {
    const numeros = [{ numero: 6 }, { numero: 12 }, { numero: 28 }]
    for (let c = 0; c < numeros.length; c++) {
        let d = new tallerDos(numeros[c])
        const lista = d.divisores();
        console.log(`Divisores guardados:`, lista)
        console.log(`------------`)


    }

}
function variosSuma() {
    const numeros = [{ numero: 6 }, { numero: 12 }, { numero: 28 }]
    for (let c = 0; c < numeros.length; c++) {
        let x = new tallerDos(numeros[c])
        const soma = x.sumaDivisores();
        console.log(`resultado:`, soma)
        console.log(`--------------`)

    }

}
function variosPerfectos() {
    const numeros = [{ numero: 6 }, { numero: 10 }, { numero: 28 }, { numero: 30 }]
    let perfecto = [];
    for (let c = 0; c < numeros.length; c++) {
        const t = new tallerDos(numeros[c])
        if (t.numeroPerfecto()) perfecto.push(numeros[c].numero)

    }
    console.log(`Perfectos:`, perfecto)

}

function variosPrimos() {
    const numeros = [{ numero: 5 }, { numero: 6 }, { numero: 7 }, { "numero": 8 }, { "numero": 11 }]
    let primo = [];
    for (let c = 0; c < numeros.length; c++) {
        const v = new tallerDos(numeros[c])
        if (v.numeroPrimo()) primo.push(numeros[c].numero)
    }
    console.log(`Numeros primos:`, primo)
}
function variosInvertir() {
    const numeros = [{ numero: 123 }, { numero: 456 }, { numero: 780 }]
    for (let c = 0; c < numeros.length; c++) {
        let x = new tallerDos(numeros[c])
        let invertir = x.invertirNumero();
        console.log(`guardado:`, invertir)
        console.log(`-----------`)
    }
}
function variosDigitos() {
    const numeros = [{ numero: 45 }, { numero: 678 }, { numero: 12345 }]
    for (let c = 0; c < numeros.length; c++) {
        let z = new tallerDos(numeros[c])
        let digitos = z.contarDigitos();
        console.log(`Guardado:`, digitos)
        console.log(`-----------`)
    }
}
function variosFactoriales() {
    const numeros = [{ numero: 3 }, { numero: 4 }, { numero: 5 }]
    for (let c = 0; c < numeros.length; c++) {
        let x = new tallerDos(numeros[c])
        let factorial = x.factoriales();
        console.log(`Numero guardado:`, factorial)
        console.log(`-----------`)
    }
}
function variosSumasdivisores() {
    numeros = [
        { "numero": 2, "veces": 4 },
        { "numero": 3, "veces": 4 },
        { "numero": 4, "veces": 4 }
    ]
    for (let c = 0; c < numeros.length; c++) {
        let t = new tallerDos(numeros[c])
        let divisores = t.multiplicarVeces();
        console.log(`Numeros guardados:`, divisores)
        console.log(`------------`)
    }

}
function variosRestar() {
    const numeros = [
        { numero: 15, numero2: 4 },
        { numero: 22, numero2: 4 },
        { numero: 30, numero2: 4 }
    ]
    for (let c = 0; c < numeros.length; c++) {
        let x = new tallerDos(numeros[c])
        let resta = x.restar();
        console.log(`Numeros guardado:`, resta)
        console.log(`-------------------`)
    }

}