# Como funciona

Para quem quer entender, adaptar ou desconfiar. Não é necessário ler para usar.

## O desenho em uma frase

Um `CLAUDE.md` curto que carrega sempre, oito skills que carregam só quando são chamadas, e um
grafo de conhecimento em tabela que é a única fonte de verdade sobre o que a pessoa sabe.

## Por que o CLAUDE.md é curto

Ele entra em toda sessão e consome contexto. Se todas as regras do sistema morassem nele, três
coisas aconteceriam: a conversa ficaria mais curta, o modelo passaria a ignorar pedaços, e o
pior, ele ignoraria **em silêncio**. Nada avisa quando uma instrução é atropelada.

Então ele tem só o que vale sempre: as seis regras invioláveis, o mapa de qual skill carregar,
e onde mora o estado. O detalhe de cada modo mora na skill, e a skill entra no contexto quando
é usada.

É a diferença entre uma especificação de 30 seções e um sistema que funciona na terceira hora
de uso.

## As peças

    CLAUDE.md              carrega sempre. Curto por decisão
    .claude/settings.json  permissões, escopadas em STUDY/ e _memoria/
    .claude/skills/        nove modos, carregados sob demanda
    _memoria/estudante.md  quem a pessoa é, uma vez para todos os assuntos
    _motor/                as regras que as skills citam
    _motor/templates/      doze modelos de arquivo
    STUDY/                 o estudo. Nasce vazio

## Por que existe um `/instalar` se nada é instalado

Skill de projeto em `.claude/skills/` é carregada pelo Claude Code ao abrir a pasta. Clonar já
é instalar, então tecnicamente a skill é desnecessária.

Ela existe por três motivos que não são técnicos:

**Prova.** Quem clona um repositório e abre um chat não tem como saber se funcionou. Rodar um
comando e receber "tudo no lugar" resolve uma dúvida real.

**Perfil global.** `_memoria/estudante.md` guarda nome, tempo por semana e preferência de
explicação uma vez, para nenhuma matéria nova repetir as mesmas quatro perguntas. Ele também
acumula o que foi **observado**, que é mais confiável que o que foi declarado.

**Não deixar a pessoa sozinha.** O `/instalar` termina perguntando o assunto e emendando na
primeira aula. A alternativa é ela ficar olhando uma pasta vazia sem saber o que digitar.

A regra que a skill carrega: **nunca dizer que instalou alguma coisa.** A primeira frase do
sistema não pode ser mentira.

## O grafo, que é a decisão central

Sem ele, o sistema seria um gerador de pastas bonitas. Com ele, três coisas viram mecânica em
vez de intuição:

**Detecção de lacuna.** Cada conceito declara pré-requisito. Achar o buraco é caminhar a lista,
não perceber no olho. Isso é o que faz o sistema dizer "você quer Transformers, mas atenção
está 🔴" sem depender de sorte.

**Repetição espaçada.** Domínio mais acertos consecutivos dão o intervalo, por tabela fixa. Três
ajustes tiram a rigidez: erro recorrente corta o intervalo pela metade, conceito com muitos
dependentes tem teto, prazo declarado comprime tudo.

**Progresso honesto.** O painel é calculado do grafo, não escrito de memória. Ele não consegue
inflar.

Formato em `_motor/grafo.md`.

## Por que tabela, e não um arquivo por conceito

Tabela única se lê de uma vez. Trinta arquivos exigiriam trinta leituras para responder "o que
vence hoje", e na prática o modelo leria cinco e chutaria o resto.

## A regra anti-alucinação

A parte mais importante do projeto, e a mais barata.

"Nunca invente referência" é intenção, e intenção não impede nada. O que impede é regra de
processo, verificável por quem lê o arquivo depois:

**Nunca escreva uma URL que você não abriu.** Fonte lembrada vai para a seção `Não verificadas`
com esse rótulo. Sem internet na sessão, o sistema diz que não pesquisou, na primeira frase.

Qualquer pessoa consegue auditar isso abrindo `fontes.md`. É essa a diferença entre uma promessa
e um mecanismo.

Junto vem o sistema de rótulos de `_motor/niveis-de-evidencia.md`, que separa fato estabelecido
de hipótese e de interpretação, para a pessoa não sair com opinião na cabeça achando que é
consenso.

## As permissões

`.claude/settings.json` libera escrita **só dentro de `STUDY/`**. Isso é o que faz a autonomia
existir na prática: sem essas linhas, a pessoa aprovaria arquivo por arquivo e desistiria na
terceira aula.

O escopo é apertado de propósito. O sistema não tem permissão de escrever no próprio motor, nem
de rodar comando arbitrário. `git commit` é liberado porque é local e reversível. `git push` não
é, porque é a única ação que tira dado do computador dela.

## O painel, e por que ele é um arquivo `.js` e não `.json`

Markdown é a verdade porque o modelo lê e escreve bem, e o git versiona. Mas markdown não é
lugar de estudar. Então existe uma camada por cima: `painel.html` mais `dados.js`, dentro da
pasta de cada assunto.

A página é uma cópia estável que ninguém edita. Os dados são reescritos a cada sessão, a partir
do grafo. Separar os dois foi decisão de confiabilidade: regerar um arquivo de dados é uma
tarefa que o modelo faz certo sempre, regerar uma página inteira não.

Os dados são `.js` com `window.DADOS = {...}`, carregado por `<script src>`. Não é `.json` lido
por `fetch` porque `fetch` sobre `file://` é bloqueado por CORS em todo navegador moderno, e a
página abriria vazia. `<script src>` funciona. Foi isso que permitiu zero servidor.

O que a página não faz é escrever. Resultado de flashcard sai como texto com botão de copiar, e
a pessoa cola no Claude. É um passo manual declarado na própria tela. A alternativa seria um
servidor local, o que mataria a instalação de três passos.

## Zero dependência

Sem Python, sem Node, sem chave de API, sem banco. Só markdown e o Claude Code.

Custo dessa escolha: nada de PDF, nada de slide, nada de gráfico renderizado. Mermaid resolve
diagrama porque o GitHub renderiza sozinho.

O motivo é simples: quem recebe o projeto não vai depurar instalação. Um passo a mais no
começo é a diferença entre usar e desistir.

## O que foi deixado de fora, de propósito

Projeto prático guiado, avaliação por transferência com rubrica, estrutura profundamente
específica por domínio, exportação para Anki. Tudo bom, tudo depois. Uma primeira versão que
faz trilha, aula, teste, revisão e fonte verificada, bem feitas, já é mais do que alguém
consegue consumir no primeiro mês.

## O que mais provavelmente vai quebrar primeiro

Escrito aqui porque é melhor prever que descobrir.

**Grafo grande.** Acima de uns 60 conceitos a tabela fica pesada de reescrever inteira a cada
sessão. Se acontecer, quebre por módulo em vez de aumentar o arquivo.

**Pré-requisito errado no começo.** O grafo nasce na primeira sessão, quando se sabe menos do
assunto do que se vai saber. Ligação errada só aparece semanas depois, como uma aula que não
faz sentido. É esperado, e conserta-se editando a tabela.

**Sessão longa demais.** O modelo atualizando grafo, escrevendo material e dando aula na mesma
conversa longa vai começar a esquecer de atualizar o grafo. Por isso a skill `progresso` manda
fechar sempre, e por isso a ordem lá é grafo primeiro.

## Adaptar

Tudo é texto. Não tem código.

- Regra de estudo que não combina com você: edite a skill em `.claude/skills/<nome>/SKILL.md`
- Intervalo de revisão: a tabela de `_motor/repeticao-espacada.md`
- Formato de material: `_motor/templates/`
- Modo novo: crie `.claude/skills/<nome>/SKILL.md` com `name` e `description` no cabeçalho, e
  acrescente a linha na tabela do `CLAUDE.md`
