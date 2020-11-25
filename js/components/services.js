// Definição das constantes a serem inseridas nos componentes
// Essas constantes serão passadas como valores nas Tagged Template do componente dos cars da seção Services
// ${imgManagement} = "../../img/001-process.svg"
const imgManagement = "../../img/001-process.svg";
const management = 'Social Media Management';
const contentManagement = "Perfect for growing your brand'social community and engage with the right audience. We manage everything from curation of content to management of";

const imgCampaign = "../../img/002-social-media.svg";
const campaign = 'Socials Growth Campaign';
const contentCampaign = "Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving you've been looking for.";

const imgMedia = "../../img/003-responsive.svg";
const media = 'Branding & Media';
const contentMedia = "Done right, branding offers a company an edge over the competition. So what exactly is branding, and why is it important for companies to integrate a well-rounded branding and media strategy?";

const imgMarketing = "../../img/004-social-media-1.svg";
const marketing = "Influencer Marketing";
const contentMarketing = "We will pair your business with influencers that speak to your audience. Influencer Marketing is the most effective way to reach a loyal audience";

const imgAdvertising = "../../img/007-analysis.svg";
const advertising = "Social Media Paid Advertising";
const contentAdvertising = "Our ad compaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business. Our re-targeting campaigns will be sure to get your visitors coming back to your site.";

const imgMarketingServices = "../../img/008-computer.svg";
const marketingServices = "Content Marketing Services";
const contentMarketingServices = "We can create and provide your company with the best content marketing for your socials to improve online presence. Creating valuable and quality content helps boost conversions and improve customer retention";

// Criação dos botões a serem inseridos no cards da seção Services
const btnServices = BtnServices`
    .btn-services{
        bottom: 4vh;
        margin-left: 50%;
        position: absolute;
        right: 4vh;
    }
    .btn-12{
        font-size: 2vh;
        width: 10vw;
    }
    ${"See More"}
`;

function BtnServices(css, ...value) {
    CreateStyle(css);
    return `
        <button class="btn btn-services btn-12">${value}</button>
    `;
}

// As constantes criadas no início deste arquivo são passadas como valores nesta Tagged Template
// Componente dos cards a serem inseridos na seção Services
const divCards = DivCards`
    .container-cards{
        display: flex;
        margin: 0 auto;
        width: 90%;
    }
    .card-column{
        flex: 1;
    }
    article{
        background: #FFFFFF;
        border-radius: 36px;
        box-shadow: 0px 10px 20px #7E76F91A;
        display: flex;
        flex-direction: column;
        height: 410px;
        margin: 3vw;
        padding: 4vh;
        position: relative;
    }
    .icon-services{
        height: 8vh;
        margin-bottom: 2vh;
    }
    .title-20{
        color: #42495B;
        font-size: 2vh;
    }
    .p-15{
        color: #42495B;
        font-size: 2vh;
        margin-top: 1vh;
    }
    ${imgManagement}
    ${management}
    ${contentManagement}
    ${imgCampaign}
    ${campaign}
    ${contentCampaign}
    ${imgMedia}
    ${media}
    ${contentMedia}
    ${imgMarketing}
    ${marketing}
    ${contentMarketing}
    ${imgAdvertising}
    ${advertising}
    ${contentAdvertising}
    ${imgMarketingServices}
    ${marketingServices}
    ${contentMarketingServices}
    ${btnServices}
`;

function DivCards(css, ...value) {
    CreateStyle(css);
    return `
        <div class="container-cards">
            <div class="card-column">
                <article>
                    <img class="icon-services" src="${value[0]}"/>
                    <h4 class="title-20">${value[1]}</h4>
                    <p class="p-15">${value[2]}</p>
                    ${value[18]}
                </article>
                <article>
                    <img class="icon-services" src="${value[9]}"/>
                    <h4 class="title-20">${value[10]}</h4>
                    <p class="p-15">${value[11]}</p>
                    ${value[18]}
                </article>
            </div>
            <div class="card-column">
                <article>
                    <img class="icon-services" src="${value[3]}"/>
                    <h4 class="title-20">${value[4]}</h4>
                    <p class="p-15">${value[5]}</p>
                    ${value[18]}
                </article>
                <article>
                    <img class="icon-services" src="${value[12]}"/>
                    <h4 class="title-20">${value[13]}</h4>
                    <p class="p-15">${value[14]}</p>
                    ${value[18]}
                </article>
            </div>
            <div class="card-column">
                <article>
                    <img class="icon-services" src="${value[6]}"/>
                    <h4 class="title-20">${value[7]}</h4>
                    <p class="p-15">${value[8]}</p>
                    ${value[18]}
                </article>
                <article>
                    <img class="icon-services" src="${value[15]}"/>
                    <h4 class="title-20">${value[16]}</h4>
                    <p class="p-15">${value[17]}</p>
                    ${value[18]}
                </article>
            </div>
        </div>
    `;
}

// Os componentes criados acima são inseridos neste componente.
// Este componente é usado no arquivo index.js
const sectionServices = SectionServices`
    #services{
        padding: 5vh;
    }
    ${'Our Services'}
    ${'What We Offer'}
`;

function SectionServices(css, ...value) {
    CreateStyle(css);
    return `
        <section id="services">
            <h2 class="title-purple">${value[0]}</h2>
            <h3 class="title-60">${value[1]}</h3>
            ${divCards}
        </section>
    `;
}