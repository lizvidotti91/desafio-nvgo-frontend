/* 
    Este é o arquivo principal. Ele recebe cada componente de seção do site, contidos na pasta components
    Todo o HTML e CSS do site são gerados dinamicamente com o JavaScript
    Os elementos foram criados com componentes, utilizando a Tagged Template
    Os componentes são separados em:
        - Tagged Template: contém o Tagged Object , que é uma string com as estilizações CSS do componente, e os valores que devem ser inseridos nas tags HTML
        - Função que retorna um elemento ou elementos HTML
            <h1> ${primeiro valor da lista} </h1>
            <p> ${segundo valor da lista} </p>
*/
const app = window.document.querySelector('#app');

const site = Site`
    ${sectionHome}
    ${biographySection}
    ${sectionServices}
    ${sectionPricing}
    ${sectionContact}
`;

function Site(css, ...value) {
    return `
        ${value[0]}
        ${value[1]}
        ${value[2]}
        ${value[3]}
        ${value[4]}
    `;
}

app.insertAdjacentHTML('beforeend', site);