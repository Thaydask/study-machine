# Study Machine

Uma máquina de estudos que roda dentro do Claude Code.

Você diz o que quer aprender. Ela monta a trilha, dá aula, pesquisa fonte de verdade, te testa,
lembra do que você errou e sabe quando aquilo precisa voltar. Tudo fica em arquivo, no seu
computador, e é seu.

Não é um chatbot que responde pergunta. É um professor particular que guarda o seu histórico.

---

## Instalar

Três passos. Não tem quarto.

**1. Instale o Claude Code**, se ainda não tiver: [claude.com/product/claude-code](https://claude.com/product/claude-code)

**2. Baixe esta pasta.** Pelo botão verde `Code` aqui em cima, `Download ZIP`, e descompacte
onde você quiser. Se você usa git, pode clonar.

**3. Abra o Claude Code dentro da pasta** e escreva:

> vamos estudar

Pronto. Não tem instalação, não tem senha, não tem programa para configurar, não tem conta para
criar.

---

## Usar

Fale normal. A máquina entende a intenção e escolhe o que fazer.

| você diz | ela faz |
|---|---|
| quero aprender biologia celular | pergunta 4 coisas, monta a trilha e já começa a primeira aula |
| continua de onde paramos | lê seu progresso e retoma, começando pelo que está vencido |
| não entendi isso | muda a abordagem, e te conduz por pergunta em vez de repetir a explicação |
| me testa | monta um teste de recuperação e corrige com você |
| o que preciso revisar | calcula o que está na hora de voltar e conduz a revisão |
| olha esse artigo e me ensina | lê, avalia a fonte, e transforma em módulo de estudo |
| transforma isso em flashcards | gera o arquivo |
| como estou indo | painel do assunto, com o que está fraco e por quê |
| salvar | guarda no git, se você usa git |

Você também pode chamar direto: `/estudar`, `/aula`, `/testar`, `/revisar`, `/pesquisar`,
`/material`, `/progresso`, `/salvar`.

---

## O que aparece na sua pasta

Nada, até você começar. Depois da primeira sessão, algo assim:

    STUDY/
    └── biologia-celular/
        ├── dashboard.md      seu painel
        ├── grafo.md          o que você sabe, conceito a conceito
        ├── perfil.md         seu objetivo, seu tempo, como você aprende
        ├── plano.md          a trilha
        ├── fontes.md         as fontes, com data de acesso
        ├── membrana/         um módulo, com aula, resumo, quiz, flashcards
        └── sessoes/          o registro de cada dia de estudo

As pastas nascem conforme você estuda. Nenhuma pasta vazia é criada por antecipação.

---

## Três coisas que ela faz e a maioria não faz

**Ela não deixa você ler passivamente.** Toda aula termina com você tendo que explicar,
resolver ou comparar. Ler não conta como aprender, e o progresso só se move quando você produz
alguma coisa.

**Ela não inventa fonte.** A regra é literal: nenhuma URL é escrita sem ter sido aberta. O que
ela lembra de cabeça vai para uma seção separada, marcada como não verificado. Referência
inventada é o defeito mais comum de IA em estudo, e aqui ele é bloqueado por regra.

**Ela sabe o que você esquece.** Cada conceito tem uma data de volta, calculada pelo quanto
você acertou e pelo quanto errou. Conceito que você erra sempre volta mais rápido. Conceito
que sustenta muitos outros nunca fica muito tempo fora.

---

## O que ela não faz

**Não te avisa sozinha.** Não existe nada rodando quando você fecha o Claude. A data da próxima
revisão fica escrita e aparece quando você abre. Você precisa voltar.

**Não gera PDF nem slide.** Gera markdown, que o GitHub mostra bonito e que qualquer editor
imprime em PDF. Isso foi escolha: sem dependência, sem instalação, sem quebrar.

**Não sabe o que você não contou.** Se você disser que já sabe uma coisa, ela sonda antes de
acreditar. Nível declarado é quase sempre otimista, e isso não é defeito seu, é de todo mundo.

---

## Seu estudo é seu

Tudo fica em arquivo no seu computador. Nada é enviado para lugar nenhum.

Se você quiser guardar no GitHub, use `salvar`. Ela nunca envia nada sem te perguntar, e nunca
cria repositório público por conta própria.

---

## Se quiser entender ou mudar

`COMO-FUNCIONA.md` explica a arquitetura, por que ela é assim, e o que mudar para adaptar.

O sistema inteiro são arquivos de texto. Não tem código, não tem mágica. Se alguma regra não
combina com o seu jeito de estudar, abra o arquivo e mude.
