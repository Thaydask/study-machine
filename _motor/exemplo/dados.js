/* Exemplo de dados.js, para ver o painel funcionando antes de estudar qualquer coisa.
   O arquivo real é escrito pelo Claude a partir de STUDY/<assunto>/grafo.md.
   Ninguém edita este arquivo à mão: edita o grafo e pede para atualizar o painel. */

window.DADOS = {
  assunto: "Aprendizado de máquina",
  atualizado: "2026-09-11",
  objetivo: "Conseguir ler um artigo de machine learning e entender o método, não só a conclusão.",

  modulos: [
    { id: "fundamentos", nome: "Fundamentos" },
    { id: "avaliacao",   nome: "Avaliação de modelos" },
    { id: "modelos",     nome: "Modelos clássicos" },
    { id: "redes",       nome: "Redes neurais" }
  ],

  conceitos: [
    { id:"c01", nome:"O que é aprendizado de máquina", modulo:"fundamentos", prereq:[],
      dominio:"🟢", conf:88, ultima:"2026-09-04", proxima:"2026-09-20", acertos:2, erro:"-" },
    { id:"c02", nome:"Dado de treino e dado de teste", modulo:"fundamentos", prereq:["c01"],
      dominio:"🟢", conf:82, ultima:"2026-09-04", proxima:"2026-09-20", acertos:2, erro:"-" },
    { id:"c03", nome:"Variável alvo e atributo", modulo:"fundamentos", prereq:["c01"],
      dominio:"🟢", conf:79, ultima:"2026-09-07", proxima:"2026-09-14", acertos:1, erro:"-" },
    { id:"c04", nome:"Supervisionado e não supervisionado", modulo:"fundamentos", prereq:["c03"],
      dominio:"🟡", conf:58, ultima:"2026-09-09", proxima:"2026-09-11", acertos:0,
      erro:"chama agrupamento de supervisionado quando os grupos têm nome" },

    { id:"c05", nome:"Overfitting", modulo:"avaliacao", prereq:["c02"],
      dominio:"🟡", conf:52, ultima:"2026-09-09", proxima:"2026-09-11", acertos:0,
      erro:"troca overfitting com underfitting" },
    { id:"c06", nome:"Underfitting", modulo:"avaliacao", prereq:["c02"],
      dominio:"🔴", conf:24, ultima:"2026-09-09", proxima:"2026-09-10", acertos:0,
      erro:"acha que é sempre erro de dado, não de modelo simples demais" },
    { id:"c07", nome:"Validação cruzada", modulo:"avaliacao", prereq:["c05","c06"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" },
    { id:"c08", nome:"Matriz de confusão", modulo:"avaliacao", prereq:["c03"],
      dominio:"🟡", conf:61, ultima:"2026-09-08", proxima:"2026-09-12", acertos:1,
      erro:"inverte falso positivo e falso negativo" },
    { id:"c09", nome:"Precisão e revocação", modulo:"avaliacao", prereq:["c08"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" },

    { id:"c10", nome:"Regressão linear", modulo:"modelos", prereq:["c03"],
      dominio:"🟢", conf:76, ultima:"2026-09-06", proxima:"2026-09-13", acertos:1, erro:"-" },
    { id:"c11", nome:"Árvore de decisão", modulo:"modelos", prereq:["c03"],
      dominio:"🟡", conf:49, ultima:"2026-09-08", proxima:"2026-09-12", acertos:0,
      erro:"não sabe dizer por que a árvore decora fácil" },
    { id:"c12", nome:"Regularização", modulo:"modelos", prereq:["c05","c10"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" },

    { id:"c13", nome:"Neurônio artificial", modulo:"redes", prereq:["c10"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" },
    { id:"c14", nome:"Retropropagação", modulo:"redes", prereq:["c13"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" },
    { id:"c15", nome:"Mecanismo de atenção", modulo:"redes", prereq:["c14"],
      dominio:"⚪", conf:0, ultima:"", proxima:"", acertos:0, erro:"-" }
  ],

  flashcards: [
    { conceito:"Overfitting", frente:"O que é overfitting?",
      verso:"Quando o modelo decora o dado de treino em vez de aprender o padrão. Acerta muito no treino e mal no teste." },
    { conceito:"Overfitting e underfitting",
      frente:"Qual a diferença entre overfitting e underfitting, em uma frase?",
      verso:"Overfitting decorou demais e não generaliza. Underfitting nem decorou, é simples demais para o problema." },
    { conceito:"Overfitting",
      frente:"Um modelo acerta 99% no treino e 62% no teste. O que é isso?",
      verso:"Overfitting. A distância entre as duas medidas é o sinal." },
    { conceito:"Dado de treino e dado de teste",
      frente:"Por que o dado de teste não pode ser visto durante o treino?",
      verso:"Porque aí ele deixa de medir generalização e passa a medir memória. O resultado fica otimista e mentiroso." },
    { conceito:"Matriz de confusão",
      frente:"O que é um falso negativo?",
      verso:"O modelo disse que não era, e era. Num exame médico, é a doença que passou batido." },
    { conceito:"Supervisionado e não supervisionado",
      frente:"O que define aprendizado supervisionado?",
      verso:"Existe resposta certa conhecida em cada exemplo de treino. Sem rótulo, é não supervisionado." }
  ],

  aulas: [
    {
      titulo: "Overfitting",
      modulo: "Avaliação de modelos",
      conteudo:
"# Por que isso existe\n" +
"Você treina um modelo, olha o resultado e ele acerta quase tudo. Parece vitória. Aí o modelo encontra dado novo e erra feio. O conceito de overfitting existe para explicar essa queda.\n" +
"\n" +
"# A ideia\n" +
"Overfitting é quando o modelo aprende o **ruído** do conjunto de treino junto com o padrão `[estabelecido]`. Ele não generaliza, ele memoriza. O sinal clássico é a distância entre o desempenho no treino e no teste.\n" +
"\n" +
"Quanto mais flexível o modelo, mais fácil ele decora. Por isso árvore profunda e rede grande sofrem mais que uma reta.\n" +
"\n" +
"# Analogia\n" +
"O aluno que decora a lista de exercícios do professor. Na prova com as mesmas perguntas, tira dez. Na prova com perguntas diferentes do mesmo assunto, quebra.\n" +
"\n" +
"**Onde a analogia quebra:** o aluno sabe que decorou. O modelo não tem essa noção, e nada nele avisa. Quem tem que perceber é você, olhando as duas medidas.\n" +
"\n" +
"# Exemplo\n" +
"Árvore de decisão sem limite de profundidade, com 500 exemplos. Ela cresce até isolar cada exemplo numa folha própria. Acurácia no treino: 100%. No teste: 61%.\n" +
"\n" +
"# Contraexemplo\n" +
"Modelo que erra 30% no treino e 31% no teste **não** é overfitting. É underfitting: ele é simples demais para o problema, e erra parecido nos dois lugares. A assinatura do overfitting é a **distância**, não o erro alto.\n" +
"\n" +
"# Onde isso costuma dar errado\n" +
"O erro que apareceu aqui foi trocar overfitting com underfitting. A regra que funcionou:\n" +
"\n" +
"- olhe as **duas** medidas, nunca uma só\n" +
"- juntas e ruins, é underfitting\n" +
"- distantes, é overfitting\n"
    },
    {
      titulo: "Dado de treino e dado de teste",
      modulo: "Fundamentos",
      conteudo:
"# Por que isso existe\n" +
"Se você avalia o modelo com o mesmo dado que usou para ensiná-lo, a nota não significa nada. Separar existe para a medida dizer a verdade.\n" +
"\n" +
"# A ideia\n" +
"O conjunto é dividido antes de qualquer treino `[estabelecido]`. O modelo vê só a parte de treino. A parte de teste fica guardada e serve uma vez, no fim, para estimar como ele vai se comportar com dado que nunca viu.\n" +
"\n" +
"# Analogia\n" +
"Simulado com questões que caem na prova. A nota do simulado deixa de medir preparo e passa a medir sorte.\n" +
"\n" +
"# Contraexemplo\n" +
"Olhar o teste várias vezes para escolher o melhor modelo **também** contamina, mesmo sem treinar nele. É por isso que existe o conjunto de validação, que é um terceiro pedaço.\n"
    }
  ],

  fontes: {
    verificadas: [
      { titulo:"Attention Is All You Need",
        autor:"Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser e Polosukhin",
        ano:"2017", nivel:"1", url:"https://arxiv.org/abs/1706.03762",
        acessada:"2026-09-11",
        nota:"Artigo que propõe a arquitetura Transformer. É a fonte primária, não um resumo dela. Sustenta c15." }
    ],
    naoVerificadas: [
      { titulo:"Hastie, Tibshirani e Friedman, The Elements of Statistical Learning",
        busca:"Elements of Statistical Learning PDF Stanford" },
      { titulo:"Meta-análise de Cepeda sobre repetição espaçada, por volta de 2006",
        busca:"Cepeda 2006 distributed practice meta-analysis" }
    ]
  },

  sessoes: [
    { data:"2026-09-09", duracao:"35 min",
      resumo:
"Aula nova de **overfitting** e **underfitting**, e a confusão entre os dois apareceu nas duas direções.\n" +
"\n" +
"- funcionou: olhar as duas medidas juntas em vez de definir cada termo\n" +
"- ficou fraco: underfitting, que caiu para não compreendido\n" +
"- próximo passo: comparar duas curvas e dizer qual é qual, sem definição\n" },
    { data:"2026-09-08", duracao:"50 min",
      resumo:"Matriz de confusão e árvore de decisão. Falso positivo e falso negativo ainda invertem." },
    { data:"2026-09-07", duracao:"25 min",
      resumo:"Revisão de variável alvo e atributo. Firmou." }
  ]
};
