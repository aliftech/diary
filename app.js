var app = angular.module("diary", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "welcome.html"
  })
  .when("/baca", {
    templateUrl : "baca.html"
  })
  .when("/tulis", {
    templateUrl : "tulis.html"
  })
});



