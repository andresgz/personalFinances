// Configuración global
Router.configure({
    layoutTemplate: 'Layout'
});
// Root del proyecto
Router.route('/', function () {
    this.render('Months');
});
// Ruta con parametros parametros
Router.route('/:_month', function(){
    this.render('Days');
},{
    data: function() {
        return {
            month: this.params._month
        }
    }
});
// Ruta con parametros parametros anidados
Router.route('/:_month/:_day', function(){
    this.render('Inputs');
},{
    data: function() {
        return {
            month: this.params._month,
            day: this.params._day
        }
    }
});
