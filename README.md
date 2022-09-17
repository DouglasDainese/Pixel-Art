# Bem-vindos(a) ao meu 1° projeto que incluiu HTML, CSS e JavaScript o Arte com Pixels!

Neste projeto, eu precisei implementar um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨

Durante o desenvolvimento precisei criar a estrutura da pagina em HTML e desevolver a logica para comprir os requisitos abaixo, foi muito interessante realizar esse desafio em meus estudos como Desenvolvedor web, aprendi entre outras coisas, estilizar a pagina com CSS e logica de programação; tambem foi muito importante para eu aprender como pesquizar, na web, com o fim de resolver os desafios que encontrei.

# Requisitos Obrigatórios

## 1 - Adicione à página o título "Paleta de Cores".

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

A página deve conter uma paleta com quatro opções de cores

- A paleta de cores deve ser um elemento com `ID` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

## 4 - Adicione à página um quadro contendo 25 pixels.

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `ID` denominado `pixel-board`, e cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

## 6 - Defina a cor preta como cor inicial da paleta de cores

- O elemento que posteriormente deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

- O elemento da cor preta deve possuir inicialmente a classe `selected`.

## 7 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.

A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros

- A cor clicada deve receber a `classe` `selected` e a cor previamente selecionada deve perder esta `classe`;

- Somente uma das cores da paleta pode ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será testado:**

- Somente uma cor da paleta de cores pode ter a classe `selected` de cada vez;

- Os pixels dentro do quadro não devem ter a classe `selected` quando são clicados.

## 8 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

**O que será testado:**

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado deve ter a cor alterada, sem influenciar na cor dos demais pixels.

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca

**O que será testado:**

- O botão deve possuir o `ID` `clear-board`;

- O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve possuir o texto `Limpar`;

- O botão ao ser clicado, deve deixar todos os pixels do quadro preenchidos de branco.

# Requisitos Bônus

## 10 - Crie um input que permita à pessoa usuária preencher um novo tamanho para  o quadro de pixels.

A página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels

- O botão, ao ser clicado, deve alterar o tamanho do quadro para **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

## 11 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>O quadro não pode ser definido com menos de 5 ou mais de 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

  1. Para um valor de `board-size` menor que 5, considere 5 `pixels` como o valor padrão;

  2. Para um valor de `board-size` maior que 50, considere 50 `pixels` como o valor padrão.

**O que será testado:**

- A altura do board pode ser igual a 50;

- A altura do board é 5 pixels quando um valor menor que 5 é colocado no input;

- A altura do board é 50 pixels quando um valor maior que 50 é colocado no input.


## 12 - Crie uma função para gerar as cores aleatoriamente, com exceção da cor preta, ao carregar a página.

A primeira cor da sua paleta deve ser a cor preta, e as outras três cores deve ser geradas aleatoriamente.

**O que será testado:**

- A cor preta é a primeira na sua paleta de cores;

- As cores geradas na paleta são diferentes a cada carregamento da página.


