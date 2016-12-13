var app = require('../Myapp');

app
  .directive('featuredProducts', function() {
    return{
      restrict: 'E',
      templateUrl: '/js/directives/views/featured-product.tpl.html',
      scope: { // aisla el titulo
        title: '@',
        products: '=',
        rateUp: '&'
      },
      link: function($scope){
        $scope.rateUp = function(obj) {
          return $scope.$parent.increase(obj);
        }
        $scope.rateDown = function(obj){
          return $scope.$parent.decrease(obj);
        }
      }
    }
  })
