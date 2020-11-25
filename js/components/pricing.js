// Criação dos botões na seção Prices
const btnPricing = BtnPricing`
    ${"See Details"}
`;

function BtnPricing(css, ...value) {
    return `
        <button class="btn btn-12">${value}</button>
    `;
}

// Criação dos ícones de paginação na seção Prices
// Os círculos são as labels para os inputs do tipo radio. Quando um item é clicado, a estilização CSS desse item é alterada. Para isso, foi utilizado o seletor :checked
const circle = Circle`
    .check{
        border: 1px solid #7E76F9;
        border-radius: 50%;
        height: 2vh;
        position: relative;
        width: 2vh;
    }
    input[type=radio]{
        display: none;
    }

    input:checked + .check{
        background-color: #7E76F9;
        transform: scale(1.5);
        transition: 0.5s;
    }
`;

function Circle(css) {
    CreateStyle(css);
    return `
         <input type="radio" name="check" id="check1"/><label for="check1" class="check"></label>
         <input type="radio" name="check" id="check2"/><label for="check2" class="check"></label>
         <input type="radio" name="check" id="check3" checked/><label for="check3" class="check"></label>
    `;
}

// inserindo os círculos em uma div. É este componente que será inserido na seção Prices
const pagination = Pagination`
    .pagination{
        align-items: center;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        width: 10vw;
    }
    ${circle}
`;

function Pagination(css, ...value) {
    CreateStyle(css);
    return `
        <div class="pagination">
            ${value[0]}
        </div>
    `;
}

// Criação do componente dos cards de preços, a serem inseridos na seção Prices
const divCardPricing = DivCardPricing`
    .container-pricing{
        display: flex;
        margin: 0 auto;
        width: 90%;
    }
    .card-pricing{
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .title-30{
        font-size: 3vh;
    }
    ${"Gold Package"}
    ${"Platinum Package"}
    ${"Silver Package"}
    ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi nibh, sagitis ac faucibus sit"}
    ${"$ 140"}
    ${btnPricing}
`;

function DivCardPricing(css, ...value) {
    CreateStyle(css);
    return `
        <div class="container-pricing">
            <article class="card-pricing">
                <h4 class="title-60 title-30"> ${value[0]} </h4>
                <p class="p-15"> ${value[3]} </p>
                <p class="title-purple"> ${value[4]} </p>
                ${value[5]}
            </article>
            <article class="card-pricing">
                <h4 class="title-60 title-30"> ${value[1]} </h4>
                <p class="p-15"> ${value[3]} </p>
                <p class="title-purple"> ${value[4]} </p>
                ${value[5]}
            </article>
            <article class="card-pricing">
                <h4 class="title-60 title-30"> ${value[2]} </h4>
                <p class="p-15"> ${value[3]} </p>
                <p class="title-purple"> ${value[4]} </p>
                ${value[5]}
            </article>
        </div>
    `;
}

// Este componente recebe todos os componentes criados acima, e será inserido no arquivo index.js
const sectionPricing = SectionPricing`
    #prices{
        background: rgba(126, 118, 249, 0.15) 0% 0% no-repeat padding-box;
        padding: 5vh;
    }
    ${"Pricing"}
    ${"Our Pricing"}
    ${divCardPricing}
    ${pagination}
`;

function SectionPricing(css, ...value) {
    CreateStyle(css);
    return `
    <section id="prices">
        <h2 class="title-purple"> ${value[0]} </h2>
        <h3 class="title-60"> ${value[1]} </h3>
        ${value[2]}
        ${value[3]}
    </section>
    `;
}