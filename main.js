import { palabras } from './palabras.js'
import { letras } from './letras.js'


let winCounter = 0;
let failCounter = 0; 
let nuevaPalabra = '';
let nuevaPalabraDividida = [];
let letrasUsadas = [];
let letrasErradas = [];
let letrasCorrectas = [];
let nuevaLetra = ''
let keyboardOpen = false

const regex = /[a-zA-Z]/g
const teclasEspeciales = [
    'Alt',
    'Control',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Backspace',
    'Tab',
    'CapsLock',
    'Shift',
    'Enter',
    'space'
    ];


document.querySelector('#app').innerHTML = `
        <header class='header'>
            <h1>Juego del ahorcado</h1>
            <span>Adivina la palabra oculta</span>
        </header>
        <section id="counterContainer">
            <ul class="counters">
                <li class="counter">
                    <div class="counterTitle">Partidas Ganadas</div>
                    <div class="counterNumber wins">${winCounter}</div>
                </li>
                <li class="counter">
                    <div class="counterTitle">Partidas Perdidas</div>
                    <div class="counterNumber fails">${failCounter}</div>
                </li>
                <li class="counter">
                    <div class="counterTitle">Letras Usadas</div>
                    <div class="counterLetters"></div>
                </li>
            </ul>
        </section>
        <section id="wordContainer"></section>
        <section id="dibujo">
                <div class="top"></div>
                <div class="doll">
                    <div class="head"></div>
                    <div class="middle">
                        <div class="torso"></div>
                        <div class="arm rigth"></div>
                        <div class="arm left"></div>
                    </div>
                    <div class="bottom">
                        <div class="leg rigth"></div>
                        <div class="leg left"></div>
                    </div>
                </div>
        </section>
        <form id="btnPanel">
            <div id="shareBtn" class="button share">
                <i class="fa-sharp fa-solid fa-share-nodes"></i>
            </div>
            <label for="keyboard" id="keyboardBtn" class="button buttonDown">
                <i class="fa-solid fa-keyboard"></i>               
            </label>
            <input type="text" id="keyboardInput">
            <div id='keyboardPanel'></div>
        </form>
`

console.log('update main, realizando tests con el input en version movil v2')


// =============================================================================================================================
// 1. Probamos funcionalidad al boton de teclado en la version de pantallas de móviles
// =============================================================================================================================



        document.querySelector('#keyboardBtn').addEventListener('click', () => {
            keyboardOpen = !keyboardOpen
            activarTeclado()
        })

        function activarTeclado(){
            if(keyboardOpen){
                document.querySelector('.header').classList.add('hide')
                document.querySelector('#keyboardBtn .fa-solid').classList.remove('fa-keyboard')
                document.querySelector('#keyboardBtn .fa-solid').classList.add('fa-xmark')
                document.querySelector('#shareBtn').classList.add('hide')
                document.querySelector('#keyboardBtn').classList.remove('buttonDown')
                document.querySelector('#keyboardBtn').classList.add('buttonUp')
                document.querySelector('#keyboardPanel').innerHTML = `
                    ${letras.map((item) => 
                        `<div class="letterBtn" id=${item.id}>${item.content}</div>`
                    ).join('')}
                    `
                capturarLetraTecladoVirtual()
            } else {
                document.querySelector('.header').classList.remove('hide')
                document.querySelector('#keyboardBtn .fa-solid').classList.remove('fa-xmark')
                document.querySelector('#keyboardBtn .fa-solid').classList.add('fa-keyboard')
                document.querySelector('#keyboardBtn').classList.remove('buttonUp')
                document.querySelector('#keyboardBtn').classList.add('buttonDown')
                document.querySelector('#keyboardPanel').innerHTML = ""

            }
        }
 


// =============================================================================================================================
// 2. Cargamos una palabra nueva
// =============================================================================================================================
// 2.1.- Al cargar el documento, los contadores iran a 0
// 2.2.- Se carga la nueva palabra
// 2.3.- Se divide la palabra en letras
// 2.4.- La mostramos en pantalla, con las letras ocultas
// 2.5.- Escondemos el muñeco
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

// =============================================================================================================================
// 3. Captar la entrada del teclado
// =============================================================================================================================
// 3.1 Ignoramos teclas numericas
// 3.2 Ignoramos teclas especiales
        document.addEventListener('keydown', (event) => {

            nuevaLetra = event.key.toUpperCase()

            if (teclasEspeciales.includes(event.key) || event.key.startsWith('F') || event.key.startsWith('arrow')){
                return
            }

            if (regex.test(event.key)){
                evaluarLetraUsada()
            } else {
                return
            }
            
        })

// =============================================================================================================================
// 4. Evaluar que la letra introducida no se haya usado antes
// =============================================================================================================================

        function evaluarLetraUsada(){
            if (letrasUsadas.includes(nuevaLetra)){
                return
            } else {
                letrasUsadas.push(nuevaLetra)
                evaluarLetraIntroducida()
            }
        }

// =============================================================================================================================
// 4. Evaluar que la letra introducida sea la correcta o no
// =============================================================================================================================

        function evaluarLetraIntroducida(){
            if (nuevaPalabraDividida.includes(nuevaLetra)){
                revelarLetra()
            } else {
                letrasErradas.push(nuevaLetra)
                document.querySelector('.counterLetters').innerHTML = `
                ${letrasErradas.map ((item) => `<div>${item}</div>`).join('')}
                `
                guardarLetraErrada()
                dibujarMuneco()
            }
        }

// =============================================================================================================================
// 5. Guardar intentos fallidos, dibujar el muñeco y contar hasta 6 intentos, al llegar a 6, la partida estará perdida
// =============================================================================================================================

        function guardarLetraErrada(){
            if(letrasErradas.length === 6){
                               
                failCounter = failCounter + 1
                
                document.querySelector('.fails').innerHTML = `
                ${failCounter}
                `
                revelarPalabraCorrecta()
            }
        }

        function revelarPalabraCorrecta(){

            document.querySelector('#wordContainer').innerHTML = `
            ${nuevaPalabraDividida.map((item) => `<div class='letra ${item}'>${item}</div>`).join('')}
            `;

            setTimeout(() => {
                iniciarNuevaPalabra()
            }, 2000);
        }

        function dibujarMuneco(){
            document.querySelector('#dibujo .hide').classList.remove('hide')
        }
// =============================================================================================================================
// 6. Revelar la letra correcta, contar las tetras, revelar al ganador
// =============================================================================================================================

        function revelarLetra(){
            nuevaPalabraDividida.map( (item, index) => {
                if (item === nuevaLetra){
                    let elemento = document.querySelector(`.letra:nth-child(${index+1})`);
                    elemento.innerHTML = item
                    letrasCorrectas.push(item)
                    console.log(letrasCorrectas)
                }
            })

            if(letrasCorrectas.length === nuevaPalabraDividida.length){
                winCounter = winCounter + 1
                document.querySelector('.wins').innerHTML = winCounter
                setTimeout(() => {
                    iniciarNuevaPalabra()
                }, 1000);
            }
        }

// =============================================================================================================================
//  7. Versiones moviles con un teclado digital
// =============================================================================================================================

        function capturarLetraTecladoVirtual() {
            const letterBtns = document.querySelectorAll('.letterBtn');
        
            letterBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                nuevaLetra = event.target.textContent;
                evaluarLetraUsada()
            });
            });
        }

        console.log(document.querySelector('#keyboardInput'))
        


        iniciarNuevaPalabra()

