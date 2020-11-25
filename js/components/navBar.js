/* 
    Esta função é responsável por receber um estilo de CSS de cada componente e inseri-lo na tag <style>, no HTML
*/
function CreateStyle(css) {
    const head = window.document.querySelector('head');
    const style = `
        <style>
            ${css}
        </style>
    `;
    head.insertAdjacentHTML('beforeend', style);
}

/*
    Cada constante é um componente a ser inserido no HTML
    Para criar cada componente HTML dinamicamente, pelo JavaScript, utilizo o Tagged Template, que é uma chamada de função onde os argumentos são derivados de uma Template Literal, ou Template String. Ela contém um Template Object (onde coloco as estilizações CSS) e os valores embutidos em uma Template Literals (${}).
    Os valores ${} são passados a função e chamados como um vetor [posição 0, posição 1, posição 2...]
*/
// Criação dos itens de navegação na seção Home
const menu = Menu`
    .menu{
        align-items: center;
        color: #FFFFFF;
        display: flex;
        font-size: 3vh;
        justify-content: space-around;
        text-transform: upperCase;
        width: 50%;
    }
    .anchor-nav-bar{
        color: #FFFFFF;
        text-decoration: none;
        transition: 0.3s;
    }

    .anchor-nav-bar:hover{
        text-decoration: underline;
    }
    ${'Home'}
    ${'Biography'}
    ${'Services'}
    ${'Prices'}
    ${'Contact'}
`
/*
    Além do Tagget Template, a função é responsável por retornar um elemento HTML. Utilizo a função CreateStyle(), para pegar as estilizações do componente e inseri-las na tag <style> do documento HTML, e os valores ${} são inseridos no HTML.
    ${value[0]}  = "Home"
    ${value[1]} = "Biography"
*/
function Menu(css, ...value) {
    CreateStyle(css);
    return `
        <ul class="menu">
            <li><a class="anchor-nav-bar" href="#home"> ${value[0]} </a></li>
            <li><a class="anchor-nav-bar" href="#biography"> ${value[1]} </a></li>
            <li><a class="anchor-nav-bar" href="#services"> ${value[2]} </a></li>
            <li><a class="anchor-nav-bar" href="#prices"> ${value[3]} </a></li>
            <li><a class="anchor-nav-bar" href="#contact"> ${value[4]} </a></li>
        </ul>
    `;
}

// inserindo a barra dos itens de navegação + texto
// Estes componentes serão usados no arquivo home.js
const navBar = NavBar`
    .nav-bar{
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .logo{
        color: #42495B;
        font-size: 8vh;
    }
    ${'logo.'}
    ${menu}
`

function NavBar(css, ...value) {
    CreateStyle(css);
    return `
        <nav class="nav-bar">
            <div class="logo">${value[0]}</div>
            ${value[1]}
        </nav>
    `;
}