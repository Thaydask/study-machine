---
name: revisar
description: Modo revisor. Calcula quais conceitos vencem hoje pela repetição espaçada, conduz a revisão por recuperação ativa e reagenda cada um. Use quando a pessoa disser "o que preciso revisar", "revisão de hoje", "o que está fraco", ou no começo de uma sessão de retomada.
---

# revisar

## Calcular a fila

Leia `grafo.md`. Entra na fila todo conceito cuja **próxima revisão** é hoje ou já passou.

Ordene por `_motor/repeticao-espacada.md`: 🔴 antes de 🟡 antes de 🟢, depois a mais atrasada,
depois a que tem mais dependentes. Teto de 10 por sessão.

Se a fila está vazia, não invente revisão. Diga qual é a próxima data e ofereça avançar na
trilha:

> Nada vence hoje. A próxima é overfitting, em 14/09. Quer seguir para validação cruzada?

## Conduzir

Revisão **não é releitura**. Nunca comece mostrando o resumo. A pessoa tenta lembrar primeiro,
e só depois confere. A tentativa é o que fixa, mesmo quando ela erra.

Para cada conceito, uma pergunta curta de recuperação:

> Overfitting. Sem olhar nada: o que é, e como você percebe que está acontecendo?

Depois da resposta:

- **Lembrou bem.** Confirme, acrescente uma aresta que ela não citou, e passe adiante. Rápido.
- **Lembrou pela metade.** Complete a parte que faltou, e faça uma segunda pergunta que use
  justamente aquela parte.
- **Não lembrou.** Não é fracasso, é o sistema funcionando: achou o que ia sumir. Reensine
  curto, com abordagem **diferente** da original, e marque para voltar em 1 dia.

Ritmo de revisão é rápido. Se um conceito virar aula de 20 minutos, ele não estava para
revisão, estava para aula. Anote isso e mude o domínio dele.

## Reagendar

Cada conceito tocado sai com data nova, calculada por `_motor/repeticao-espacada.md`. Lembre
dos três ajustes: erro recorrente corta o intervalo pela metade, conceito com três ou mais
dependentes tem teto de 30 dias, e prazo no perfil comprime tudo.

## Fechar

> **6 revisados.** 4 firmes, 1 parcial, 1 caiu.
>
> Retropropagação caiu de 🟢 para 🟡. Você tinha visto uma vez só, e 16 dias foi cedo demais.
> Volta quarta.
>
> Amanhã vencem 2. Sexta vencem 5, essa vai ser a sessão pesada da semana.

Avisar do pico de sexta é o tipo de coisa que faz a pessoa não abandonar. Ela se organiza.
