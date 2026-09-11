# Study Machine

Uma máquina de estudos que roda dentro do Claude Code.

Você diz o que quer aprender. Ela monta a trilha, dá aula, pesquisa fonte de verdade, te testa,
lembra do que você errou e sabe quando aquilo precisa voltar. Tudo fica em arquivo, no seu
computador, e é seu.

Não é um chatbot que responde pergunta. É um professor particular que guarda o seu histórico.

Você estuda por uma página, não por arquivos de texto. Ela abre com dois cliques, mostra o que
cai hoje, a trilha inteira com as lacunas marcadas, flashcards para treinar e as aulas para ler.

---

## Começar

Três passos, e nenhum deles é instalar alguma coisa no seu computador.

**1. Instale o Claude Code**, se ainda não tiver: [claude.com/product/claude-code](https://claude.com/product/claude-code)

**2. Baixe esta pasta.** Pelo botão verde `Code` aqui em cima, `Download ZIP`, e descompacte
onde você quiser. Se você usa git, pode clonar.

**3. Abra o Claude Code dentro da pasta** e escreva:

> /instalar

Ele confere que está tudo no lugar, faz quatro perguntas rápidas sobre você, e já começa o seu
primeiro assunto.

O nome engana de propósito, porque é o que todo mundo digita. Nada é instalado: a máquina já
veio pronta dentro da pasta e o Claude Code carrega sozinho ao abrir. O `/instalar` serve para
te conhecer uma vez só, em vez de perguntar as mesmas coisas a cada matéria nova.

**Da segunda vez em diante são dois comandos, e só esses dois:**

`abrir` quando você senta para estudar. Ele lê onde você parou e já começa.

`salvar` quando termina, ou quando vai trocar de matéria. Ele guarda tudo.

**Quer ver antes?** Abra `_motor/exemplo/painel.html` assim que baixar. É um estudo de
aprendizado de máquina já em andamento, para você ver com o que a coisa se parece.

---

## A página

Depois da primeira sessão existe um `painel.html` dentro da pasta do seu assunto. Dois cliques e
ele abre no navegador. Sem servidor, sem internet, sem instalar nada.

| aba | o que tem |
|---|---|
| **Hoje** | o que vence, o próximo conteúdo liberado, seus 3 conceitos mais fracos |
| **Trilha** | tudo que você vai aprender, por cor, com as lacunas apontadas |
| **Estudar** | flashcards: vira, acertei, errei |
| **Material** | as aulas escritas, para ler na página |
| **Fontes** | o que foi conferido, e o que ainda não foi |

Uma coisa para saber: a página **mostra**, não escreve. Quando você termina um baralho de
flashcards, ela monta uma frase com o resultado e um botão de copiar. Você cola no Claude e aí o
seu progresso anda. É um passo a mais, e é o preço de não precisar de servidor nenhum.

Peça "atualiza o painel" sempre que quiser, e no fim de cada sessão ele se atualiza sozinho.

---

## Usar

Fale normal. A máquina entende a intenção e escolhe o que fazer.

| você diz | ela faz |
|---|---|
| /instalar | primeira vez: confere tudo, te conhece, e começa o primeiro assunto |
| abrir | lê onde você parou, diz o que vence hoje, e começa |
| salvar | fecha a sessão: atualiza a página, o progresso, e guarda |
| quero aprender biologia celular | pergunta 4 coisas, monta a trilha e já começa a primeira aula |
| continua de onde paramos | o mesmo que abrir |
| não entendi isso | muda a abordagem, e te conduz por pergunta em vez de repetir a explicação |
| me testa | monta um teste de recuperação e corrige com você |
| o que preciso revisar | calcula o que está na hora de voltar e conduz a revisão |
| olha esse artigo e me ensina | lê, avalia a fonte, e transforma em módulo de estudo |
| transforma isso em flashcards | cria o baralho e põe na aba Estudar da sua página |
| como estou indo | mostra o resumo na conversa e atualiza a sua página |
| vou trocar de assunto | fecha o de agora direito antes de abrir o outro |

Se preferir comando: `/instalar`, `/abrir`, `/estudar`, `/aula`, `/testar`, `/revisar`,
`/pesquisar`, `/material`, `/progresso`, `/salvar`.

Na prática você usa dois: **abrir** no começo, **salvar** no fim. O resto é conversa.

---

## O que aparece na sua pasta

Nada, até você começar. Depois da primeira sessão, algo assim:

    _memoria/
    └── estudante.md      quem você é. vale para todas as matérias

    STUDY/
    └── biologia-celular/
        ├── painel.html       ABRA ESTE. é por onde você estuda
        ├── dados.js          o que a página mostra
        ├── dashboard.md      a mesma coisa em texto, para o git
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

**Não gera PDF nem slide.** Gera a página, que abre no navegador, e markdown, que qualquer
editor imprime em PDF pelo atalho de impressão. Foi escolha: nada para instalar é também nada
para quebrar.

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
