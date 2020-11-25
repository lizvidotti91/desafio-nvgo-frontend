// Criação do botão do fim da seção home <<botão branco com ícone do mouse>>
const mouseButton = MouseButton`
    .btn-mouse{
        border: none;
        border-radius: 50%;
        box-shadow: 0px 10px 20px #7E76F929;
        height: 41px;
        margin-left: 50%;
        transition: 0.3s;
        width: 41px;
    }
    .btn-mouse:hover{
        opacity: 0.6;
    }
    ${'../../img/mouse.svg'}
`;

function MouseButton(css, ...value) {
    CreateStyle(css);
    return `
        <button class="btn-mouse"> <img src="${value}"/> </button>
    `;
}

// Inserindo os componentes dos arquivos navBar.js e socialMedia.js + botão branco na seção Home
const sectionHome = SectionHome`
    #home{
        background: url('../img/background1.svg') no-repeat;
        background-color: #FFFFFF;
        background-position: top right;
        background-size: 50%;
        padding: 0 5vh;
    }
    ${navBar}
    ${socialMedia}
    ${mouseButton}
`;

function SectionHome(css, ...value) {
    CreateStyle(css);
    return `
        <section id="home">
            ${value[0]}
            ${value[1]}
            ${value[2]}
        </section>
    `;
}