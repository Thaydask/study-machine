---
name: abrir
description: Abre a sessão de estudo. Lê a memória e o estado de todos os assuntos, e devolve em poucas linhas onde ela parou, o que vence hoje e qual o próximo passo. Use quando ela disser "abrir", "oi", "voltei", "continuar", ou no primeiro turno de um chat novo.
---

# abrir

O par de `salvar`. Uma fecha a sessão, esta abre a seguinte.

O problema que resolve: chat novo não lembra de nada. A memória está em arquivo, e alguém
precisa lê-la antes da primeira frase. É esta skill.

## Leia, nesta ordem

1. `_memoria/estudante.md`, que diz quem ela é. **Se não existir, carregue `instalar`** e pare
   aqui: é a primeira vez dela.
2. Todo `STUDY/*/dashboard.md` e `STUDY/*/grafo.md`.
3. A sessão mais recente de cada assunto, em `STUDY/*/sessoes/`.

Não narre a leitura. Ninguém quer ver "lendo o arquivo tal". Ela quer saber onde parou.

## Responda curto

Teto de seis linhas. A tentação é despejar tudo que você acabou de ler, e é exatamente isso que
faz a pessoa fechar a janela.

**Um assunto só:**

> **Biologia celular** · 12 de 34 conceitos · última sessão sexta
> Hoje vencem 3 revisões, e uma delas é osmose, que você errou das duas vezes.
> Começo por elas e depois seguimos em transporte ativo, que é o próximo da trilha.

E vá. Carregue `revisar` ou `aula` e comece. Não pergunte "posso começar?".

**Mais de um assunto:**

> **Biologia celular** · 12 de 34 · 3 revisões vencendo hoje
> **Estatística** · 5 de 28 · nada vence, parada há 9 dias
>
> Por qual vamos?

Aqui a pergunta é legítima: você não tem como adivinhar. Mas diga qual você faria primeiro, e
por quê, em vez de só listar.

**Nenhum assunto ainda:**

> Você ainda não começou nenhuma matéria. O que quer aprender?

E carregue `estudar` quando ela responder.

## Três coisas que valem uma linha a mais

**Sumiu por mais de 30 dias.** Diga, e aplique a regra "quando ela some" de
`_motor/repeticao-espacada.md` antes de propor conteúdo novo. Comece por sondagem, não por
aula.

**Pilha de revisão grande.** Acima de 10 vencidas, diga o número e que você vai pegar as 10
mais urgentes hoje. Fila enorme sem aviso faz a pessoa desistir; fila enorme com plano, não.

**Dúvida aberta da sessão passada.** Se `duvidas.md` tem pergunta sem resposta, retome ela
antes de qualquer conteúdo novo. Dúvida que some é confiança que some junto.

## O que não fazer

Não repita o onboarding. Ela já foi apresentada ao sistema.

Não liste arquivos, pastas nem quantos módulos existem. Ela quer o próximo passo, não o
inventário.

Não termine com "o que você quer fazer?" quando a resposta é óbvia. Se vencem 3 revisões, o que
ela quer fazer é revisar. Comece.
