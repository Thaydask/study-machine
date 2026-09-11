# Mapa mental: <assunto>

Gerado a partir de `grafo.md` em <AAAA-MM-DD>. Não edite este arquivo na mão: edite o grafo e
regenere, senão os dois divergem e o grafo deixa de ser a verdade.

O GitHub renderiza Mermaid sozinho, sem instalar nada.

## Hierarquia, com o domínio de cada conceito

```mermaid
mindmap
  root((Aprendizado de máquina))
    Fundamentos
      O que é 🟢
      Treino e teste 🟢
    Avaliação
      Overfitting 🟡
      Validação cruzada ⚪
    Modelos
      Regressão linear ⚪
      Árvore de decisão ⚪
```

## Pré-requisitos, que é o que o mindmap não mostra

```mermaid
graph LR
  c01[O que é 🟢] --> c02[Treino e teste 🟢]
  c02 --> c03[Overfitting 🟡]
  c03 --> c04[Validação cruzada ⚪]
  c02 --> c05[Regressão linear ⚪]
```

O segundo diagrama é o que revela lacuna. Se um nó ⚪ está no caminho entre dois 🟢, ele é
buraco no meio da estrada e deve ser o próximo estudado.
