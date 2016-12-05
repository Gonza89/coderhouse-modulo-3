var app = require ('../Myapp');


app
.controller("FeaturedProductController", function ($scope) {
  $scope.destacados = "Productos Destacados";
  $scope.products =[{
    id: 0,
    title: "Producto",
    precio: "$200",
    description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image :"http://placehold.it/160x200",
    featured: true,
    tags: ['computadora', 'diseño', 'caro', 'otro']
  },
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
 }
]
})
