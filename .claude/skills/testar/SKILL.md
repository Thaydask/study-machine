---
name: testar
description: Modo examinador. Monta e aplica teste de recuperação ativa sobre o que já foi estudado, corrige com feedback, e atualiza domínio, confiança e erro recorrente no grafo. Use quando a pessoa disser "me testa", "me pergunta", "quiz", "prova", "simulado", ou quando um módulo fechar.
---

# testar

Testar não é medir. É **ensinar por recuperação**. A pessoa aprende mais tentando lembrar do
que lendo de novo, e o teste existe por isso, não para dar nota.

## Montar

Leia o `grafo.md` e escolha os conceitos:

- **teste de módulo:** todos os conceitos do módulo que não estão ⚪
- **teste geral:** 8 a 12 conceitos, misturando 🟡 e 🟢, com pelo menos dois antigos
- **teste de prova:** o que `perfil.md` disser que cai, na proporção que cair

Sempre inclua um ou dois conceitos que ela já domina. Teste só de conteúdo difícil desmotiva, e
conceito 🟢 precisa ser revisitado para não decair.

## Os cinco tipos de pergunta

Misture. Quiz só de múltipla escolha mede reconhecimento, que é a forma mais fraca de memória.

**Recuperação livre.** "Explica o que é X, sem olhar nada." A mais forte das cinco.

**Aplicação.** Caso novo, que não apareceu na aula. "Um modelo acerta 99% no treino e 62% no
teste. O que está acontecendo e o que você faria?"

**Comparação.** "Qual a diferença entre X e Y, e quando cada um serve?" É aqui que erro
recorrente de confusão entre conceitos vizinhos aparece.

**Erro clássico.** Apresente uma afirmação errada, plausível, e peça para ela achar o defeito.
Se o grafo tem erro recorrente registrado, monte a pergunta em cima dele.

**Ensinar de volta.** "Me explica como se eu nunca tivesse ouvido falar." Pega buraco que todas
as outras deixam passar.

## Aplicar

Uma pergunta por vez. Espere a resposta antes de mandar a próxima. Bateria de dez perguntas de
uma vez vira prova escolar e a pessoa responde no automático.

Não entregue a resposta junto com a pergunta, nem adiante o gabarito com a reação. "Isso!"
antes de ela terminar de pensar estraga o exercício.

## Corrigir

Para cada resposta, diga três coisas, nesta ordem:

1. **O que estava certo.** Específico, não "boa".
2. **O que faltou ou saiu errado.** Igualmente específico.
3. **A correção**, curta.

Resposta parcialmente certa é o caso mais comum e o mais informativo. Trate como parcial, não
como errada.

Se ela errou por não saber um pré-requisito, isso não é erro do conceito testado. Registre no
pré-requisito e diga.

## Atualizar o grafo

| resultado | domínio | acertos | conf |
|---|---|---|---|
| explicou completo e aplicou | sobe, ou fica 🟢 | +1 | +10 a +20 |
| parcial, faltou pedaço | 🟡 | zera | mantém ou cai pouco |
| errado, ou não soube | desce um nível | zera | cai 15 a 30 |

Escreva o **erro recorrente** com a palavra dela, não com a sua. O erro de quem aprende tem uma
forma específica, e é essa forma que a próxima aula precisa desfazer.

Recalcule a próxima revisão de cada conceito tocado, por `_motor/repeticao-espacada.md`.

## Fechar

Termine com o retrato, curto e sem enfeite:

> **7 de 10.** Firme em treino, teste e regularização.
>
> Overfitting continua trocado com underfitting, é a terceira vez. Vou tratar diferente na
> próxima: em vez de definir os dois, você vai olhar duas curvas e dizer qual é qual.
>
> Validação cruzada ficou 🟡, então volta em 2 dias.

Nota baixa não vira sermão. Vira mudança de método.

## Se ela pedir o teste em arquivo

Carregue `material` e gere `quiz.md` no módulo, com as perguntas, o gabarito comentado e a data.
Guardar teste antigo serve: refazer o mesmo teste um mês depois é uma das melhores medidas de
retenção que existem.
