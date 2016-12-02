/* IIFE  (funcion autoinvocada)

angular.module("My-app", []"dependencias")   declarando una aplicacion

angular.module("My-app") // haciendo referencia una instancia ya creada


ng-include
ng-if
ng-show
ng-repeat
ng-bind <h1 ng-bind='title'></h1>

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
      $scope.product ={
        name: "Producto",
        price: "$200",
        description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image :"http://placehold.it/180x240",
        featured: true,
        tags: ['computadora', 'diseño', 'caro', 'otro']
      }
    })

})();
