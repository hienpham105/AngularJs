var MainController = function ($scope) {
    $scope.hello = "This is main page";
}
MainController.$inject = ['$scope'];
'use strict'

app.controller('MainController', ['$scope', function ($scope) {
    $scope.hello = "This is main page";
}]);