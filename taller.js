class tallerDos {
    constructor(objeto) {
        this.numeros = objeto.numero
        this.numeros2 = objeto.numero2 || 0;
        this.veces = objeto.veces || 0;
    }
    serieFibonacci() {
        let a = 0, b = 1, c;
        console.log(a);
        console.log(b);
        for (let i = 3; i <= this.numeros; i++) {
            c = a + b
            console.log(c)
            a = b;
            b = c;

        }

    }
    divisores() {
        let cv = 0;
        const numero = this.numeros
        console.log(`Divisores de ${numero}`)
        for (let c = 1; c <= numero; c++) {
            if (numero % c === 0) {
                console.log(c)
                cv++
            }
        }
        console.log(`Numeros divisores de ${numero}: ${cv}`)


    }
    sumaDivisores() {
        const numero = this.numeros
        let suma = 0;
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                suma += i
            }
        }
        console.log(`Suma de divisores es:${suma}`)
    }
    numeroPerfecto() {
        let suma = 0
        const numero = this.numeros
        for (let c = 1; c < numero; c++) {
            if (numero % c === 0) {
                suma += c
            }
        }
        if (suma === numero) {
            console.log(`El numero ${numero} es perfecto`)
        } else {
            console.log(`Su numero "${numero} no es perfecto `)
        }
    }

    numeroPrimo() {
        const numero = this.numeros
        let cv = 0;
        for (let c = 2; c < numero; c++) {
            if (numero % c === 0) {
                cv++

            }
        }
        if (cv === 0) {
            console.log(`Su numero es primo`)
        } else {
            console.log(`Su numero no es primo`)
        }
    }
    invertirNumero() {
        let numero = this.numeros
        let invertido = 0;
        while (numero > 0) {
            let digito = numero % 10;
            invertido = invertido * 10 + digito
            numero = Math.floor(numero / 10)

        }
        console.log(`Numero invertido es ${invertido}`)
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
    }
    factoriales() {
        let numero = this.numeros
        let fact = 1;
        for (let c = 1; c <= numero; c++) {
            fact *= c;

        }
        console.log(`El numero factorial de ${numero} es:${fact}`)
    }
    multiplicarVeces() {
        const veces = this.veces
        let numero = this.numeros
        let suma = 0;
        for (let c = 1; c <= veces; c++) {
            suma += numero

        }
        console.log(`La respues de la suma es ${suma}`)
    }
    restar() {
        const numero2 = this.numeros2
        let numero = this.numeros
        while (numero > 0) {
            numero = numero - numero2

        }
        console.log(`Su resta es: ${numero}`)
    }


}

let ejer1 = new tallerDos({ numero: 8 })
ejer1.serieFibonacci();
let ejer2 = new tallerDos({ numero: 12 })
ejer2.divisores();
let ejer3 = new tallerDos({ numero: 12 })
ejer3.sumaDivisores();
let ejer4 = new tallerDos({ numero: 6 })
ejer4.numeroPerfecto();
let ejer5 = new tallerDos({ numero: 11 })
ejer5.numeroPrimo();
let ejer6 = new tallerDos({ numero: 1234 })
ejer6.invertirNumero();
let ejer7 = new tallerDos({ numero: 9876 })
ejer7.contarDigitos();
let ejer8 = new tallerDos({ numero: 5 })
ejer8.factoriales();
let ejer9 = new tallerDos({ numero: 3, veces: 4 })
ejer9.multiplicarVeces();
let ejer10 = new tallerDos({ numero: 5, numero2: 4 })
ejer10.restar();

