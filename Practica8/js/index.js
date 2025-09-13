    let nombre = "Abraham";
            let apellido = "Gonzalez";

            console.log(nombre);
            console.log(apellido);
            console.log( nombre + " " + apellido);

            let completo = nombre + " " + apellido;
            let nombreCompleto = document.getElementById("nombreCompleto");
            nombreCompleto.innerHTML = completo;

            const PI = 3.1416;
            //PI =3.1 //

            console.log(PI);

            let edad = 20;
            console.log(edad*2);
            console.log(edad/2);
            console.log(edad+2);
            console.log(edad-2);

            let edadAntoine = 17;
            if (edadAntoine >= 18) {
                console.log("Antoine es mayor de edad");
            } else {
                console.log("Antoine es menor de edad");
            }

            let diaSemana = "Miercoles";

            switch (diaSemana) {
                case "Lunes":
                    console.log("Hoy es Lunes");
                    break;
                case "Martes":
                    console.log("Hoy es Martes");
                    break;
                case "Miercoles":
                    console.log("Hoy es Miercoles");
                    break;
                case "Jueves":
                    console.log("Hoy es Jueves");
                    break;
                case "Viernes":
                    console.log("Hoy es Viernes");
                    break;
                case "Sabado":
                    console.log("Es fin de semana");
                    break;
                case "Domingo":
                    console.log("Es fin de semana");
                    break;
            }

            let numero1 = 1;
            let numero2 = 10;

            let suma = numero1 + numero2;
            console.log("La suma es: " + suma);

            function sumar(a, b) {
                return a + b;
            }

            console.log("La suma es: " + sumar(8, 12));

            let radio = 5;
            //Reto hacer una funcion que calcule el area de un circulo
            function areaCirculo(radio) {
                return PI * radio * radio;
            }
            console.log("El area del circulo es: " + areaCirculo(5));

            let valorRadio = document.getElementById("valorRadio");
            let resultado = document.getElementById("resultado");
            let form = document.getElementById("formulario");
            let boton = document.getElementById("botonCalcular");

            botonCalcular.onclick = function(event) {
                event.preventDefault();
                let r = parseFloat(valorRadio.value);
                let area = areaCirculo(r);
                resultado.value = area.toFixed(2);
            }