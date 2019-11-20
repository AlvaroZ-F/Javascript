class Ball {

	constructor (x, y, speedX, speedY, ratio, color) {
		this.px = x;
		this.py = y;
		this.spX = speedX;
		this.spY = speedY;
		this.r = ratio;
		this.color = color;
		this.tag = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		this.tag.setAttribute("cx", this.px);
		this.tag.setAttribute("cy", this.py);
		this.tag.setAttribute("r", this.r);
		this.tag.setAttribute("fill", this.color);
	}

	move () {
		if ((this.px+this.spX-this.r) < 0)
		this.px = this.px + Math.random()*(this.speed - (this.speed / 2)) + (this.speed / 2);
		this.py = this.py + Math.random()*(this.speed - (this.speed / 2)) + (this.speed / 2);
	}

	draw () {

	}
}

window.onload = () => {
	var pelotas = [new Bola...]

	setInterval( () => {
		for (ball of balls) {
			ball.move();
		}

		for (ball of balls) {
			ball.draw();
		}
	});
}