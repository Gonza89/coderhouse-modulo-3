var app = require ('../Myapp');


app
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
