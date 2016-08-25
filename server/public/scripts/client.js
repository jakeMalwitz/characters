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
      when("/latios", {
        templateUrl: "/views/partials/latios.html",
        controller: "latiosController"
      }).
      when("/tyranitar", {
        templateUrl: "/views/partials/tyranitar.html",
        controller: "tyranitarController"
      }).
      when("/alakazam", {
        templateUrl: "/views/partials/alakazam.html",
        controller: "alakazamController"
      }).
      otherwise({
        redirectTo: "/arcanine"
      });
}]);

myApp.controller("arcanineController", ["$scope", function($scope){
}]);

myApp.controller("gengarController", ["$scope", function($scope){
}]);

myApp.controller("lugiaController", ["$scope", function($scope){
}]);

myApp.controller("latiosController", ["$scope", function($scope){
}]);

myApp.controller("tyranitarController", ["$scope", function($scope){
}]);

myApp.controller("alakazamController", ["$scope", function($scope){
}]);
