var app = require ('../Myapp');

app
.controller("ListProductController", function ($scope) {
  $scope.title = "Lista de Productos";

  $scope.increase = function(obj) {
    if(obj.rating < 5){
      return obj.rating++;
    }
  }

  $scope.decrease = function(obj) {
    return (obj.rating > 0) ? obj.rating-- : null;
  }

  $scope.products = [
 {
   id: 1,
   title: 'Computadora',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$5000',
   featured: true,
   tags: ['pc'],
   rating: 3
 },{
   id: 2,
   title: 'Computadora vieja',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$10000',
   featured: false,
   tags: ['vieja', 'partes'],
   rating: 2
 }];

})

module.exports = 'ListProductController';
