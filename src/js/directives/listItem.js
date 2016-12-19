var app = require('../Myapp')

app
  .directive('listItem', function() {
    return {
      restrict: 'EA',
      templateUrl: '/js/directives/views/list-item.tpl.html',
      //template: '<h2>List ITEM DIRECTIVEEEEE</h2>',
      replace: true,
      scope: {
        product: '=', // doble relacion padre - hijo
        precio: '@',
        rateUp: '&', //busca un metodo en el scope del padre
        rateDown: '&'
      },
    //  link: function($scope, elem, attrs) {
    //  console.log(  $scope.product.rating++;);
    //  }
    }
   })
