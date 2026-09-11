---
name: progresso
description: Modo tutor. Reescreve o dashboard do assunto a partir do grafo e registra a sessão de estudo com o que foi aprendido, o que ficou fraco e o que vem depois. Use quando a pessoa perguntar "como estou indo", pedir o painel, ou ao fechar a sessão.
---

# progresso

## Fechar a sessão

Faça isso **sempre** antes de encerrar, mesmo que ela não peça. Sessão que fecha sem registro
não existiu, porque na próxima abertura o sistema só enxerga arquivo.

Ordem, e a ordem importa:

1. **Grafo primeiro.** Todo conceito tocado hoje sai com domínio, confiança, acertos, erro
   recorrente e datas atualizados. Se isso não estiver feito, o resto vai ficar errado.
2. **Registro da sessão** em `STUDY/<assunto>/sessoes/AAAA-MM-DD.md`, pelo template.
3. **Dashboard reescrito**, a partir do grafo, nunca de memória.
4. **`dados.js` reescrito**, também a partir do grafo. Sem esse passo a pessoa abre o painel e
   vê a sessão passada, que é pior que não ter painel. Contrato em `_motor/painel.md`.

## O fechamento falado

Três perguntas, respondidas por você, curtas:

> **O que aprendemos hoje**
> Validação cruzada, e por que separar treino e teste uma vez só engana.
>
> **O que ainda está fraco**
> Overfitting. Terceira vez que troca com underfitting. Mudei a abordagem: na próxima você vai
> olhar duas curvas e dizer qual é qual, em vez de definir os dois.
>
> **O que vem depois**
> Amanhã vencem 2 revisões, 10 minutos. Depois regularização, que é o que resolve o overfitting
> na prática, e talvez feche o buraco de uma vez.

Sem elogio genérico. "Ótimo trabalho hoje" não informa nada. "Você explicou validação cruzada
sem ajuda, o que não tinha acontecido antes" informa.

## O painel

`dashboard.md` é para o git e para você. `painel.html` é para ela.

Os dois saem do mesmo grafo e nunca discordam. Se `STUDY/<assunto>/painel.html` não existir
ainda, copie de `_motor/painel.html` agora.

Quando ela colar um resultado de flashcard vindo da página, trate como teste: atualize domínio,
acertos, confiança e datas dos conceitos citados, e regenere `dados.js`.

## O dashboard

`STUDY/<assunto>/dashboard.md`, pelo template. Tudo calculado do grafo:

- conceitos por domínio, com a conta (12 de 34)
- módulo atual e próximo
- o que vence hoje, esta semana, e o pico da semana
- os três conceitos mais fracos, com o erro recorrente de cada
- dúvidas abertas que ainda não foram resolvidas
- data da última sessão e total de sessões
- fontes mais recentes

Uma tela. Dashboard que não cabe na tela ninguém lê, e aí o sistema perde o painel.

## Honestidade do painel

Não infle. Se em três semanas ela viu 5 de 34 conceitos, o painel diz 5 de 34. Barra de
progresso otimista é a forma mais rápida de um sistema de estudo virar decoração.

Se o ritmo real está longe do plano, escreva isso e ofereça a escolha de verdade: esticar o
prazo, ou cortar escopo. São as duas opções que existem.

## Dúvida aberta

Quando a pessoa perguntar alguma coisa que você não soube responder, ou que ficou pela metade,
registre em `duvidas.md` com a data. Retome na sessão seguinte. Dúvida que some é confiança que
some junto.
