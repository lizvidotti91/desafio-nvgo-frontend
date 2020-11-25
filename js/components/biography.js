// Inserindo imagem da seção Biography
const containerImage = ContainerImage`
    .img-biography{
        height: 50vh;
    }
    ${'./img/biography.svg'}
`;

function ContainerImage(css, ...value) {
    CreateStyle(css);
    return `
        <figure> <img class="img-biography" src="${value}"/> </figure>
    `;
}

// Inserindo conteúdo de texto da seção Biography
const contentBiography = ContentBiography`
    .content-biography{
        margin-left: 3vw;
        width: 40vw;
    }
    .title-purple{
        color: #7E76F9;
        font-size: 3vh;
        font-weight: 500;
    }
    .p-20{
        color: #42495B;
        font-size: 2vh;
        margin-top: 3vh;
    }
    ${'Biography'}
    ${'Who We Are'}
    ${'Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations. Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.'}
    ${"It's 2019: time to sink or swin."}
    ${"See More"}
`;

function ContentBiography(css, ...value) {
    CreateStyle(css);
    return `
        <div class="content-biography">
            <h2 class="title-purple">${value[0]}</h2>
            <h3 class="title-60">${value[1]}</h3>
            <p class="p-20">${value[2]}</p>
            <p class="p-20">${value[3]}</p>
            <button class="btn btn-25">${value[4]}</button>
        </div>
    `;
}

// Inserindo os componentes criados na seção Biography
const biographySection = BiographySection`
    #biography{
        align-items: center;
        display: flex;
        justify-content: center;
    }
    ${containerImage}
`;

function BiographySection(css, ...value) {
    CreateStyle(css);
    return `
        <section id="biography">
            ${containerImage}
            ${contentBiography}
        </section>
    `;
}