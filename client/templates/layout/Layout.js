Template.Layout.helpers({
	title: function() {
		//Variable de sesion que actualiza el resultado cuando alguien cambia el valor
		return Session.get('title')
	}
});