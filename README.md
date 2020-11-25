# Desafio Front-End

## Objetivo

Desafio para vaga de Desenvolvedor(a) Front-End, que envolve a construção de website a partir de protótipo definido na plataforma Adobe XD, fornecido pela empresa.

## Especificações

* Todo o conteúdo é renderizado em uma única página HTML; 
* Foram criados componentes dinâmicos com JavaScript puro; 

## Tecnologias usadas

*   JavaScript; 
*   HTML; 

## Explicando a criação dos componentes

Para a definição de um componente, utilizei o Tagged Template, introduzido pelo ES6.

Primeiro, defino uma constante, que recebe estilizações CSS e valores, assim:

``` javascript
const menu = Menu `
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
```

Todo o conteúdo que está fora dos `${}` é a estilização CSS do meu componente `menu` . Aqui, ao invés de simplesmente definir os estilos CSS, separei eles em diferentes classes `.menu ; .anchor-nav-bar` . Quero construir um menu de navegação, onde os títulos são as strings dentro dos `${}` .

Agora, crio uma função para o meu componente, que recebe esses valores e me retorna uma lista não-ordenada.

``` javascript
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
```

Repare que coloco apenas dois parâmetros para a minha função: o css (que recebe tudo o que está fora dos `${}` ) e os values. Utilizei o `...value` para que possa receber uma lista com um número de elementos não definido. Todos os `${}` são passados como vetores, e a ordem dos elementos é a mesma que usei na ordem apresentada na constante.

Assim:

* ${value[0]} = 'Home'
* ${value[1]} = 'Biography'
* ${value[2]} = 'Services'
* ${value[3]} = 'Prices'
* ${value[4]} = 'Contact'

Ao invés de usar as estilizações CSS in-line, nas tags do HTML, eu "chamo" uma função que pega a String e insere na tag `<head></head>` do meu arquivo HTML. A String é passada como parâmetro na função, e utilizo o Template Literals para colocar o valor ${css} dentro da tag `<style></style>` , e armazeno numa constante. A tag `head` é selecionada com a função `querySelector()` , e insiro o valor da constante style no head utilizado a função `insertAdjacentHTML()` .

``` javascript
function CreateStyle(css) {
    const head = window.document.querySelector('head');
    const style = `
        <style>
            ${css}
        </style>
    `;
    head.insertAdjacentHTML('beforeend', style);
}
```

## Autora

| Foto                                       | Nome        | GitHub                                         | Likedin                                                 | E-mail                |
| ------------------------------------------ | ----------- | ---------------------------------------------- | ------------------------------------------------------- | --------------------- |
| <img src="./img/perfil.png" width="100px"> | Liz Vidotti | [Liz Vidotti](https://github.com/lizvidotti91) | [Linkedin](https://www.linkedin.com/in/elisetevidotti/) | liz.vidotti@gmail.com |
