// Banco dos Projetos
const meusProjetos = [
    {
        titulo: "Luminous Gym",
        subtitulo: "Arquitetura Back-end",
        tags: ["BACK-END", "POO", "MVC"],
        img: "images/tela_luminous.png",
        desc: "Desenvolvimento do site para uma academia exclusiva para mulheres. Trabalhei no back-end com criação de classes, arquitetura MVC e correção de erros no Banco de Dados.",
        github: "https://github.com/RenatoSZA/Alvaros-Project"
    },
    {
        titulo: "Projeto Decifra",
        subtitulo: "Arquitetura Back-end",
        tags: ["BACK-END", "IA", "CHATBOT"],
        img: "images/tela1decifra.png",
        desc: "Atuei no desenvolvimento da arquitetura back-end e no desenvolvimento dos jogos. O foco foi principalmente na criação de um chatbot com inteligência atificial para o auxílio dos alunos em seu estudo.",
        github: "https://github.com/PedroL-Melo/DECIFRA"
    },
    {
        titulo: "Doom via XSS",
        subtitulo: "Segurança Web & PoC",
        tags: ["SEGURANÇA WEB", "XSS", "JAVASCRIPT", "PENTEST"],
        img: "images/xssDoom.png",
        desc: "Uma Prova de Conceito (PoC) demonstrando a exploração de uma vulnerabilidade de Cross-Site Scripting (XSS). O payload injetado foi utilizado para carregar e executar o clássico jogo Doom direto no navegador, provando o impacto da falha de forma criativa.",
        github: "https://github.com/PedroL-Melo/js-doom-injector"
    },
];

let indiceAtual = 0;
const track = document.getElementById('trackProjetos');

function renderizarCarrossel() {
    track.innerHTML = ''; 
    
    meusProjetos.forEach((projeto, index) => {
        const card = document.createElement('div');
        card.classList.add('card-projeto');
        
        if (index === indiceAtual) {
            card.classList.add('centro');
            card.onclick = () => abrirModal(projeto.titulo, projeto.desc, projeto.img, projeto.github);
        } else if (index === (indiceAtual - 1 + meusProjetos.length) % meusProjetos.length) {
            card.classList.add('esquerda');
            card.onclick = () => mudarProjeto(-1); 
        } else if (index === (indiceAtual + 1) % meusProjetos.length) {
            card.classList.add('direita');
            card.onclick = () => mudarProjeto(1); 
        } else {
            card.classList.add('oculto');
        }

        const img = document.createElement('img');
        img.src = projeto.img;
        img.alt = projeto.titulo;
        card.appendChild(img);
        track.appendChild(card);
    });

    atualizarInformacoes();
}

function atualizarInformacoes() {
    const projetoAtivo = meusProjetos[indiceAtual];
    
    document.getElementById('infoTitulo').innerText = projetoAtivo.titulo;
    document.getElementById('infoSubtitulo').innerText = projetoAtivo.subtitulo;
    
    const containerTags = document.getElementById('infoTags');
    containerTags.innerHTML = '';
    projetoAtivo.tags.forEach(tagTexto => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tagTexto;
        containerTags.appendChild(span);
    });
}

function mudarProjeto(direcao) {
    indiceAtual = (indiceAtual + direcao + meusProjetos.length) % meusProjetos.length;
    renderizarCarrossel();
}

// Funções do Modal
const modal = document.getElementById('projetoModal');
function abrirModal(titulo, descricao, imagem, linkGithub) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = descricao;
    document.getElementById('modalImagem').src = imagem;
    document.getElementById('modalGithub').href = linkGithub;
    modal.style.display = 'block';
}
function fecharModal() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) { modal.style.display = 'none'; }
}

// Inicia tudo
renderizarCarrossel();

// Seleciona o menu lá do topo
const menuSuperior = document.querySelector('header');

// Adicionado o parâmetro 'mostrarParticipacao' com valor padrão true
function abrirModal(titulo, descricao, imagem, link, textoBotao = "Acessar GitHub", mostrarParticipacao = true) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = descricao;
    
    // Controla a visibilidade do título "Minha Participação"
    const labelParticipacao = document.getElementById('modalLabelParticipacao');
    labelParticipacao.style.display = mostrarParticipacao ? "block" : "none";

    // Garante que a imagem suma se não houver (como no caso dos artigos)
    const imgElement = document.getElementById('modalImagem');
    if (imagem) {
        imgElement.src = imagem;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }
    
    // Atualiza o link do botão e o texto
    const btnLink = document.getElementById('modalGithub');
    btnLink.href = link; 
    btnLink.innerText = textoBotao;
    
    // Exibe o modal e esconde o menu para não sobrepor
    const modal = document.getElementById('projetoModal');
    modal.style.display = 'block';
    document.querySelector('header').style.display = 'none';
}

function fecharModal() {
    // Esconde o modal
    modal.style.display = 'none';

    // MOSTRA O MENU NOVAMENTE
    menuSuperior.style.display = 'flex';
}

// Ajuste extra: caso a pessoa clique fora da caixa, o menu também deve voltar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        menuSuperior.style.display = 'flex'; // Garante que o menu volte aqui também
    }
}

const minhasPublicacoes = [
    {
        titulo: "MARIOT: Automação na Amazônia Ocidental",
        subtitulo: "XVI Workshop de Computação Aplicada à Amazônia (WCAMA)",
        ano: "2025",
        tags: ["IoT", "EFICIÊNCIA ENERGÉTICA", "ARTIGO"],
        img: "images/capa_artigo.png",
        desc: "O MARIOT é um projeto de pesquisa focado em Internet das Coisas (IoT) e eficiência energética, desenvolvido para monitorar e otimizar o consumo de energia em ambientes residenciais ou acadêmicos. Atuei no desenvolvimento da arquitetura do sistema e na integração de sensores para coleta de dados em tempo real. O trabalho foi publicado como artigo científico em um workshop especializado em 2025, validando a eficácia da solução proposta.",
        github: "https://sol.sbc.org.br/index.php/wcama/article/view/36087"
    },
];

function renderizarPublicacoes() {
    const container = document.getElementById("lista-publicacoes");
    container.innerHTML = ''; 

    minhasPublicacoes.forEach((pub) => {
        const div = document.createElement('div');
        div.classList.add('card-publicacao');
        div.innerHTML = `
            <h3>${pub.titulo}</h3>
            <p>${pub.subtitulo} • ${pub.ano}</p>
        `;

        // Ordem dos parâmetros: titulo, desc, imagem, link, textoBotao, mostrarParticipacao
        div.onclick = () => abrirModal(
            pub.titulo, 
            pub.desc, 
            "", 
            pub.github, 
            "Acessar Artigo", 
            false
        );

        container.appendChild(div);
    });
}


renderizarPublicacoes();