# Cookenu

Revisão React II<br>
O código desse repositório é apenas um template do create-react-app limpo e servirá como ponto inicial para a revisão.

## Introdução

Estudamos inúmeros conceitos e ferramentas do React ao longo dos últimos meses e finalmente chegamos no fim do front-end! É normal o conteúdo ainda estar nebuloso na cabeça, então faremos uma dinâmica de revisão implementando do zero um aplicativo com tudo que foi visto no curso.

Esse projeto não substitui outras atividades obrigatórias e deve ser referenciado apenas como um material extra de revisão.<br>
Apesar de não esperarmos entregas do mesmo, é recomendado que ele seja desenvolvido para facilitar o entendimento da matéria.

## Resumo do aplicativo

O Cookenu é uma rede social onde as pessoas podem compartilhar suas receitas culinárias.<br>
Para utilizar o site é necessário criar uma conta, não sendo possível visualizar nem criar receitas sem antes ter feito o login.

## API

A API possui um mecanismo de economia de recursos automático: caso ela não seja utilizada por 15 minutos o serviço é desligado.<br>
Isso faz com que a primeira requisição após 15 minutos demande mais tempo para ser respondida, pois o serviço precisa ser reiniciado.<br>
Esse processo leva em torno de 20 a 30 segundos, então levem isso em consideração quando estiverem se integrando com ela.

https://documenter.getpostman.com/view/21151478/2s8YzMZRju#intro

## Exemplo de implementação

https://cookenu-v1.surge.sh/

O código completo da implementação será disponibilizado ao longo da dinâmica.

## Conta para teste
- fulana@gmail.com
- fulana123
