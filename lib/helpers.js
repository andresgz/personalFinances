Calendar = {
	getMonthName : function(number) {
		var name;
		switch(number.toString()) {
		case "1": 
			var name = "Enero";
			break; 
		case "2": 
			var name = "Febrero";
			break; 
		case "3": 
			var name = "Marzo";
			break; 
		case "4": 
			var name = "Abril";
			break; 
		case "5": 
			var name = "Mayo";
			break; 
		case "6": 
			var name = "Junio";
			break; 
		case "7": 
			var name = "Julio";
			break; 
		case "8": 
			var name = "Agosto";
			break; 
		case "9": 
			var name = "Septiembre";
			break; 
		case "10": 
			var name = "Octubre";
			break; 
		case "11": 
			var name = "Noviembre";
			break; 
		case "12": 
			var name = "Diciembre";
			break; 

		}
		return name;
	}
}