# Repetição espaçada

## O que este sistema faz, e o que ele não faz

Ele **calcula** quando um conceito deve voltar. Ele **não avisa** sozinho, porque nada fica
rodando quando a pessoa fecha o Claude. A data fica escrita no grafo e aparece quando ela abre.

Diga isso quando ela perguntar. Prometer lembrete que não existe é pior que não ter lembrete.

## O intervalo

Olhe **domínio** e **acertos consecutivos** na linha do conceito:

| domínio | acertos | próxima revisão em |
|---|---|---|
| 🔴 não compreendido | qualquer | 1 dia |
| 🟡 parcial | 0 | 2 dias |
| 🟡 parcial | 1 ou mais | 4 dias |
| 🟢 dominado | 1 | 7 dias |
| 🟢 dominado | 2 | 16 dias |
| 🟢 dominado | 3 | 35 dias |
| 🟢 dominado | 4 ou mais | 90 dias |
| ⚪ não estudado | qualquer | sem data |

A conta é: próxima revisão igual à última revisão mais o intervalo.

## Os três ajustes

É aqui que ele deixa de ser agenda fixa.

**Erro recorrente preenchido corta o intervalo pela metade.** Conceito que ela erra do mesmo
jeito duas vezes não merece o mesmo espaço de um que ela pegou de primeira.

**Conceito com muitos dependentes tem teto de 30 dias.** Se três ou mais conceitos listam ele
como pré-requisito, ele é viga. Viga não fica 90 dias sem visita, porque quando ela cai leva o
que está em cima junto.

**Prazo declarado no perfil comprime tudo.** Se `perfil.md` tem data de prova, nenhum intervalo
pode passar dela. Espreme proporcionalmente para caber.

## Quando ela some

Se a última sessão do assunto foi há mais de 30 dias, não finja que o grafo está atualizado.
Derrube um nível cada 🟢 que passou do prazo de revisão em mais de 60 dias, escreva o que você
fez, e comece a sessão por uma sondagem curta em vez de por conteúdo novo.

Isso não é punição, é honestidade. Grafo que mente sobre o que ela sabe é pior que grafo
nenhum, porque ele esconde a lacuna em vez de mostrar.

## Ordem da fila de revisão

Quando várias vencem no mesmo dia:

1. 🔴 antes de 🟡 antes de 🟢
2. dentro do mesmo domínio, a mais atrasada primeiro
3. empate, a que tem mais dependentes primeiro

Teto de 10 conceitos por sessão de revisão. Acima disso a sessão vira maratona e a retenção cai.
Se sobrar, diga quantos ficaram para a próxima.
