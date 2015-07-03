Template.Months.helpers({
	months: [
		{
			month: 6,
			money:-200
		},
		{
			month:7,
			money:100
		},
		{
			month: 8,
			money:500
		},
		{
			month: 9,
			money:-150
		},
		{
			month: 10,
			money:-1170
		}
	],
	
});

Template.month.helpers({
	name: function() {
		return Calendar.getMonthName(this.month);
	}
});

Template.Months.events({
	'click paper-item': function (e) {
		Session.set('title', $(e.currentTarget).attr('name'));
		Router.go('/' + $(e.currentTarget).attr('month'))
	}
});

Template.Months.onRendered(function() {
	 Session.set('title', 'Personal Finances');
})
