var app = angular.module('TutorialApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: '../../Home/Main',
        controller: 'MainController'
    });
    $routeProvider.when("/about", {
        templateUrl: '../../Home/About',
        controller: 'AboutController'
    });
    $routeProvider.when("/contact", {
        templateUrl: '../../Home/Contact',
        controller: 'ContactController'
    });
    $routeProvider.otherwise({ redirectTo: "/" });
});