var myApp = angular.module('myApp', ['ngRoute']);

console.log('js sourced');
myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/leia', {
        templateUrl: 'views/leia.html',
        controller: 'LeiaController as lc'
    })
}); //end myApp.config