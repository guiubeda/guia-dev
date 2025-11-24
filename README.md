# 📚 Guia Dev: Dicionário de Tecnologia em Tecniquês

Este projeto é um **dicionário interativo** e responsivo focado em traduzir termos comuns do universo de desenvolvimento e tecnologia ("tecniquês") para a linguagem simples. Foi desenvolvido como projeto final da **10ª Edição da Imersão Dev com Alura e Google Gemini**.

---

## ✨ Funcionalidades

* **Busca Prioritária (Exata):** A busca na caixa de texto prioriza o casamento **exato** com o título do verbete (ex: digitar "CSS" exibe apenas a definição de CSS).
* **Filtro por Tag:** O clique em qualquer tag (ex: `#frontend`) realiza uma filtragem **exata** por termo, mostrando apenas verbetes que contêm aquela categoria.
* **Design Profissional:** Layout limpo e responsivo em **Dark Mode**, com cores definidas via variáveis CSS.
* **Navegação Rápida:** O clique no título "Guia Dev" reseta a busca para a página inicial.
* **Base de Dados:** Utiliza um arquivo JSON com verbetes organizados alfabeticamente.

---

## 🛠️ Tecnologias Utilizadas

O projeto é uma **Single Page Application (SPA)** desenvolvida puramente com as tecnologias base da web, focando na performance e usabilidade.

* **HTML5:** Estrutura semântica e inclusão de **Favicon** (SVG Base64) e ícones (Material Symbols).
* **CSS3:** Estilização limpa, responsividade e **variáveis CSS** para manutenção do tema.
* **JavaScript (ES6+):** Lógica de busca, filtragem por tags em **Array** e manipulação eficiente do DOM.
* **JSON:** Base de dados organizada em formato de Array, com verbetes em ordem alfabética.

---

## 🚀 Como Executar Localmente

O projeto não requer servidor de *back-end* ou instalação de dependências.

1.  **Clone o repositório:**
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO NO GITHUB]
    ```

2.  **Acesse a pasta:**
    ```bash
    cd [NOME DA SUA PASSA]
    ```

3.  **Abra o Navegador:**
    Abra o arquivo `gui-index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).

---

## 📂 Estrutura do Projeto

| Arquivo | Descrição |
| :--- | :--- |
| `gui-index.html` | Estrutura da página, Favicon (SVG), e links para CSS/JS. |
| `gui-style.css` | Estilização completa do layout (Dark Mode) e regras de responsividade. |
| `gui-script.js` | Lógica de busca, filtragem exata por tags e renderização dinâmica dos cards. |
| `gui-data.json` | Base de dados principal (JSON) com verbetes e tags em ordem alfabética. |

---

## 🤝 Contato

Desenvolvido por **Guilherme Ubeda** durante a **Imersão Dev com Google Gemini**.

* **GitHub:** [https://github.com/guiubeda](https://github.com/guiubeda)
* **LinkedIn:** [https://www.linkedin.com/in/guiubeda/](https://www.linkedin.com/in/guiubeda/)
* **E-mail:** [guiubeda2@gmail.com](mailto:guiubeda2@gmail.com)

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.
