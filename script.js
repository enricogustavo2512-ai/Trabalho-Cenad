// Lista de perguntas do CineQuiz.
// Em cada pergunta, a propriedade correta indica a posição da resposta certa.
const perguntas = [
    // CARROS
    { pergunta: "Qual marca fabrica o Mustang?", opcoes: ["Chevrolet", "Ford", "Fiat", "Volkswagen"], correta: 1 },
    { pergunta: "Qual é o nome do carro vermelho de Carros, da Pixar?", opcoes: ["Mate", "Doc Hudson", "Relâmpago McQueen", "Jackson Storm"], correta: 2 },
    { pergunta: "Qual marca tem um cavalo em seu símbolo?", opcoes: ["Ferrari", "Toyota", "Honda", "Renault"], correta: 0 },
    { pergunta: "Qual destes é um modelo da Chevrolet?", opcoes: ["Civic", "Corolla", "Onix", "Gol"], correta: 2 },
    { pergunta: "Qual país é a origem da marca Ferrari?", opcoes: ["Alemanha", "Itália", "Japão", "Estados Unidos"], correta: 1 },

    // MARVEL
    { pergunta: "Qual é o nome verdadeiro do Homem de Ferro?", opcoes: ["Steve Rogers", "Tony Stark", "Bruce Banner", "Peter Parker"], correta: 1 },
    { pergunta: "Qual herói é conhecido como o Amigão da Vizinhança?", opcoes: ["Thor", "Hulk", "Homem-Aranha", "Pantera Negra"], correta: 2 },
    { pergunta: "Qual é o martelo do Thor?", opcoes: ["Escudo", "Mjolnir", "Stormbreaker", "Tridente"], correta: 1 },
    { pergunta: "Qual personagem se transforma no Hulk?", opcoes: ["Bruce Banner", "Clint Barton", "Tony Stark", "Scott Lang"], correta: 0 },
    { pergunta: "Qual é o nome do rei de Wakanda?", opcoes: ["Loki", "T'Challa", "Nick Fury", "Peter Quill"], correta: 1 },

    // DC
    { pergunta: "Qual é a cidade protegida pelo Batman?", opcoes: ["Metrópolis", "Central City", "Gotham", "Star City"], correta: 2 },
    { pergunta: "Qual é a identidade secreta do Superman?", opcoes: ["Clark Kent", "Bruce Wayne", "Barry Allen", "Arthur Curry"], correta: 0 },
    { pergunta: "Qual heroína usa o Laço da Verdade?", opcoes: ["Batgirl", "Mulher-Maravilha", "Supergirl", "Zatanna"], correta: 1 },
    { pergunta: "Quem é conhecido como o Velocista Escarlate?", opcoes: ["Aquaman", "Cyborg", "Flash", "Lanterna Verde"], correta: 2 },
    { pergunta: "Qual é o nome do mordomo de Bruce Wayne?", opcoes: ["Alfred", "Joker", "Gordon", "Harvey"], correta: 0 },

    // DESENHOS ANTIGOS
    { pergunta: "Qual desenho tem os personagens Fred, Wilma, Barney e Betty?", opcoes: ["Os Jetsons", "Os Flintstones", "Tom e Jerry", "Scooby-Doo"], correta: 1 },
    { pergunta: "Qual é o nome do cachorro que acompanha Scooby-Doo?", opcoes: ["Salsicha", "Scooby-Doo", "Pluto", "Coragem"], correta: 1 },
    { pergunta: "Quem vive tentando pegar o Papa-Léguas?", opcoes: ["Piu-Piu", "Patolino", "Coiote", "Pernalonga"], correta: 2 },
    { pergunta: "Qual dupla é formada por um gato e um rato?", opcoes: ["Tom e Jerry", "Manda-Chuva e Bacana", "Popeye e Brutus", "Tico e Teco"], correta: 0 },
    { pergunta: "Qual personagem come espinafre para ficar forte?", opcoes: ["Mickey", "Popeye", "Pica-Pau", "Salsicha"], correta: 1 },
    { pergunta: "Qual desenho tem um menino chamado Dexter e um laboratório secreto?", opcoes: ["O Laboratório de Dexter", "Johnny Bravo", "Du, Dudu e Edu", "Coragem"], correta: 0 },
    { pergunta: "Qual é o nome do esquilo de 'Bob Esponja'?", opcoes: ["Karen", "Pérola", "Sandy", "Lula"], correta: 2 },
    { pergunta: "Qual personagem é famoso por dizer que não tem medo de nada, mas vive assustado?", opcoes: ["Coragem, o Cão Covarde", "Pernalonga", "Pateta", "Muttley"], correta: 0 },
    { pergunta: "Qual desenho acompanha uma família que vive no futuro?", opcoes: ["Os Flintstones", "Os Jetsons", "A Família Addams", "Os Simpsons"], correta: 1 },
    { pergunta: "Qual personagem é um pica-pau de topete vermelho?", opcoes: ["Pica-Pau", "Piu-Piu", "Pernalonga", "Patolino"], correta: 0 }
];

// Guarda a pergunta atual e a pontuação do jogador.
let indiceAtual = 0;
let pontos = 0;

// Busca os elementos da página que serão atualizados.
const contador = document.getElementById("contador");
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const mensagem = document.getElementById("mensagem");
const proximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

// Mostra uma pergunta na tela.
function mostrarPergunta() {
    const atual = perguntas[indiceAtual];

    contador.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    pergunta.textContent = atual.pergunta;
    opcoes.innerHTML = "";
    mensagem.textContent = "";
    proximo.disabled = true;

    // Cria um botão para cada alternativa.
    atual.opcoes.forEach(function(opcao, indice) {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.className = "opcao";

        botao.addEventListener("click", function() {
            verificarResposta(indice);
        });

        opcoes.appendChild(botao);
    });
}

// Confere se a alternativa escolhida está correta.
function verificarResposta(escolha) {
    const atual = perguntas[indiceAtual];
    const botoes = document.querySelectorAll(".opcao");

    // Impede que o jogador escolha mais de uma resposta.
    botoes.forEach(function(botao) {
        botao.disabled = true;
    });

    if (escolha === atual.correta) {
        mensagem.textContent = "Muito bem! Você acertou!";
        pontos++;
    } else {
        mensagem.textContent = "Não foi dessa vez! A resposta certa é: " + atual.opcoes[atual.correta];
    }

    proximo.disabled = false;
}

// Vai para a próxima pergunta ou mostra o resultado.
proximo.addEventListener("click", function() {
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
});

// Mostra a pontuação final.
function mostrarResultado() {
    contador.textContent = "Quiz finalizado!";
    pergunta.textContent = "Parabéns por jogar!";
    opcoes.innerHTML = "";
    mensagem.textContent = "";
    proximo.hidden = true;
    resultado.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    reiniciar.hidden = false;
}

// Reinicia o jogo.
reiniciar.addEventListener("click", function() {
    indiceAtual = 0;
    pontos = 0;
    proximo.hidden = false;
    reiniciar.hidden = true;
    resultado.textContent = "";
    mostrarPergunta();
});

// Começa o quiz assim que a página abre.
mostrarPergunta();
