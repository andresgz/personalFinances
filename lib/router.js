Router.configure({
	layoutTemplate: 'Layout',
	notFoundTemplate: '404',
	loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('Months');
});

Router.route('/:_month', function(){
	this.render('Days');
	},{
		data: function() {
	 	return {
	 		month: this.params._month
	 	}
	}
});

Router.route('/:_month/:_day', function(){
	this.render('Inputs');
	},{
		data: function() {
	 	return {
	 		month: this.params._month,
	 		day: this.params._day
	 	}
	}
});
