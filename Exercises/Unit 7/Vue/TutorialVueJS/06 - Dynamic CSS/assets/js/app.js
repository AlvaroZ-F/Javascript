new Vue({
	el:'#vue-app',
	data: {
		available: false,
		nearby: false
	},
	methods: {
		
	},
	computed: {
		compClasses: function() {
			return {
				available: this.available,
				nearby: this.nearby
			}
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