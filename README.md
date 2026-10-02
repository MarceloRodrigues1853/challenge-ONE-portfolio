# Portfólio Pessoal — Marcelo Rodrigues

Projeto desenvolvido como parte do **Desafio Challenge Front-End** do programa **Oracle Next Education (ONE)** em parceria com a **Alura**, simulando a rotina e os padrões de entrega de um Desenvolvedor Web Front-End e Fullstack.

---

## 🚀 Demonstração

- **Publicação pendente:** a antiga URL `challenge-one-portfolio.vercel.app` exibe o portfólio de outra pessoa. Não usar como referência nem publicar nesse destino.
- **Repositório GitHub:** [github.com/MarceloRodrigues1853/challenge-ONE-portfolio](https://github.com/MarceloRodrigues1853/challenge-ONE-portfolio)

---

## ✨ Funcionalidades & Implementações

### Marco 1 — experiência dev game (local)

- Identidade com painel de perfil e paleta azul original; alternância claro/escuro respeitando a preferência salva ou do sistema.
- Mapa opcional de quatro fases, com progresso de navegação apenas durante a sessão.
- Acesso direto a Projetos, Sobre, Formação e Contato, sem desbloqueios.
- Foco visível, link para pular conteúdo, menu com Escape e respeito a movimento reduzido.
- Conteúdo e navegação disponíveis sem JavaScript; preferências funcionam mesmo sem armazenamento.
- Nenhuma dependência adicionada. A integração GitHub dinâmica fica para um próximo marco, com fallback local obrigatório.

### Pendências de conteúdo e publicação

- Formações e stack atualizadas com o LinkedIn e GitHub; oito selos do Credly com imagens oficiais, emissores, datas e links individuais.
- Seis projetos selecionados com decisões documentadas, links de código e demos quando disponíveis. Os três projetos antigos continuam acessíveis.
- Procedência e limites da verificação estão em [CONTENT_SOURCES.md](CONTENT_SOURCES.md).
- Os registros antigos da cópia local continuam identificados como pendentes de confirmação.
- Confirmar especialmente o ano 2024 do Santander Bootcamp 2023, a instituição Proz / AWS e o link antigo do LinkedIn usado no certificado.
- Verificar nos repositórios as decisões técnicas e a completude dos projetos antes de atribuir selos ou destaques.
- O versionamento local foi preparado na branch `portfolio-dev-game`, preservando os arquivos locais e o histórico de `origin/main`. O GitHub ainda não recebeu este marco.
- O envio ao GitHub está pendente da verificação da integração com a Vercel: um push pode disparar publicação automática. Antes de qualquer publicação, identificar e corrigir a divergência entre os destinos.
- Operações Git de escrita e deploy exigem autorização explícita. Regras completas em `AGENTS.md`.

- **Design 100% Responsivo:** Adaptado com precisão para desktop, tablets e smartphones utilizando CSS Grid, Flexbox e unidades dinâmicas.
- **Dark Mode & Light Mode:** Suporte a alternância de temas com persistência da preferência no `localStorage` e detecção automática do tema do sistema operacional (`prefers-color-scheme`).
- **Validação em Tempo Real:** Validação nos campos de nome, e-mail, assunto e mensagem com feedback visual e mensagens acessíveis (`aria-live`).
- **Contador Dinâmico de Caracteres:** Contador para o campo de mensagem (máximo 300 caracteres).
- **Envio Real de Formulário:** Integração direta via AJAX com o FormSubmit para envio direto de mensagens para a caixa de e-mail, com estados de carregamento (*loading*) e confirmação de sucesso.
- **Navegação Suave & Menu Mobile:** Navegação por âncoras fluida e menu hamburguer otimizado para dispositivos móveis.
- **Acessibilidade:** Semântica HTML, foco visível, navegação por teclado e movimento reduzido; não representa uma auditoria completa de conformidade WCAG.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, metatags Open Graph para SEO e redes sociais.
- **CSS3 Moderno:** Custom Properties (variáveis CSS), Flexbox, CSS Grid, animações e media queries.
- **JavaScript (ES6+):** Manipulação de DOM assíncrona, Fetch API, eventos em tempo real e Web Storage API.

---

## 💻 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarceloRodrigues1853/challenge-ONE-portfolio.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd challenge-ONE-portfolio
   ```

3. Abra o arquivo `index.html` no seu navegador ou utilize a extensão **Live Server** do VS Code:
   - Clique com o botão direito em `index.html` > **Open with Live Server**.

---

## 👨‍💻 Autor

- **Nome:** Marcelo Rodrigues
- **GitHub:** [@MarceloRodrigues1853](https://github.com/MarceloRodrigues1853)
- **LinkedIn:** [Marcelo Rodrigues](https://www.linkedin.com/in/marcelorodriguesdev1853/)
- **Credly:** [Selos e certificações](https://www.credly.com/users/marcelo-rodrigues.26e8de27/badges/credly)
- **Instagram:** [@marcelo180886](https://www.instagram.com/marcelo180886/)
