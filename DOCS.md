# Documentação técnica e manutenção

## Guias do projeto

- [WORKFLOW.md](WORKFLOW.md): fluxo de revisão, materiais pendentes e publicação.
- [CONTENT_SOURCES.md](CONTENT_SOURCES.md): fontes individuais, evidências e limites das verificações.
- [AGENTS.md](AGENTS.md): regras de trabalho e autorização das operações.

## Publicação e revisão

O destino correto é https://challenge-one-portfolio-nine.vercel.app/. A URL challenge-one-portfolio.vercel.app exibe outro portfólio e não deve ser usada como referência ou destino.

A produção acompanha a branch main; envios em outras branches podem gerar previews. Preparar alterações locais, revisar o diff e validar antes de versionar. Commit, push, criação de PR, merge e deploy exigem autorizações específicas e separadas, incluindo o efeito de publicação automática quando aplicável. Não alterar credenciais nem configurações de produção.

## Conteúdo e credenciais

Manter links individuais e procedência. Não atribuir experiência, métricas ou níveis de proficiência a partir de certificados. As pendências detalhadas ficam em CONTENT_SOURCES.md e WORKFLOW.md, evitando duplicá-las no README.

## Contato

O formulário depende de JavaScript e do serviço externo FormSubmit. Sem JavaScript, ele fica oculto e a seção orienta o uso dos links diretos. Testes locais não devem enviar mensagens reais.

## Metadados opcionais do GitHub

O botão Consultar atividade no GitHub busca metadados públicos dos seis projetos selecionados, apenas sob demanda. Mostra último push, linguagem principal e arquivamento; preserva todos os cards locais. Não usa token nem dependências. Há timeout de 8 segundos por consulta e intervalo mínimo de 15 segundos entre tentativas; sucesso completo evita novas consultas na mesma visita. Sem JavaScript, o controle permanece oculto e o conteúdo continua acessível.

Validação local: respostas simuladas de sucesso, limite 403, falha de rede, dados inválidos, sucesso parcial e timeout; teclado, temas e larguras 320/375/1440. Consulta real da API validada em 04/10/2026: os seis projetos retornaram metadados, sem erros JavaScript.


## Checklist de alterações de interface

- Conferir celular e desktop, temas claro e escuro e ausência de transbordamento.
- Verificar foco, navegação por teclado e movimento reduzido quando afetados.
- Conferir imagens, links locais e experiência sem JavaScript.
- Validar falhas de rede/API quando a integração for alterada.
- Executar git diff --check e apresentar arquivos, validações e pendências antes do commit.

## Tema inicial

A primeira visita usa o tema escuro, independentemente do tema do sistema. Uma escolha válida em `portfolio_theme` tem prioridade e é aplicada antes do CSS. Sem JavaScript ou com armazenamento indisponível, o tema escuro permanece como padrão; com JavaScript, o visitante pode alternar os temas mesmo sem armazenamento. Preferências anteriores não são apagadas.
