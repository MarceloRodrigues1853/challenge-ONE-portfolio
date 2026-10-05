# Fluxo de manutenção do portfólio

## Revisão de conteúdo

1. Consultar [AGENTS.md](AGENTS.md) e a seção relevante de [CONTENT_SOURCES.md](CONTENT_SOURCES.md).
2. Conferir a credencial individual, README ou código que sustenta cada informação. Distinguir formação, certificação e experiência prática.
3. Registrar fontes, datas e limites da verificação em CONTENT_SOURCES.md. Não duplicar as pendências nos demais documentos.
4. Atualizar o conteúdo local preservando informações úteis sem JavaScript ou API.
5. Validar os pontos afetados conforme o checklist em [DOCS.md](DOCS.md).
6. Apresentar diff, arquivos, validações e pendências para revisão antes de versionar.

## Revisão de publicação

1. Conferir branch de trabalho e destino do envio.
2. Revisar e autorizar separadamente commit, push, PR e merge, incluindo os efeitos de preview ou publicação automática.
3. Conferir os checks e a prévia do commit atual antes do merge.
4. Após a publicação, conferir o site em produção e os comportamentos alterados.

O destino e os detalhes técnicos estão em DOCS.md; as regras de autorização estão em AGENTS.md. Não alterar credenciais nem configurações de produção durante esse fluxo.

## Ferramentas locais

A skill em `.codex/skills/revisar-conteudo-portfolio/` é um recurso opcional de apoio à revisão, sem participação no funcionamento do site. Deve permanecer local, fora do versionamento. Este documento e as fontes registradas permitem manter o projeto mesmo sem a skill.
