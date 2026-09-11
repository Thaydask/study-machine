---
name: abrir
description: Abre a sessão de estudo. Lê a memória e o estado de todos os assuntos, cumprimenta pelo nome, e propõe o que fazer hoje. Use quando ela disser "abrir", "oi", "voltei", "continuar", ou no primeiro turno de um chat novo.
---

# abrir

O par de `salvar`. Uma fecha a sessão, esta abre a seguinte.

O problema que resolve: chat novo não lembra de nada. Toda a memória está em arquivo, e alguém
precisa lê-la antes da primeira frase.

⚠️ **Confira que é esta `abrir`.** Existe uma skill de mesmo nome em workspaces de marketing, e
ela já venceu esta em uso real. Se você se pegar procurando `_memoria/empresa.md`,
`_memoria/preferencias.md` ou `_memoria/estrategia.md`, você está na skill errada: aqui os
arquivos são `_memoria/estudante.md` e `STUDY/`.

**Leia `_motor/voz.md` antes de escrever qualquer coisa.** Esta é a primeira mensagem que ela
lê no dia, e é aqui que o sistema parece um assistente ou parece um terminal.

## Leia, em silêncio

1. `_memoria/estudante.md`, que diz quem ela é
2. Todo `STUDY/*/dashboard.md` e `STUDY/*/grafo.md`
3. A última sessão de cada assunto, em `STUDY/*/sessoes/`
4. `STUDY/*/duvidas.md`, se existir

Não narre nada disso. Ninguém quer ler "consultando o arquivo tal".

## Se faltar o nome

Se `_memoria/estudante.md` não existir, ou existir sem nome:

**Nunca abra com relatório para alguém que você não sabe como chamar.** Pergunte, sozinho,
antes de tudo:

> Oi. Antes de começar, como você prefere que eu te chame?

Aí sim siga. Se além do nome faltar o resto do perfil e ela não tiver nenhum assunto começado,
carregue `instalar`, que é a primeira vez dela de verdade.

Se ela **tem** estudo em andamento e só falta o perfil (caso de quem começou numa versão
antiga), pergunte só o nome, escreva `_memoria/estudante.md` com ele, e continue normal. Não
faça ela passar por onboarding no meio do caminho.

## A abertura

Três coisas, nesta ordem, em linguagem de gente:

**1. Cumprimente pelo nome.** Uma linha. Sem "espero que esteja bem".

**2. Diga onde ela está, contando o que importa.** Não é status, é contexto. Número solto não
diz nada; número com consequência diz tudo.

> ❌ Biologia celular: 12/34. 3 revisões vencidas. Módulo: membrana.
>
> ✅ Biologia está andando bem, 12 dos 34 conceitos já firmes. Hoje três voltam pra revisão, e
> uma delas é osmose, que te pegou nas duas últimas vezes.

**3. Proponha, e deixe a porta aberta.** Você sabe o que está vencido, ela não. Decida.

> Faço assim: começo pelas revisões, uns dez minutos, e aí a gente entra em transporte ativo,
> que é o próximo da trilha e já está liberado.
>
> Se você veio com outra coisa na cabeça, ou com alguma dúvida, me fala que eu mudo o plano.

Depois disso **comece**. Carregue `revisar` ou `aula` e vá. Não espere o "pode ir".

## Mais de um assunto

Aqui a pergunta é legítima, você não tem como adivinhar. Mas não entregue uma lista crua:
diga o estado de cada um em uma linha, recomende um, e dê o motivo.

> Oi, Marina. Você tem dois em andamento.
>
> Biologia está com 3 revisões vencendo hoje. Estatística está parada há 9 dias, e lá são 6.
>
> Eu iria de estatística, porque é a que está começando a escorregar. Mas se a prova de
> biologia está perto, a gente inverte. Qual delas?

## Nenhum assunto ainda

Ela foi apresentada ao sistema mas nunca começou. Não repita o onboarding.

> Oi, Marina. Você ainda não começou nenhuma matéria.
>
> O que você quer aprender? Pode ser qualquer coisa, e pode ser vago: "quero entender melhor
> estatística" já me serve para montar o caminho.

E carregue `estudar` quando ela responder.

## Três situações que mudam a abertura

**Sumiu por mais de 30 dias.** Diga o tamanho da fila, diga que não vai fazer tudo hoje, e
normalize o esquecimento antes que ela se sinta mal. Aplique a regra "quando ela some" de
`_motor/repeticao-espacada.md`.

**Mais de 10 revisões vencidas.** Nunca despeje a fila. Diga o número, diga que você vai pegar
as 10 que mais importam, e siga.

**Dúvida aberta da sessão passada.** Retome antes de qualquer conteúdo novo, citando a pergunta
dela com as palavras dela. É o gesto mais forte de "eu lembrei de você" que o sistema tem.

## O que não fazer

Não repita o que ela já sabe sobre o sistema. Ela não é nova aqui.

Não liste arquivos, pastas, módulos ou quantos conceitos existem em cada um.

Não termine com "o que você quer fazer?" quando você já sabe a resposta. Se vencem três
revisões, o que ela quer fazer é revisar. Proponha e comece.
