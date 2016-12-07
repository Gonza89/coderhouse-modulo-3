var app = require('./Myapp');

app
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state({
      name: 'productList',
      url: '/list',
      controller: 'ListProductController',
      templateUrl: '../views/products.tpl.html'
  })
  .state({
    name: 'product',
    url: '/product/:id',
    controller: 'ProductController',
    templateUrl: '../views/products.tpl.html'
  })
  .state({
    name: '404',
    url: '/404',
    template: '<h1>PAGINA NO EXISTE</h1>'
  })

  $urlRouterProvider.otherwise('/404');
});
