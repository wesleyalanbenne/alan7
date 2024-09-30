function setup() {//configuracao
  createCanvas(400, 400);//tamanho da tela
}

function draw() {//desenhar
  background("black");//cor de fundo
  fill("pink");//cor da letra
  textSize(64);//tamanho da letra
  textAlign(CENTER, CENTER)//posicao da letra
  
  let maximo = width;//maximo de largura
  let minimo = 0;//começa no 0
  let palavra = "abroba";//palavra escrita
  let quantidade = map(mouseX, 0, width, 1, palavra.length);//e oque faz as letras aparecerem na tela
  let parcial = palavra.substring(0,quantidade);// volta no 0
  text(parcial,200,200);//alterar posicao da letra
  
}
