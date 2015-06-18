var month = 100000; 
Template.days.helpers({
	days: function() {
		return Session.get('days');
		 // days;
	}
});

Template.days.events({
	'click paper-item': function (e) {
		var day =  $(e.currentTarget).attr('day');
		Session.set('title', Calendar.getMonthName(month) + " " + day);
		Router.go( "/" +  month  + "/" + day)
	}
});

Template.days.onRendered(function() {
	var year = new Date().getFullYear(),
		dayOfWeek,
		days = [],
		that = this;
	for(var day = 1; day <= new Date(year, this.data.month, 0).getDate(); day++) {
		var date = {year: year, month: this.data.month - 1, day: day };
		dayOfWeek =  Calendar.getDayName(new Date(year, this.data.month, day).getDay());
		console.log(dayOfWeek, day)
		Meteor.call('getDayExpenses', date, function (e, r) {
			if(!e){
				days.push({
					money: r[0].total ? r[0].total : 0, 
					day: {
						number: r[0].day,
						name: Calendar.getDayName(new Date(year, that.data.month, r[0].day).getDay()) + " " + r[0].day
					}
				});
				Session.set('days', days);
			}
		});
	}
	month = this.data.month;
})