const cardContainer = document.querySelector(".card-container")
const campoBusca = document.getElementById("caixa-busca")
const logoLink = document.getElementById("logo-link")
let dados = []

async function carregarDadosIniciais() {
    try {
        let resposta = await fetch("data.json")
        dados = await resposta.json()
        
        preencherSugestoes(dados) 
        resetBusca() // Exibe a mensagem inicial após carregar os dados
    } catch (error) {
        console.error("Falha ao carregar dados:", error)
        cardContainer.innerHTML = "<p>Erro ao carregar o dicionário :(</p>"
    }
}

function resetBusca() {
    campoBusca.value = ""
    cardContainer.innerHTML = `<p class="mensagem-padrao">Digite um termo acima para começar a busca...</p>`    
}

function normalizarString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function iniciarBusca() {
    
    const termoBusca = normalizarString(campoBusca.value);

    if (termoBusca === "") {
        resetBusca();
        return
    }

    const dadosFiltrados = dados.filter(dado => {
        const tituloNormalizado = normalizarString(dado.titulo);
        return tituloNormalizado.includes(termoBusca);
    });
    
    renderizarCards(dadosFiltrados)
}

function preencherSugestoes(dados) {
    const datalist = document.getElementById('sugestoes-busca')
    datalist.innerHTML = '' 
    
    for (const dado of dados) {
        const option = document.createElement('option')
        option.value = dado.titulo
        datalist.appendChild(option)
    }
}


function renderizarCards(dados) {
    cardContainer.innerHTML = "" 

    if (dados.length === 0) {
        cardContainer.innerHTML = `<p class="mensagem-padrao">Ops! Esse termo ainda não está no nosso dicionário.</p>`
        return
    }

    for (let dado of dados) {
        const article = document.createElement("article");
        article.classList.add("card");

        // 1. Cria o cabeçalho do card
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.innerHTML = `
            <h2>${dado.titulo}</h2>
            <span class="gramatica">${dado.gramatica}</span>
        `;

        // 2. Cria o corpo do card
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML = `<p class="definicao">${dado.descricao}</p>`;

        // 3. Cria o container de tags
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags-container';
        dado.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag-item';
            tagElement.textContent = `#${tag}`;
            tagElement.addEventListener('click', () => filtrarPorTag(tag));
            tagsContainer.appendChild(tagElement);
        });

        // 4. Cria o rodapé do card
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        const link = dado.link || '#';
        const linkTitulo = dado.link_titulo || "Abrir referência completa";
        let linkTexto = "Ver referência completa ↗";
        if (link.includes("alura.com.br")) {
            linkTexto = "Ver referência (ALURA) 📚 ↗";
        }
        cardFooter.innerHTML = `<a href="${link}" target="_blank" rel="noopener noreferrer" title="${linkTitulo}">${linkTexto}</a>`;

        // 5. Adiciona todas as partes ao card
        article.appendChild(cardHeader);
        article.appendChild(cardBody);
        article.appendChild(tagsContainer);
        article.appendChild(cardFooter);

        cardContainer.appendChild(article);
    }
}

function filtrarPorTag(tag) {
    campoBusca.value = tag;
    iniciarBusca()
}

document.getElementById('botao-busca').addEventListener('click', iniciarBusca)
logoLink.addEventListener('click', resetBusca)

campoBusca.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        iniciarBusca()
    }
});

campoBusca.addEventListener('input', () => {
    if (campoBusca.value.trim() === '') {
        resetBusca();
    }
});

campoBusca.addEventListener('focus', resetBusca);

document.addEventListener('DOMContentLoaded', carregarDadosIniciais);
