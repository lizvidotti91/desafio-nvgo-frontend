// Primeira coluna do conteúdo do rodapé na seção Contact
// ícones das redes sociais
const divImgLogo = DivImgLogo`
    .container-logo{
        display: flex;
        justify-content: space-around;
        margin-top: 3vh;
        width: 10vw;
    }
    .icon-contact{
        height: 3vh;
    }
    .icon-contact:hover{
        opacity: 0.6;
    }
    ${"../../img/facebook-white.svg"}
    ${"../../img/google-plus-white.svg"}
    ${"../../img/twitter-white.svg"}
    ${"../../img/instagram-white.svg"}
`;

function DivImgLogo(css, ...value) {
    CreateStyle(css);
    return `
        <ul class="container-logo">
            <li><a href="https://pt-br.facebook.com/" target="blank"><img class="icon-contact" src="${value[0]}" /></a></li>
            <li><a href="https://www.google.com.br/" target="blank"><img class="icon-contact" src="${value[1]}" /></a></li>
            <li><a href="https://twitter.com/login?lang=pt" target="blank"><img class="icon-contact" src="${value[2]}" /></a></li>
            <li><a href="https://www.instagram.com/?hl=pt-br" target="blank"><img class="icon-contact" src="${value[3]}" /></a></li>
        </ul>
    `;
}

// Primeira coluna do conteúdo do rodapé na seção Contact
// aqui são inseridos os ícones das redes sociais + texto da primeira coluna
const logoContact = LogoContact`
    .txt-white{
        color: #FFFFFF;
        font-weight: 300;
    }
    ${'logo.'}
    ${"Stay in touch"}
    ${divImgLogo}
`;

function LogoContact(css, ...value) {
    CreateStyle(css);
    return `
        <div class="logo-contact">
            <h3 class="title-60 txt-white">${value[0]}</h3>
            <p class="title-20 txt-white">${value[1]}</p>
            ${value[2]}
        </div>
    `;
}

// Segunda coluna do conteúdo do rodapé na seção Contact
const quickLinks = QuickLinks`
    .container-contact{
        display: block;
        line-height: 4vh;
    }
    ${"Quick Links"}
    ${"About"}
    ${"Home"}
    ${"Pricing"}
    ${"Location"}
    ${"Office"}
`;

function QuickLinks(css, ...value) {
    CreateStyle(css);
    return `
        <div class="container-contact">
            <h4 class="title-20 txt-white">${value[0]}</h4>
            <ul>
                <li><a class="anchor-nav-bar" href="#biography">${value[1]}</a><li>
                <li><a class="anchor-nav-bar" href="#home">${value[2]}</a><li>
                <li><a class="anchor-nav-bar" href="#prices">${value[3]}</a><li>
                <li><a class="anchor-nav-bar" href="#home">${value[4]}</a><li>
                <li><a class="anchor-nav-bar" href="#home">${value[5]}</a><li>
            </ul>
        </div>
    `;
}

// Terceira coluna do conteúdo do rodapé na seção Contact

const hours = Hours`
    ${"Hours"}
    ${"Monday: 9:00 - 18:00"}
    ${"Tuesday: 9:00 - 18:00"}
    ${"Wednesday: 9:00 - 18:00"}
    ${"Thrusday: 9:00 - 18:00"}
    ${"Friday: 9:00 - 18:00"}
`;

function Hours(css, ...value) {
    return `
        <div class="container-contact">
            <h4 class="title-20 txt-white">${value[0]}</h4>
            <ul>
                <li class="txt-white">${value[1]}</li>
                <li class="txt-white">${value[2]}</li>
                <li class="txt-white">${value[3]}</li>
                <li class="txt-white">${value[4]}</li>
                <li class="txt-white">${value[5]}</li>
            </ul>
        </div>
    `;
}

// Quarta coluna do conteúdo do rodapé na seção Contact
const contactNumbers = ContactNumbers`
    .information{
        color: #FFFFFF;
        text-align: left;
    }
    span{
        margin-right: 0.5vw;
    }
    ${"Contact"}
    ${"000-000-0000"}
    ${"info@email.com"}
    ${"New Your, US"}
    ${"../../img/envelope.svg"}
    ${"../../img/maps-and-flags.svg"}
    ${"../../img/old-handphone.svg"}
`;

function ContactNumbers(css, ...value) {
    CreateStyle(css);
    return `
        <div class="container-contact">
            <h4 class="title-20 txt-white">${value[0]}</h4>
            <ul class="information">
                <li><span><img src="${value[6]}"></span>${value[1]}</li>
                <li><span><img src="${value[4]}"></span>${value[2]}</li>
                <li><span><img src="${value[5]}"></span>${value[3]}</li>
            </ul>
        </div>
    `;
}

// Inserindo as colunas no rodapé da seção Contact
const footerContact = FooterContact`
    .footer-contact{
        align-items: center;
        bottom: 8vh;
        display: flex;
        justify-content: space-around;
        left: 50vw;
        position: absolute;
        transform: translateX(-50%);
        width: 70vw;
    }
    ${logoContact}
    ${quickLinks}
    ${hours}
    ${contactNumbers}
`;

function FooterContact(css, ...value) {
    CreateStyle(css);
    return `
        <div class="footer-contact">
            ${value[0]}
            ${value[1]}
            ${value[2]}
            ${value[3]}
        </div>
    `;
}

// Inserindo os componentes na seção Contact
const sectionContact = SectionContact`
    #contact{
        background: url('../../img/Group-1.svg') no-repeat;
        background-position: bottom;
        background-size: 100%;
        padding: 5vh;
        position: relative;
        text-align: center;
        width: 100vw;
    }
    ${form}
    ${footerContact}
`;

function SectionContact(css, ...value) {
    CreateStyle(css)
    return `
        <section id="contact">
            ${value[0]}
            ${value[1]}
        </section>
    `;
}