# O grafo de conhecimento

O grafo é a espinha do sistema. Ele é a **única fonte de verdade** sobre o que a pessoa sabe.
Aulas, resumos e mapas são derivados dele. Se o grafo e um arquivo discordarem, o grafo ganha.

Vive em `STUDY/<assunto>/grafo.md`, um arquivo por assunto.

## Formato

Uma tabela. Uma linha por conceito. Nada além disso, porque tabela única se lê de uma vez e não
se perde de si mesma.

| id | conceito | módulo | pré-req | domínio | conf | últ. revisão | próx. revisão | acertos | erro recorrente |
|----|----------|--------|---------|---------|------|--------------|---------------|---------|-----------------|
| c01 | O que é aprendizado de máquina | fundamentos | - | 🟢 | 85 | 2026-09-11 | 2026-09-18 | 2 | - |
| c02 | Dado de treino e dado de teste | fundamentos | c01 | 🟢 | 78 | 2026-09-11 | 2026-09-18 | 1 | - |
| c03 | Overfitting | avaliacao | c02 | 🟡 | 55 | 2026-09-11 | 2026-09-14 | 0 | troca com underfitting |
| c04 | Validação cruzada | avaliacao | c03 | ⚪ | 0 | - | - | 0 | - |

## As colunas

**id** sequencial, `c01`, `c02`. Nunca reaproveite o id de um conceito removido.

**conceito** nome curto, do jeito que a pessoa vai reconhecer. É a ideia, não o título do
capítulo. "Overfitting", não "Capítulo 4: problemas de generalização".

**módulo** agrupador em minúsculas sem acento. Vira nome de pasta quando o material for criado.

**pré-req** ids separados por vírgula, ou `-`. É o que faz a detecção de lacuna funcionar.
Conceito sem pré-requisito é porta de entrada.

**domínio** um de quatro:

| símbolo | significa | quando |
|---|---|---|
| ⚪ | não estudado | ainda não foi apresentado |
| 🔴 | não compreendido | foi apresentado e ela errou ou não soube explicar |
| 🟡 | parcial | acerta às vezes, ou explica com buraco |
| 🟢 | dominado | explicou com as palavras dela e aplicou em situação nova |

**conf** confiança de 0 a 100. É a sua estimativa do quanto ela sustenta o conceito, não nota de
prova. Sobe com acerto e com explicação boa, cai com erro e com tempo parado.

**últ. revisão / próx. revisão** datas no formato AAAA-MM-DD. O cálculo da próxima está em
`_motor/repeticao-espacada.md`.

**acertos** acertos consecutivos. Zera no primeiro erro. É o que define o tamanho do intervalo.

**erro recorrente** texto curto do erro que ela repete. É o campo mais valioso da tabela, porque
é ele que faz a próxima aula ser diferente da anterior. Vazio é `-`.

## Detecção de lacuna

Não é intuição, é consulta. Para chegar no conceito X:

1. Junte os pré-requisitos de X, e os pré-requisitos deles, recursivamente.
2. Filtre os que não estão 🟢.
3. Se sobrou alguém, X não é o próximo passo. O próximo passo é o mais fundo da lista.

Diga isso em voz alta quando acontecer:

> Existe uma lacuna. Você quer Transformers, mas o mecanismo de atenção está 🔴 e ele é
> pré-requisito. São uns 20 minutos. Vou por ele primeiro.

E aí vá. Não peça permissão para tapar buraco.

## Quando o grafo muda

| evento | o que muda |
|---|---|
| assunto criado | grafo nasce inteiro, todos ⚪ |
| conceito ensinado | ⚪ vira 🔴 ou 🟡, conforme a verificação do fim da aula |
| testado, acertou | acertos +1, conf sobe, recalcula próxima revisão |
| testado, errou | acertos zera, conf cai, domínio desce um nível, erro recorrente escrito |
| explicou com as palavras dela e aplicou | 🟡 vira 🟢 |
| pesquisa achou conceito novo | linha nova ⚪, com pré-requisito ligando no que já existe |
| revisão em dia | datas atualizadas |

Atualize o grafo **antes** de terminar a sessão, não depois. Sessão que fecha sem atualizar o
grafo é sessão perdida: na próxima abertura ela não existiu.

## O mapa mental sai daqui

`mapa-mental.md` é o grafo desenhado, não um arquivo paralelo. Regenere a partir da tabela,
nunca edite os dois na mão. Mermaid renderiza sozinho no GitHub, sem instalar nada.
