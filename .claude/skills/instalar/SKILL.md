---
name: instalar
description: Primeira vez. Confere que o ambiente funciona, conhece a pessoa, escreve o perfil global de estudante e já emenda no primeiro assunto. Use quando ela disser "instalar", "começar", "primeira vez", ou quando `_memoria/estudante.md` ainda não existir.
---

# instalar

Nada é instalado aqui. As skills já vieram no repositório e o Claude Code carregou sozinho ao
abrir a pasta. Se esta skill está rodando, a prova já foi dada.

O que esta skill faz é outra coisa, e é necessária: provar para ela que funciona, descobrir
quem ela é uma vez só, e não deixar ela sozinha na frente de uma pasta vazia.

**Nunca diga que instalou alguma coisa.** Isso seria mentira, e a primeira frase do sistema não
pode ser mentira.

## 1. Conferência, em silêncio

Faça, sem narrar passo a passo:

| checar | como | se faltar |
|---|---|---|
| escrita | a pasta `STUDY/` existe e é gravável | avise que ela precisa aceitar confiar na pasta |
| git | `git status` responde | siga assim mesmo, só sem histórico |
| internet | uma busca curta de teste | siga assim mesmo, mas avise antes de pesquisar qualquer coisa |

Reporte em três linhas, no máximo. Pessoa nenhuma quer ler relatório de diagnóstico.

> Tudo no lugar. Escrita ok, git ok, internet ok.
> Nada foi instalado: as skills já vieram na pasta e estão carregadas.

Se a internet falhar, diga a frase que importa: sem internet a máquina não pesquisa, e vai
dizer isso toda vez em vez de inventar fonte.

## 2. Quem é ela, em uma mensagem

Quatro perguntas, juntas, e diga que pode pular qualquer uma:

- Como prefere ser chamada
- O que ela estuda ou quer estudar, e para quê
- Quanto tempo por semana, mais ou menos
- Prefere explicação curta e direta, ou com mais exemplo e contexto

Não insista no que ela não responder. Estime e marque como hipótese.

## 3. Escreva `_memoria/estudante.md`

É o perfil **global**, que vale para todos os assuntos. Existe para ela nunca mais responder
essas perguntas.

```markdown
# Estudante

- **Chamar de:** <nome>
- **Estuda:** <o quê, e por quê>
- **Tempo:** <horas por semana>
- **Prefere:** <explicação curta / mais exemplo>
- **Idioma:** <o que ela usou>
- **Começou em:** <AAAA-MM-DD>

## Observado

Preenchido com o tempo, pela observação, não pela declaração dela.

- analogia que funcionou
- analogia que confundiu
- rende melhor em sessão curta ou longa
- foge de qual tipo de exercício

## Hipóteses

- <o que ela não respondeu e você estimou>
```

A seção **Observado** é a que faz diferença no segundo mês. Toda skill que ensinar ou testar
acrescenta uma linha ali quando notar alguma coisa. Declaração é palpite, observação é dado.

## 4. As três coisas que ela precisa saber

Não explique o sistema inteiro. Três, e curtas:

**A página.** Cada assunto ganha um `painel.html` que ela abre com dois cliques. É por ali que
se estuda, não pelos arquivos de texto.

**Aqui ela produz.** Toda aula termina com ela explicando, resolvendo ou comparando. Ler não
move o progresso. Isso incomoda no começo e é o motivo de funcionar.

**Fonte é conferida.** A máquina nunca escreve um link que não abriu. O que ela lembrou de
cabeça aparece separado, em amarelo.

## 5. Emende no primeiro assunto

Não termine com "pronto, é só pedir". Pergunte o assunto e vá:

> Pronto. O que você quer aprender primeiro?

Quando ela responder, carregue `estudar` e siga. Ela tem que sair da primeira conversa com um
assunto montado, uma aula dada e um painel aberto.

Se ela não souber por onde começar, ofereça três opções a partir do que ela disse na pergunta 2,
não uma lista genérica.

## Se já existe `_memoria/estudante.md`

Ela já passou por aqui. Não repita o onboarding. Diga o que já existe e ofereça continuar:

> Você já está configurada, e tem 2 assuntos em andamento: biologia celular e estatística.
> Em biologia vencem 3 revisões hoje. Continuo por lá?

E carregue `estudar`.
