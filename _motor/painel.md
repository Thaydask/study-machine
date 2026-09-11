# O painel

O markdown é a verdade e o git guarda o histórico. Mas ninguém estuda lendo `.md`. O painel é a
superfície humana por cima dos mesmos dados.

## Como funciona

Dois arquivos, lado a lado, dentro da pasta do assunto:

    STUDY/<assunto>/painel.html    a página. Cópia de _motor/painel.html, nunca editada
    STUDY/<assunto>/dados.js       os dados. Reescritos por você a cada sessão

A pessoa abre o `painel.html` com dois cliques. Não precisa de servidor, de internet nem de
instalar nada: a página lê o `dados.js` por `<script src>`, que funciona em `file://`. Por isso
os dados são um arquivo `.js` e não `.json`, que o navegador bloquearia.

## Quem cria, quem atualiza

| momento | o que fazer |
|---|---|
| assunto criado, na skill `estudar` | copie `_motor/painel.html` para a pasta do assunto e escreva o primeiro `dados.js` |
| toda sessão, na skill `progresso` | reescreva `dados.js` inteiro, depois de atualizar o grafo |
| a pessoa pede "atualiza o painel" | reescreva `dados.js` |

**Nunca edite `painel.html` dentro de `STUDY/`.** Ele é cópia. Se a página precisar mudar, mude
`_motor/painel.html` e copie de novo.

**Nunca edite `dados.js` à mão de forma avulsa.** Ele é derivado do `grafo.md`. Se os dois
divergirem, o grafo ganha e o `dados.js` é regerado.

## O formato

`_motor/exemplo/dados.js` é o modelo completo e preenchido. Abra ele antes de escrever o
primeiro. O contrato, em resumo:

    window.DADOS = {
      assunto, atualizado, objetivo,
      modulos:  [{ id, nome }],
      conceitos:[{ id, nome, modulo, prereq:[], dominio, conf, ultima, proxima, acertos, erro }],
      flashcards:[{ conceito, frente, verso }],
      aulas:    [{ titulo, modulo, conteudo }],
      fontes:   { verificadas:[{titulo,autor,ano,nivel,url,acessada,nota}],
                  naoVerificadas:[{titulo,busca}] },
      sessoes:  [{ data, duracao, resumo }]
    };

Regras do conteúdo:

- **conceitos** é a tabela do `grafo.md` convertida, linha por linha, sem inventar e sem omitir
- **dominio** usa os mesmos símbolos do grafo: 🟢 🟡 🔴 ⚪
- **prereq** carrega os ids, não os nomes. É deles que sai o aviso de lacuna na aba Trilha
- **aulas.conteudo** aceita markdown simples: `#` título, `-` lista, `**negrito**`, `` `código` ``
  e os rótulos de evidência entre colchetes, que a página estiliza sozinha
- **sessoes** em ordem do mais recente para o mais antigo. A primeira aparece na aba Hoje
- **fontes.verificadas** só recebe o que foi realmente aberto, com a data. O resto vai em
  `naoVerificadas`, e a página mostra em amarelo

## O que a página faz

Barra lateral fixa com a marca, o assunto, o objetivo, e o progresso em porcentagem com a
contagem por domínio. Barra de busca no topo, com `Ctrl K`.

| aba | mostra |
|---|---|
| Hoje | um cartão de proposta do dia, quatro contadores, a fila de revisão, o que está liberado, o que está fraco e a última sessão |
| Trilha | os conceitos por módulo, com cor de domínio, aviso de lacuna e marcação de viga |
| Estudar | flashcards com virar, acertei e errei, atalhos de teclado e barra de avanço |
| Material | as aulas em cartão com ícone, e leitura em coluna de 66 caracteres |
| Fontes | verificadas e não verificadas, com selo de nível |

**A busca** procura em conceito, aula, fonte e flashcard ao mesmo tempo, e destaca o trecho.
`Ctrl K` foca, `Esc` limpa.

**Atalhos na aba Estudar:** espaço vira a carta, `1` ou `e` marca errei, `2` ou `a` marca
acertei.

### Os estados vazios importam mais que os cheios

No começo tudo está ⚪, sem flashcard e sem aula. A página foi desenhada para esse estado, não
apesar dele:

- o cartão do dia propõe o primeiro conceito liberado, com o comando pronto para copiar
- cada aba vazia diz o que pedir ao Claude para preenchê-la
- quando nenhum conceito foi medido ainda, aparece um bloco explicando que cinza não quer dizer
  que ela não sabe, quer dizer que o sistema não tem prova

Nunca troque esses textos por "nenhum dado disponível". O estado vazio é a primeira coisa que
ela vê, e é onde a maioria dos sistemas parece quebrada.

## O ciclo de volta, que é a parte que engana

A página **não escreve arquivo**. Nenhuma página aberta em `file://` escreve.

Quando ela termina um baralho de flashcards, a página monta uma frase com o resultado e um botão
de copiar. Ela cola isso no Claude, e aí sim o grafo se move.

Isso é limitação real e está escrito na própria tela. Não prometa sincronização automática: a
alternativa seria servidor, e este projeto é de dependência zero por decisão.
