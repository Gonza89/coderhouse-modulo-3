var app = require('../Myapp')

app
  .directive('listItem', function() {
    return {
      restrict: 'EA',
      //template: '<h2>List ITEM DIRECTIVEEEEE</h2>',
      scope: {
        product: '=', // doble relacion padre - hijo
        precio: '@',
        rateUp: '&', //busca un metodo en el scope del padre
        rateDown: '&'
      },
      templateUrl: '/js/directives/views/list-item.tpl.html',
      link: function($scope, elem, attrs) {
        $scope.product.rating++;
      }
    }
   })
