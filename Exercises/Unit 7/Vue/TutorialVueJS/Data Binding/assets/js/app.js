new Vue({
	el:'#vue-app',
	data: {
		name: 'Alvaro',
		job: 'Artist',
		website: 'https://www.google.com/',
		websiteTag: '<a href="https://www.google.com/">Something</a>'
	},
	methods: {
		greet: function(time){
			return 'Good' + time + '' + this.name;
		}
	}
});