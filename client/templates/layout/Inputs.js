Template.inputs.helpers({
	inputs: function() {
		Meteor.subscribe('Inputs', this);
		return Inputs.find();
	}
});

Template.inputs.events({
	'click paper-fab': function (e) {
		$('paper-dialog').toggle()
	},
	'click paper-button[dialog-dismiss]': function (e) {
		$('paper-dialog').toggle()
	},
	'click paper-button[dialog-confirm]': function (e) {
		var year = new Date().getFullYear(),
			input = {
				amount: parseInt($('paper-input#amount').val()),
				description: $('paper-input#description').val(),
				date: new Date(year, this.month, this.day)
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
