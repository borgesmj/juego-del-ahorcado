# 	:rocket: Documentación del código del juego del ahorcado
Este documento proporciona una descripción detallada del código utilizado para implementar el juego del ahorcado en JavaScript. A continuación, se presentan las diferentes secciones del código y su funcionalidad.

## Lenguajes utilizados:
* JavaScript
* HTML
* CSS

## Variables y constantes
### palabras
Tipo: Array de cadenas de texto

Descripción: Almacena las palabras que se utilizarán en el juego. Contiene 50 palabras entre 4 y 6 letras de longitud, que se mostrarán aleatoriamente en pantalla.

### winCounter
Tipo: Número entero

Descripción: Almacena el número de partidas ganadas.

### failCounter
Tipo: Número entero

Descripción: Almacena el número de partidas perdidas.

### nuevaPalabra
Tipo: Cadena de texto

Descripción: Almacena la palabra seleccionada aleatoriamente para el juego, desde el arreglo de palabras.

### nuevaPalabraDividida

Tipo: Array de cadenas de texto

Descripción: Almacena las letras individuales de la palabra seleccionada.
### letrasUsadas

Tipo: Array de cadenas de texto
Descripción: Almacena las letras utilizadas durante la partida.

### letrasErradas
Tipo: Array de cadenas de texto

Descripción: Almacena las letras introducidas en la partida, que no estan contenida en la palabra a adivinar.

### letrasCorrectas
Tipo: Array de cadenas de texto
Descripción: Almacena las letras introducidas en la partida, que si estan contenida en la palabra a adivinar.

### nuevaLetra
Tipo: Cadena de texto

Descripción: Almacena la última letra ingresada por el jugador.

### keyboardOpen
Tipo: Valor booleano

Descripción: Indica si el teclado virtual, en las versiones móviles, está abierto o cerrado.

### regex
Tipo: Expresión regular

Descripción: Representa un patrón que se utiliza para verificar si una entrada es una letra del alfabeto.
### teclasEspeciales
Tipo: Array de cadenas de texto

Descripción: Almacena las teclas especiales que se ignorarán al capturar la entrada del teclado.

## Elementos del DOM
El código utiliza diferentes elementos del Document Object Model (DOM) para mostrar y manipular la interfaz del juego.

### #app: Contenedor principal del juego.
### .header: Encabezado del juego.
### #counterContainer: Contenedor de los contadores de partidas ganadas y perdidas.
### .counters: Lista desordenada que contiene los elementos de los contadores.
### .counter: Elemento de contador individual.
### .counterTitle: Título del contador.
### .counterNumber: Número del contador.
### #wordContainer: Contenedor de las letras ocultas de la palabra a adivinar.
### #dibujo: Contenedor del dibujo del ahorcado.
### .top, .head, .leg, .arm, .torso: Elementos individuales del dibujo del ahorcado.
### #btnPanel: Contenedor del panel de botones.

## Funciones del juego
### Cargar una palabra nueva 
En esta funcion, se selecciona una palabra del arreglo, se divide en letras y se muestra en pantalla escondida por un asterisco, ademas que se esconde el dibujo del muñeco
```
 function iniciarNuevaPalabra(){
            nuevaPalabra = (palabras[Math.floor(Math.random() * palabras.length)]).toUpperCase()
            
            nuevaPalabraDividida = nuevaPalabra.split('')
            
            document.querySelector('#wordContainer').innerHTML = `
                    ${nuevaPalabraDividida.map((item) => `
                            <div class='letra ${item}'>*</div>
                            
                            `).join('')}
            `

            const partesDelMuneco = document.querySelectorAll('.head, .leg, .arm, .torso')

            partesDelMuneco.forEach((parte) => {
                parte.classList.add('hide');
            })

            letrasUsadas = [];
            letrasCorrectas = [];
            letrasErradas = []

            document.querySelector('.counterLetters').innerHTML = `
                ${letrasErradas.map ((item) => `<div>${item}</div>`).join('')}
                `

        }
```
