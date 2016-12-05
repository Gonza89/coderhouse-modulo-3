var app = require ('../Myapp');

app
.controller("ListProductController", function ($scope) {
  $scope.title = "Lista de Productos";
  $scope.products = [
 {
   id: 1,
   title: 'Computadora',
   image: 'http://placehold.it/160x200',
   precio: '$5000',
   featured: true,
   tags: []
 },
 {
   id: 2,
   title: 'Computadora nueva',
   image: 'http://placehold.it/160x200',
   precio: '$10000',
   featured: false,
   tags: ['nueva']
 },
]

})
