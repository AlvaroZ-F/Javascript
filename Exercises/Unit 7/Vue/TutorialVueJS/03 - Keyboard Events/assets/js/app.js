new Vue({
	el:'#vue-app',
	data: {
		age: 25,
		x: 0,
		y: 0
	},
	methods: {
		add: function(inc){
			this.age += inc;
		},
		substract: function(dec){
			this.age -= dec;
		},
		updateXY: function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click: function(){
			alert("You've clicked me");
		}
	}
});

/* If you use @ instead of v-on it'd still work, it's a shortcut for Vue */