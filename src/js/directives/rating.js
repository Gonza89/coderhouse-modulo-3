var app = require('../Myapp')

app
 .directive('rating', function($compile) {
    return {
      restrict: 'E',
      scope: {
        product: '='
      },
      link: function($scope, elm, attrs) {

        $scope.increase = function() {
          $scope.product.rating++;
          //updateStars();
        }

        updateStars();
        function updateStars() {
          for(var i=0; i <= 4; i++) {
            if(i <  $scope.product.rating ) {
              var element = $compile('<span ng-click="decrease()" class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>')($scope)
              elm.after(element);
            } else {
              var element = $compile('<span ng-click="increase()" class="glyphicon glyphicon-star" aria-hidden="true"></span>')($scope)
              elm.after(element);
            }
          }
        }
      }
    }
  })
