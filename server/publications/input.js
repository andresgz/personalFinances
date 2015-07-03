// Publicaciones
Meteor.publish('Inputs', function (date) {
	_.extend(date,{
		// Obtenemos año actual
		year: new Date().getFullYear()
	})
	// Creamos un rango para filtrar los valores basados en la fecha
	// Definimos el valor menor
	var gt = new Date(date.year, date.month, date.day)
	// Definimos el valor mayor
	date.day++;
	var lt = new Date(date.year, date.month, date.day)
	return Inputs.find({
		"date" : {"$gte": gt, "$lt": lt}
	});
});