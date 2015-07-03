Meteor.methods({
	insertInput: function (input) {
		Inputs.insert(input, function (e,r) {
			if (!e) {

			} else {
				console.log(e)
			}
		});
	},
	getDayExpenses: function(date) {
		date.month++;
		var gt = new Date(date.year, date.month, date.day)
		date.day++;
		var lt = new Date(date.year, date.month, date.day)
		var contacts = Inputs.aggregate([
			{ $match: { date: { "$gte": gt, "$lt": lt } } },
			{ $group: { _id: "$date", total: { $sum: "$amount" } } }
		]);
		if(contacts[0]){
			_.extend(contacts[0],{
				day: date.day - 1
			})
		} else {
			contacts[0] = {
				day: date.day - 1
			}
		}
		return contacts
	}
});