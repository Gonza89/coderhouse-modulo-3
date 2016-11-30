/* IIFE  (funcion autoinvocada)

angular.module("My-app", []"dependencias")   declarando una aplicacion

angular.module("My-app") // haciendo referencia una instancia ya creada

*/

(function(){
  'use strict';
  // declarar aplicacion
  angular
    .module("My-app", [])  /*dependencias*/ // declarando una aplicacion
    .controller("ListProductController", function ($scope) {
      $scope.title = "Lista de Productos";
    })
    .controller("NavigationController", function ($scope){
      $scope.name = "Gonza";
    })
    .controller("FeaturedProductController", function ($scope) {
      $scope.destacados = "Productos Destacados";
    })
    .controller("ProductController", function ($scope) {
      $scope.producto = "Producto";
      $scope.precio = "$200";
      $scope.descripcion ='Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
      $scope.image ="http://placehold.it/180x240"
    })

})();
