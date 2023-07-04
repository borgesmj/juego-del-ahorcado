# Documentación del código del juego del ahorcado
Este documento proporciona una descripción detallada del código utilizado para implementar el juego del ahorcado en JavaScript. A continuación, se presentan las diferentes secciones del código y su funcionalidad.

## Lenguajes 
* JavaScript
* HTML
* CSS

## Variables y constantes
### palabras
Tipo: Array de cadenas de texto
Descripción: Almacena las palabras que se utilizarán en el juego. En este caso, solo contiene una palabra de ejemplo, pero se pueden agregar más palabras según sea necesario.
### letras
Tipo: Array de objetos
Descripción: Contiene las letras del alfabeto y su correspondiente identificador. Cada objeto tiene dos propiedades: content (contenido de la letra) e id (identificador único).
### winCounter
Tipo: Número entero
Descripción: Almacena el número de partidas ganadas.
### failCounter
Tipo: Número entero
Descripción: Almacena el número de partidas perdidas.
### nuevaPalabra
Tipo: Cadena de texto
Descripción: Almacena la palabra seleccionada aleatoriamente para el juego.
### nuevaPalabraDividida
Tipo: Array de cadenas de texto
### Descripción: Almacena las letras individuales de la palabra seleccionada.
letrasUsadas
Tipo: Array de cadenas de texto
Descripción: Almacena las letras utilizadas en el juego.
### letrasErradas
Tipo: Array de cadenas de texto
Descripción: Almacena las letras incorrectas utilizadas en el juego.
### etrasCorrectas
Tipo: Array de cadenas de texto
Descripción: Almacena las letras correctas adivinadas en el juego.
### nuevaLetra
Tipo: Cadena de texto
Descripción: Almacena la última letra ingresada por el jugador.
### keyboardOpen
Tipo: Valor booleano
Descripción: Indica si el teclado virtual está abierto o cerrado.
### regex
Tipo: Expresión regular
Descripción: Representa un patrón que se utiliza para verificar si una entrada es una letra del alfabeto.
### teclasEspeciales
Tipo: Array de cadenas de texto
Descripción: Almacena las teclas especiales que se ignorarán al capturar la entrada del teclado.

## Elementos del DOM
El código utiliza diferentes elementos del Document Object Model (DOM) para mostrar y manipular la interfaz del juego.

### #app: Contenedor principal del juego.
.header: Encabezado del juego.
### #counterContainer: Contenedor de los contadores de partidas ganadas y perdidas.
.counters: Lista desordenada que contiene los elementos de los contadores.
.counter: Elemento de contador individual.
.counterTitle: Título del contador.
.counterNumber: Número del contador.
### #wordContainer: Contenedor de las letras ocultas de la palabra a adivinar.
### #dibujo: Contenedor del dibujo del ahorcado.
.top, .head, .leg, .arm, .torso: Elementos individuales del dibujo del ahorcado.
### #btnPanel: Contenedor del panel de botones.
`#share
