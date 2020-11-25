// Componente dos ícones das redes sociais da seção Home
const icons = Icons`
    .ul-icons{
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 30vh;
        justify-content: space-between;
        margin-right: 5vw;
        width: 5vw;
    }
    .icon{
        width: 1.5vw;
        transition: 0.3s;
    }
    .icon:hover{
        opacity: 0.6;
    }
    .icon-rectangle{
        background: #7E76F9 0% 0% no-repeat padding-box;
        height: 2vw;
        width: 0.3vw;
    }
    ${'../../img/003-facebook.svg'}
    ${'../../img/002-google-plus.svg'}
    ${'../../img/001-twitter-logo-silhouette.svg'}
    ${'../../img/instagram.svg'}
`;

function Icons(css, ...value) {
    CreateStyle(css);
    return `
        <ul class="ul-icons">
            <li> <a href="https://pt-br.facebook.com/" target="blank"> <img class="icon" src="${value[0]}"/> </a> </li>
            <li> <a href="https://www.google.com.br/" target="blank"> <img class="icon" src="${value[1]}"/> </a> </li>
            <li> <a href="https://twitter.com/login?lang=pt" target="blank"> <img class="icon" src="${value[2]}"/> </a> </li>
            <li> <a href="https://www.instagram.com/?hl=pt-br" target="blank"> <img class="icon" src="${value[3]}"/> </a> </li>
            <li> <a href="#"> <div class="icon icon-rectangle"></div> </a> </li>
        </ul >
        `;
}

// Componente do botão a ser inserido na seção Home
const buttonHome = ButtonHome`
    .btn{
        background-color: #7E76F9;
        border: none;
        border-radius: 3vh;
        box-shadow: 0px 3px 6px #7E76F947;
        color: #FFFFFF;
        margin-top: 3vh;
        padding: 1vh 4vh;
        text-transform: upperCase;
        transition: 0.3s;
    }
    .btn:hover{
        opacity: 0.6;
    }
    .btn-25{
        font-size: 2vh;
    }
    ${"Get a free audit"}
`;

function ButtonHome(css, ...value) {
    CreateStyle(css);
    return `
        <button class="btn btn-25">${value[0]}</button>
    `;
}

// Imagem da seção Home
const img = Img`
    .img-home{
        height: 50vh;
    }
    ${'../../img/undraw_social_ideas_e8rj.svg'}
`;

function Img(css, ...value) {
    CreateStyle(css);
    return `
        <div class="img-home">
            <img src="${value[0]}"/>
        </div>
    `;
}

// Conteúdo de Texto da seção Home
const contentHome = ContentHome`
    .content-home{
        margin-right: 8vw;
        text-transform: upperCase;
        width: 40vw;
    }
    .title-60{
        color: #42495B;
        font-size: 8vh;
    }
    .p-25{
        color: #42495B;
        font-size: 3vh;
        margin-top: 3vh;
    }
    ${"Social Media for Business"}
    ${"Performance based social media agency we are lorem media"}
    ${buttonHome}
`;

function ContentHome(css, ...value) {
    CreateStyle(css);
    return `
        <div class="content-home">
            <h1 class="title-60"> ${value[0]} </h1>
            <p class="p-25"> ${value[1]} </p>
            ${value[2]}
        </div>
    `;
}

// Elemento que recebe os ícones da redes sociais + conteúdo de texto + imagem a ser inserido na seção Home
const socialMedia = SocialMedia`
    .content-social-media{
        align-items: center;
        display: flex;
        margin: 10vh auto;
        width: 90%;
    }
    ${icons}
    ${contentHome}
    ${img}
`;

function SocialMedia(css, ...value) {
    CreateStyle(css);
    return `
        <div class="content-social-media">
            ${value[0]}
            ${value[1]}
            ${value[2]}
        </div>
    `;
}