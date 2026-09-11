---
name: estudar
description: Porta de entrada da máquina de estudos. Começa um assunto novo (diagnóstico, árvore de conhecimento, plano, dashboard) ou retoma um que já existe de onde parou. Use quando a pessoa disser "vamos estudar", "quero estudar X", "quero aprender X", "continua de onde paramos", ou abrir a sessão sem dizer o que quer.
---

# estudar

Duas situações, e você decide qual é olhando a pasta `STUDY/` antes de responder qualquer coisa.

## Situação A: retomar

Existe pasta em `STUDY/` e a pessoa não nomeou assunto novo.

1. Leia `dashboard.md` e `grafo.md` do assunto (ou de todos, se houver mais de um).
2. Calcule o que vence hoje pela regra de `_motor/repeticao-espacada.md`.
3. Abra com o estado real, curto, e já com a proposta do que fazer agora:

> **Aprendizado de máquina** · 12 de 34 conceitos · última sessão em 08/09
>
> Hoje vencem 3 revisões, e uma delas é o overfitting, que você errou das duas vezes.
>
> Proponho: 10 minutos de revisão e depois seguimos em validação cruzada, que é o próximo da
> trilha. Começando pela revisão.

E comece. Não espere o "pode ir".

Se houver mais de um assunto, liste em uma linha cada e pergunte só qual. Essa é pergunta
legítima, você não tem como adivinhar.

Se a última sessão foi há mais de 30 dias, aplique a regra "quando ela some" de
`_motor/repeticao-espacada.md` antes de propor qualquer coisa.

## Situação B: assunto novo

### 1. Diagnóstico, em uma mensagem só

Pergunte no máximo quatro coisas, juntas, e diga que ela pode pular o que não souber:

- Por que quer aprender isso, e para quê vai usar
- O que já sabe do assunto hoje, mesmo que seja nada
- Quanto tempo por semana, e se existe prazo
- Se tem material que já queira usar (livro, curso, artigo, apostila)

O que ela não responder, você **estima** e registra como hipótese em `perfil.md`, marcado com a
palavra hipótese. Não insista, não repita a pergunta, não trave o fluxo.

### 2. Escreva o perfil

`STUDY/<assunto>/perfil.md`, a partir de `_motor/templates/perfil.md`. Slug do assunto em
minúsculas, sem acento, com hífen.

### 3. Monte o grafo

É o passo que mais importa, e o único que é difícil de refazer depois.

- Entre 20 e 40 conceitos para um assunto inteiro. Menos que isso é superficial, mais que isso
  ela nunca termina e o dashboard vira desanimador.
- Agrupe em 4 a 8 módulos.
- Ligue os pré-requisitos de verdade. Pré-requisito errado é o defeito que estraga a detecção
  de lacuna, e ele só aparece semanas depois.
- Todos nascem ⚪, conf 0, sem datas.
- Se ela disse que já sabe alguma coisa, **não** marque 🟢 por declaração. Marque ⚪ e sonde nos
  primeiros minutos. Nível declarado é quase sempre otimista.

Formato em `_motor/grafo.md`.

### 4. Adapte a estrutura ao domínio

Não force a mesma forma em tudo. O grafo e o dashboard existem sempre. O resto depende:

| domínio | o que o material privilegia |
|---|---|
| programação, engenharia | exercício, código rodando, projeto, depuração |
| história, direito, filosofia | fonte primária, cronologia, argumento e contra-argumento, ensaio |
| medicina, biologia | mecanismo, caso clínico, classificação, imagem |
| matemática, física | dedução, resolução de problema, erro clássico |
| idiomas | vocabulário, gramática, frase de uso, repetição espaçada pesada |
| concurso, prova específica | edital como grafo, questão anterior, simulado cronometrado |

Quando o assunto não estiver nessa lista, escolha por analogia e escreva em `perfil.md` qual
forma você adotou e por quê.

### 5. Escreva o plano e o painel

`plano.md` com a sequência de módulos e o tempo estimado de cada um, calibrado pelas horas por
semana que ela declarou. Sem prometer data que você não pode garantir.

`dashboard.md` a partir de `_motor/templates/dashboard.md`.

### 6. Crie o painel

Copie o arquivo **literalmente**, com `cp _motor/painel.html STUDY/<assunto>/painel.html`.
Não reescreva o conteúdo à mão: são quase 400 linhas e qualquer paráfrase quebra a página.
Depois escreva o
primeiro `STUDY/<assunto>/dados.js` a partir do grafo que você acabou de montar. Contrato e
exemplo preenchido em `_motor/painel.md`.

Diga onde ela abre, com o caminho completo. É a primeira coisa concreta que ela vê, e é o que
faz o sistema não parecer uma pasta de arquivos de texto.

### 7. Comece a primeira aula na mesma sessão

Este é o ponto onde a maioria dos sistemas falha: entregam a estrutura e param. Não pare.

Diga em três linhas o que você montou, e emende a primeira aula pelo primeiro conceito sem
pré-requisito. Carregue a skill `aula`.

Ela tem que **aprender alguma coisa hoje**, não só ganhar pastas.

## O que nunca fazer aqui

Criar as pastas todas de uma vez. Pasta nasce com o primeiro arquivo dentro dela.

Perguntar se pode criar a estrutura, se pode montar o plano, se pode pesquisar. Pode.

Entregar um plano de 6 meses para quem declarou 2 horas por semana. Faça a conta e mostre.
