---
name: salvar
description: Guarda o estudo no git, com mensagem de commit que descreve a evolução do conhecimento. Configura o repositório na primeira vez. Use quando a pessoa disser "salvar", "guarda isso", "commit", "backup", ou ao fim de uma sessão longa.
---

# salvar

Git aqui é histórico do conhecimento, não burocracia. Cada commit é um passo do aprendizado, e
dá para voltar e ver como o entendimento mudou.

## Antes

Confira que `progresso` já rodou. Salvar com o grafo desatualizado congela um estado errado.

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
