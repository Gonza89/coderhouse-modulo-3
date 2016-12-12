var app = require('../Myapp')

app
  .directive('listItem', function() {
    return {
      restrict: 'EA',
      //template: '<h2>List ITEM DIRECTIVEEEEE</h2>',
      scope: {
        product: '=',
        type: '@',
        rateUp: '&',
        rateDown: '&'
      },
      templateUrl: '/js/directives/views/list-item.tpl.html',
      link: function($scope, elem, attrs) {
        $scope.product.rating++;
      }
    }
   })
