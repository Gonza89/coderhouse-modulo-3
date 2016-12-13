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
   featured: false,
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
 },{
   id: 3,
   title: 'mouse',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$250',
   featured: false,
   tags: ['pc', 'mouse'],
   rating: 5
 },{
   id: 4,
   title: 'teclado',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$400',
   featured: true,
   tags: ['pc', 'teclado', 'periferico'],
   rating: 3
 },{
   id: 5,
   title: 'parlantes',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$800',
   featured: true,
   tags: ['pc', 'perifericos'],
   rating: 4
 }];

$scope.featureds = $scope.products.filter(function(i) {
  return i.featured === true;
})


})

module.exports = 'ListProductController';
