new Vue({
	el:'#vue-app',
	data: {
		age: 20,
		a: 0,
		b: 0
	},
	methods: {
		
	},
	computed: {
		addToA: function() {
			console.log('addToA');
			return this.a + this.age;
		},
		addToB: function() {
			console.log('addToB');
			return this.b + this.age;
		}
	}
});

/*
	Computed properties is another object just like methods, that'd contain all
	these functions we want to run separately. If we use "methods" object, for 
	instance, in our application once we click any of the two buttons, we'd see
	by the console log, that both functions ran. For efficiency, we want to use
	computed methods; once we click one of the buttons, it'd ONLY perform the 
	specified computed method.
	Also, unlike with methods, we can type them without the () inside the html
*/