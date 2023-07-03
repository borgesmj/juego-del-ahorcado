import { palabras } from './palabras.js'



let winCounter = 0;
let failCounter = 0; 
let nuevaPalabra = '';
let nuevaPalabraDividida = [];
let letrasUsadas = [];
let letrasErradas = [];
let letrasCorrectas = [];
let nuevaLetra = ''

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
            <div id="sherBtn" class="button share">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                </svg>
            </div>
            <label for="keyboard" id="keyboardBtn" class="button keyboard">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/>
                </svg>
            </label>
            <input type="text" id="keyboard">
        </form>
`

console.log('update main, realizando tests con el input en version movil')


// =============================================================================================================================
// 1. Probamos funcionalidad al boton de teclado en la version de pantallas de móviles
// =============================================================================================================================

document.querySelector('#dibujo').addEventListener('click', () =>{
    document.querySelector('header').classList.remove('hide')
})

document.querySelector('#keyboardBtn').addEventListener('click', () => {
    document.querySelector('header').classList.add('hide')
})

// =============================================================================================================================
// 2. Cargamos una palabra nueva
// =============================================================================================================================
// 2.1.- Al cargar el documento, los contadores iran a 0
// 2.2.- Se carga la nueva palabra
// 2.3.- Se divide la palabra en letras
// 2.4.- La mostramos en pantalla, con las letras ocultas
// 2.5.- Escondemos el muñeco
        function iniciarNuevaPalabra(){
            nuevaPalabra = palabras[Math.floor(Math.random() * palabras.length)]
            
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

            console.log(document.querySelector('#keyboard'))
        }

// =============================================================================================================================
// 3. Captar la entrada del teclado
// =============================================================================================================================
// 3.1 Ignoramos teclas numericas
// 3.2 Ignoramos teclas especiales
        document.addEventListener('keydown', (event) => {

            nuevaLetra = event.key

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
//  7. Usando el input para las versiones moviles
// =============================================================================================================================

            document.querySelector('#keyboard').addEventListener('input', (event)=>{
                console.log(event.data)
                
                nuevaLetra = event.data

            if (teclasEspeciales.includes(event.data) || event.data.startsWith('F') || event.data.startsWith('arrow')){
                return
            }

            if (regex.test(event.data)){
                evaluarLetraUsada()
            } else {
                return
            }

            })



        iniciarNuevaPalabra()