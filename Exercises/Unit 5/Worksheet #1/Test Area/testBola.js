class bola {
	constructor (x, y, speed, color) {
		this.px = x;
		this.py = y;
		this.speed = speed;
		this.color = color;
	}

	mover() {
		this.px = this.px + this.speed;
		this.py = this.py + this.speed;
	}

	dibujar(){

	}
}

setInterval(buclePrincipal, 10);

arraybolas = new Array();

buclePrincipal {
	for (bola of arraybolas){
		bola.mover();
	}
}