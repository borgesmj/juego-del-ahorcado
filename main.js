



document.querySelector('#app').innerHTML = `
        <header class='header'>
            <h1>Juego del ahorcado</h1>
            <span>Adivina la palabra oculta</span>
        </header>
        <section id="counterContainer">
            <ul class="counters">
                <li class="counter">
                    <div class="counterTitle">Partidas Ganadas</div>
                    <div class="counterNumber">4</div>
                </li>
                <li class="counter">
                    <div class="counterTitle">Partidas Perdidas</div>
                    <div class="counterNumber">2</div>
                </li>
                <li class="counter">
                    <div class="counterTitle">Letras Usadas</div>
                    <div class="counterLetters">
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                        <div>D</div>
                        <div>F</div>
                        <div>G</div>

                    </div>
                </li>
            </ul>
        </section>
        <section id="wordContainer">
            <div>S</div>
            <div>A</div>
            <div>M</div>
            <div>A</div>
            <div>N</div>
            <div>t</div>
            <div>H</div>
            <div>A</div>
        </section>
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

console.log('testing keyboard button, mostrar hide')

document.querySelector('#dibujo').addEventListener('click', () =>{
    document.querySelector('header').classList.remove('hide')
    console.log('app')
})

document.querySelector('#keyboardBtn').addEventListener('click', () => {
    document.querySelector('header').classList.add('hide')
})