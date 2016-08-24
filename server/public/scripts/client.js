var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/arcanine", {
        templateUrl: "/views/partials/arcanine.html",
        controller: "arcanineController"
      }).
      when("/gengar", {
        templateUrl: "/views/partials/gengar.html",
        controller: "gengarController"
      }).
      when("/lugia", {
        templateUrl: "/views/partials/lugia.html",
        controller: "lugiaController"
      }).
      otherwise({
        redirectTo: "/arcanine"
      });
}]);

myApp.controller("arcanineController", ["$scope", function($scope){
    console.log("Super cats");
}]);

myApp.controller("gengarController", ["$scope", function($scope){
    console.log("Dogs are neat");
}]);

myApp.controller("lugiaController", ["$scope", function($scope){
    console.log("Lizards are toxic");
}]);
