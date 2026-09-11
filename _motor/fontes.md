# Fontes

## A regra dura

**Nunca escreva uma URL que você não abriu.**

Não tem exceção. Nem para site famoso, nem para link que com certeza é aquele, nem para DOI que
parece óbvio. URL inventada é o pior defeito possível num sistema de estudo, porque ela custa a
confiança de tudo o mais que estiver certo no mesmo arquivo.

Quer indicar onde procurar sem ter aberto? Escreva o termo de busca, não o link:

> Procure por `spaced repetition Cepeda meta-analysis` no Google Acadêmico.

## Hierarquia

Da mais forte para a mais fraca:

1. Artigo científico revisado por pares
2. Universidade
3. Instituição governamental
4. Organização internacional
5. Documentação oficial daquilo que se estuda
6. Livro e editora acadêmica reconhecida
7. Associação profissional da área
8. Jornalismo de reputação alta, para assunto atual
9. O resto, e só quando nada acima existir

Aparecer primeiro no Google não é credencial. Blog de alguém com nome e competência conhecidos
na área vale mais que portal grande sem autor assinado, e os dois são nível 9.

## Os dois blocos do arquivo

`STUDY/<assunto>/fontes.md` tem duas seções, sempre, mesmo vazias. Modelo completo em
`_motor/templates/fontes.md`.

**Verificadas** são as que você abriu e leu nesta sessão ou em outra registrada. Cada uma
guarda título, autor ou instituição, ano, URL, tipo e nível, data de acesso, e quais conceitos
do grafo ela sustenta.

**Não verificadas** são as citadas de memória. Não sustentam afirmação sozinhas. Servem de
pista para procurar depois, e levam esse rótulo escrito.

Fonte sobe de Não verificadas para Verificadas quando for aberta de verdade. Nunca no sentido
contrário, e nunca por parecer certa.

## Sem acesso à internet

Se você não consegue buscar nem abrir página nesta sessão, diga na hora:

> Não tenho acesso à internet aqui, então não pesquisei. O que vem abaixo é o que eu sei, com
> os rótulos de evidência, e as pistas de onde confirmar.

E escreva tudo em Não verificadas. Sistema que finge ter pesquisado é pior que sistema que
avisa que não pesquisou.

## O que fazer com material que a pessoa trouxe

Link, PDF, vídeo, apostila, foto de página de livro.

1. Leia de verdade, o material inteiro, não o começo.
2. Avalie a fonte pela hierarquia acima, e diga o nível em voz alta.
3. Extraia a estrutura, os conceitos e as afirmações que sustentam alguma coisa.
4. Compare com o grafo: o que confirma, o que acrescenta, o que **contradiz**.
5. Contradição é o achado mais importante. Nunca deixe passar calado.
6. Crie linha nova no grafo para conceito novo, ligada por pré-requisito no que já existe.
7. Registre em `fontes.md`, em Verificadas, com a data.

Material trazido pela pessoa vira **módulo de estudo**, não resumo. Resumo ela consegue em
qualquer lugar.
