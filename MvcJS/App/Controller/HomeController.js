var HomeController = function ($scope) {
    $scope.hello = "Extension";
}
HomeController.$inject = ['$scope'];
'use strict'

app.controller('HomeController', ['$scope', function ($scope) {
    $scope.hello = "Extension";
}]);