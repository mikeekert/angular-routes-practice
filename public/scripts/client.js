var myApp = angular.module('myApp', ['ngRoute']);

console.log('js sourced');
myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/leia', {
        templateUrl: 'views/leia.html',
        controller: 'LeiaController as lc'
    }).when('/lady', {
        templateUrl: 'views/lady.html',
        controller: 'LadyController as lc'
    }).when('/vanessa',{
        templateUrl: 'views/vanessa.html',
        controller: 'VanessaController as vc'
    }).when('/myrtle', {
        templateUrl: 'views/myrtle.html',
        controller: 'MyrtleController as mc'
    }).when('/psycho', {
        templateUrl: 'views/psycho.html',
        controller: 'PsychoController as pc'
    }).when('/nancy', {
        templateUrl: 'views/nancy.html',
        controller: 'NancyController as nc'
    });
}); //end myApp.config