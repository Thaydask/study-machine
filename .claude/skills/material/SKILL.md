---
name: material
description: Gera material de estudo em arquivo: aula escrita, resumo, flashcards, mapa mental em Mermaid, glossário, exercícios e estudo de caso. Use quando a pessoa pedir "faz um resumo", "transforma em flashcards", "mapa mental", "cria exercícios", "quero isso em arquivo".
---

# material

Material é derivado do grafo e das aulas. Nunca invente conteúdo novo aqui: se falta coisa,
carregue `aula` ou `pesquisar` primeiro e depois volte.

Todos os modelos estão em `_motor/templates/`.

## Onde salvar

`STUDY/<assunto>/<modulo>/<tipo>.md`

A pasta do módulo nasce agora, com o primeiro arquivo. Não crie as outras.

## Os tipos

**aula.md** a versão escrita da aula. Não é a transcrição da conversa. Leva a ideia central, a
analogia com o limite dela, exemplo, contraexemplo, e uma seção final chamada "onde isso costuma
dar errado" com o erro que apareceu de verdade na conversa.

**resumo.md** uma página, no máximo. Resumo de três páginas é a aula de novo. Se não couber em
uma, o módulo está grande demais e devia ser dois.

**conceitos-chave.md** a ideia em uma frase cada, na ordem dos pré-requisitos.

**glossario.md** termo, definição em uma linha, e onde ele aparece pela primeira vez. Todo
jargão apresentado em aula entra aqui no mesmo dia.

**flashcards.md** frente e verso. Regras que fazem diferença:
- uma ideia por cartão, sempre
- a frente pede recuperação, não reconhecimento. "O que é X" serve. "X é verdadeiro ou falso"
  não serve
- o verso cabe em duas linhas
- cartão de comparação é o mais útil quando existe erro recorrente de confusão

**mapa-mental.md** Mermaid, gerado da tabela do grafo, com o símbolo de domínio em cada nó.
Renderiza sozinho no GitHub. Regenere sempre a partir do grafo, nunca edite os dois na mão.

**exercicios.md** em dificuldade crescente, com gabarito comentado no fim do arquivo, não do
lado da pergunta. Explique **por que** a resposta errada é errada, não só qual é a certa.

**quiz.md** o teste aplicado, com gabarito e data. Guardar serve: refazer o mesmo quiz um mês
depois mede retenção de verdade.

**estudo-de-caso.md** quando o assunto pede aplicação. Situação real, dados, pergunta aberta,
e uma análise de referência para comparar depois que ela tentar.

## Qual gerar

Não gere os oito. Escolha pelo domínio, como está em `perfil.md`:

| domínio | os que mais servem |
|---|---|
| programação | exercícios, projeto, glossário |
| história, direito | cronologia, fontes, ensaio, estudo de caso |
| medicina, biologia | mapa mental, flashcards, caso |
| matemática, física | exercícios com gabarito comentado, erro clássico |
| idiomas | flashcards, frases de uso |
| prova, concurso | quiz, simulado, resumo de uma página |

Na dúvida, gere um e pergunte se serviu antes de gerar mais cinco.

## Tudo que você gerar entra no painel

Flashcard, aula e fonte não servem de nada parados num `.md` que ninguém abre. Depois de gerar
qualquer material, acrescente ao `STUDY/<assunto>/dados.js` e avise que o painel mudou.

Flashcards vão para `flashcards`, aulas para `aulas`, fontes para `fontes`. Formato em
`_motor/painel.md`.

## PDF e slides

Não há como gerar sem instalar ferramenta, e este projeto é de dependência zero por decisão.

O que dá para fazer, e serve: markdown limpo, que o GitHub renderiza, e que qualquer editor
imprime em PDF pelo atalho de impressão. Diga isso em vez de prometer o que não sai.
