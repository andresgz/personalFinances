var month = 100000; 
Template.days.helpers({
	days: [
		{
			day:{
				number: 6,
				name:'Viernes'
			},
			money:-200
		},
		{
			day:{
				number: 7,
				name:'Sabado'
			},
			money:100
		},
		{
			day:{
				number: 8,
				name:'Domingo'
			},
			money:500
		},
		{
			day:{
				number: 9,
				name:'Lunes'
			},
			money:-150
		},
		{
			day:{
				number: 10,
				name:'Martes'
			},
			money:-1170
		}
	]
});

Template.days.events({
	'click paper-item': function (e) {
		var day =  $(e.currentTarget).attr('day');
		Session.set('title', Calendar.getMonthName(month) + " " + day);
		Router.go( "/" +  month  + "/" + day)
	}
});

Template.days.onRendered(function() {
	month = this.data.month;
})