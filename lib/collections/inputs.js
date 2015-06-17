Inputs = new Mongo.Collection("inputs");

Meteor.methods({
	insertInput: function (input) {
		Inputs.insert(input, function (e,r) {
			if (!e) {

			} else {

			}
		});
	}
});