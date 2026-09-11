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
      aulas:    [{ titulo, modulo, conteudo, conceitos:["c03"] }],
      fontes:   { verificadas:[{titulo,autor,ano,nivel,url,acessada,nota}],
                  naoVerificadas:[{titulo,busca}] },
      sessoes:  [{ data, duracao, resumo }]
    };

Regras do conteúdo:

- **conceitos** é a tabela do `grafo.md` convertida, linha por linha, sem inventar e sem omitir
- **dominio** usa os mesmos símbolos do grafo: 🟢 🟡 🔴 ⚪
- **prereq** carrega os ids, não os nomes. É deles que sai o aviso de lacuna na aba Trilha
- **aulas.conteudo** aceita markdown simples: `#` título, `-` lista, `1.` lista numerada,
  `---` linha, `**negrito**`, `*itálico*`, `` `código` `` e os rótulos de evidência entre
  colchetes, que a página estiliza sozinha. Pode mandar o `.md` inteiro, sem resumir
- **quebra de linha não separa parágrafo, linha em branco separa.** Texto quebrado na coluna 95,
  como sai de qualquer editor, é remontado num parágrafo só. Isso vale também para negrito que
  atravessa a quebra
- se o primeiro cabeçalho da aula repetir o `titulo` dela, a página descarta, para o título não
  aparecer duas vezes
- **aulas.conceitos** é opcional e é a lista de ids que aquela aula cobre. É o que liga o nó do
  mapa mental à aula. Sem ele a página tenta casar pelo título e depois pelo módulo, o que
  funciona mas erra quando o título da aula não é o nome do conceito. **Preencha sempre**
- **sessoes** em ordem do mais recente para o mais antigo. A primeira aparece na aba Hoje
- **fontes.verificadas** só recebe o que foi realmente aberto, com a data. O resto vai em
  `naoVerificadas`, e a página mostra em amarelo

## O que a página faz

Barra lateral fixa com a marca, o assunto, o objetivo, e o progresso em porcentagem com a
contagem por domínio. Barra de busca no topo, com `Ctrl K`.

| aba | mostra |
|---|---|
| Hoje | um cartão de proposta do dia, quatro contadores, a fila de revisão, o que está liberado, o que está fraco e a última sessão |
| Mapa mental | o assunto inteiro desenhado: raiz, módulos e conceitos, com o material ligado em cada nó |
| Trilha | os conceitos por módulo, com cor de domínio, aviso de lacuna e marcação de viga |
| Estudar | flashcards com virar, acertei e errei, atalhos de teclado e barra de avanço |
| Material | as aulas em cartão com ícone, e leitura em coluna de 66 caracteres |
| Fontes | verificadas e não verificadas, com selo de nível |

### O mapa mental

Desenhado em SVG na hora, a partir do mesmo grafo. Sem biblioteca e sem imagem.

Três colunas: o assunto, os módulos, os conceitos. A cor da borda de cada conceito é o domínio,
e a linha que chega nele tem a mesma cor, então dá para ver o estado do assunto inteiro de
longe. Clicar no módulo recolhe o galho, o que salva mapa de 40 conceitos.

Clicar num conceito abre a ficha dele embaixo, e é ali que mora a resposta para
"quero aprofundar":

- o **resumo**, que é o primeiro parágrafo real da aula que cobre aquele conceito
- **ler a aula**, que leva para a aba Material já com ela aberta
- **treinar as cartas**, que leva para a aba Estudar com o baralho filtrado naquele conceito
- **vem antes**, um botão por pré-requisito não dominado, que pula para ele no próprio mapa
- se não existe material nenhum, o comando pronto para pedir ao Claude

O nó mostra um selo de `aula` ou de `N cartas` quando tem material, então dá para ver de
relance o que já foi estudado e o que é só planejamento.

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
