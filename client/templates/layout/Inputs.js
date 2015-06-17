Template.inputs.helpers({
	inputs: [
		{
			description: 'Lorem ipsum dolor.',
			money:-200
		},
		{
			description: 'Lorem ipsum dolor.',
			money:100
		},
		{
			description: 'Lorem ipsum dolor.',
			money:500
		},
		{
			description: 'Lorem ipsum dolor.',
			money:-150
		},
		{
			description: 'Lorem ipsum dolor.',
			money:-1170
		},
		{
			description: 'Lorem ipsum dolor.',
			money:-200
		},
		{
			description: 'Lorem ipsum dolor.',
			money:100
		},
		{
			description: 'Lorem ipsum dolor.',
			money:500
		},
		{
			description: 'Lorem ipsum dolor.',
			money:-150
		},
		{
			description: 'Lorem ipsum dolor.',
			money:-1170
		}
	]
});

Template.inputs.events({
	'click paper-fab': function (e) {
		$('paper-dialog').toggle()
	},
	'click paper-button[dialog-dismiss]': function (e) {
		$('paper-dialog').toggle()
	},
	'click paper-button[dialog-confirm]': function (e) {
		var input = {
			amount: $('paper-input#amount').val(),
			description: $('paper-input#description').val()
		}
		Meteor.call('insertInput', input, function (e, r) {
			if (!e) {
				$('paper-dialog').toggle()
			}
		});
	}
});

Template.inputs.onRendered(function() {
})
