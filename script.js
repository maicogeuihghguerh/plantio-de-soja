const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Insira o enunciado da Pergunta 1",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Insira o enunciado da Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Insira o enunciado da Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        textoResultado.textContent = `Você respondeu todas as perguntas! Sua história: ${historiaFinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();
