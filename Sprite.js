function Sprite(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img;
	this.pos = 0;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura,
					  xCanvas, yCanvas, this.largura, this.altura);
	}

	this.move = function() {
		this.pos++;

		if (this.pos == 30)
			this.pos = 0;

		this.x = Math.floor(this.pos / 5) * this.largura;
	}
}

var background = new Image();
	background.src = "img/bg.png";

var personagem = new Image();
	personagem.src = "img/char.png";

var chao = new Image();
	chao.src = "img/chao.png";

var play = new Image();
	play.src = "img/play.gif";

var gameOver = new Image();
	gameOver.src = "img/gameover.png";

var cano = new Image();
	cano.src = "img/canos.png";

	//desenha a partir do x e y da imagem
var bg = new Sprite(0, 0, 600, 600, background),

	spriteChar = new Sprite(0, 0, 44.625, 57, personagem),

	perdeu = new Sprite(0, 0, 128, 128, gameOver),
	jogar = new Sprite(0, 0, 276, 274, play),
	//novo = new Sprite(68, 721, 287, 93),
	spriteRecord = new Sprite(28, 879, 441, 95),
	spriteChao = new Sprite(0, 5, 1917, 146, chao);
	spriteCano = new Sprite(0, 5, 109, 161, cano);
