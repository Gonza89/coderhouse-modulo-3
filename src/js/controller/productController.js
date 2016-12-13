var app = require ('../Myapp');


var products ={
1: {
   id: 1,
   title: 'Computadora',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$5000',
   featured: true,
   tags: ['pc'],
   rating: 2
 },
2: {
   id: 2,
   title: 'Computadora nueva',
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image: 'http://placehold.it/160x200',
   precio: '$10000',
   featured: false,
   tags: ['nueva'],
   rating: 3
 },
3: {
   id: 3,
   title: "Producto",
   description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   image :"http://placehold.it/180x240",
   precio: "$200",
   featured: true,
   tags: ['computadora', 'diseño', 'caro', 'otro']
   }
};
app
  .controller('ProductController', function($scope, $state) {
  //podructo con id = $state.params.id
  $scope.product = products[$state.params.id]
});
