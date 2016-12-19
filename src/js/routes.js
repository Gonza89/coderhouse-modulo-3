var app = require('./Myapp');

app
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state({
      name:'home',
      url: '/',
      templateUrl: '../views/home.tpl.html'
    })
    .state({
      name: 'productList',
      url: '/list',
      controller: 'ListProductController',
      templateUrl: '../views/products.tpl.html'
    })
    .state({
      name: 'create',
      url: '/crear',
      controller: 'createProduct',
      templateUrl: '../views/createProduct.tpl.html'
    })
    .state({
      name: 'product',
      url: '/product/:id',
      controller: 'ProductController',
      templateUrl: '../views/individual-product.tpl.html'
    })
    .state({
      name: '404',
      url: '/404',
      template: '<h1>LA PAGINA NO EXISTE</h1>'
    })

  $urlRouterProvider.otherwise('/404');
});
