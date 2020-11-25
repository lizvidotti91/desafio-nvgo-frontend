// Criação do input a ser inserido no formulário, na seção Contact
const inputEmail = InputEmail`
    #input-email{
        background-color: #7E76F929;
        border: none;
        border-radius: 0.5vh;
        font-size: 18px;
        padding: 10px;
        width: 20vw;
    }
    ${"Drop Your Email"}
`;

function InputEmail(css, ...value) {
    CreateStyle(css);
    return `
        <input type="text" placeholder="${value[0]}" id="input-email">
    `;
}

// Criação do componente botão de envio do formulário, na seção Contact
const formSubmit = FormSubmit`
    .btn-submit{
        font-size: 18px;
        margin-left: 2vw;
        text-transform: none;
    }
    ${"Subscribe"}
`;

function FormSubmit(css, ...value) {
    CreateStyle(css);
    return `
        <button class="btn btn-submit">${value}</button>
    `;
}

// Inserindo os componentes input e botão + textos do formulá, na seção Contact
// Este componente será usado no arquivo contact.js
const form = Form`
    .title-normal{
        font-weight: 300;
    }
    ${"Newsletter"}
    ${"Do you want to get <strong>Special News?</strong>"}
    ${inputEmail}
    ${formSubmit}
`;

function Form(css, ...value) {
    CreateStyle(css);
    return `
        <h2 class="title-purple">${value[0]}</h2>
        <h3 class="title-60 title-normal">${value[1]}</h3>
        ${value[2]}
        ${value[3]}
    `;
}