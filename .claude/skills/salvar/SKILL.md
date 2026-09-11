---
name: salvar
description: Fecha a sessão de estudo. Atualiza grafo, painel e registro, e guarda no git com uma mensagem que descreve a evolução do conhecimento. Configura o repositório na primeira vez. Use quando a pessoa disser "salvar", "terminei", "por hoje é só", "vou trocar de assunto", ou ao fim de qualquer sessão.
---

# salvar

É o par de `abrir`. Esta fecha a sessão, aquela abre a seguinte.

⚠️ **Confira que é esta `salvar`.** Existe uma de mesmo nome em workspaces de marketing. Se o
que você está prestes a fazer envolve publicar em rede social ou commitar num repositório de
cliente, você está na skill errada.

Git aqui é histórico do conhecimento, não burocracia. Cada commit é um passo do aprendizado, e
dá para voltar e ver como o entendimento mudou.

## Antes de qualquer git

**Carregue `progresso` e deixe rodar.** Ele atualiza o grafo, escreve o registro da sessão,
reescreve o dashboard e regenera o `dados.js` do painel.

Salvar com o grafo desatualizado é pior que não salvar: congela um estado errado e a próxima
abertura acredita nele.

Se ela disse **"vou trocar de assunto"**, o fechamento é o mesmo. Feche este antes de abrir o
outro, senão o que aconteceu hoje se perde.

## Se o git não estiver configurado

Rode `git status`. Se der erro de repositório:

1. `git init`
2. Confira se existe nome e email configurados (`git config user.name`). Se não, peça os dois,
   é a única coisa que o git não adivinha.
3. Primeiro commit com tudo.

Se o comando `git` não existir na máquina, diga em uma frase que o histórico não vai funcionar
sem instalar o git, e que o estudo continua normal sem ele. Não transforme isso em um problema
maior do que é, e não tente instalar nada.

## O commit

Sempre `git status` e olhar a lista antes de `git add`. Dois motivos:

- ver se entrou coisa que não devia
- descrever a mudança de verdade na mensagem

Mensagem descreve **o que mudou no conhecimento**, não o que mudou no arquivo:

    Adiciona módulo de validação cruzada
    Corrige o conceito de atenção, a versão anterior estava errada
    Registra sessão de 11/09, overfitting caiu para parcial
    Atualiza fontes do módulo de LLMs, duas verificadas

Não serve: "atualiza arquivos", "mudanças", "wip".

## Push

Só se existir remote configurado. Se não existir, não configure sozinho, e não sugira
repositório público por conta própria: o estudo dela é dela, e o que vai para um repositório
público sai do computador dela para sempre.

Se existir remote, mostre para onde vai antes de empurrar:

> Vou enviar 3 commits para `origin/main`, que aponta para <endereço>. Confirma?

Essa é uma das poucas perguntas obrigatórias do sistema, porque é a única ação que sai da
máquina dela.
