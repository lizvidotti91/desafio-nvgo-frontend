const head = window.document.querySelector('head');

// Estes estilos serão inseridos na tag <head></head>, do documento HTML
// Estilos comuns a todos o documento
const style = `
    <style>
        *{
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        section{
            min-height: 100vh;
            width: 100vw;
        }
    </style>
`;

head.insertAdjacentHTML('beforeend', style);