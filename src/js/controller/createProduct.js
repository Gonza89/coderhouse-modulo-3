var app = require('../Myapp');

app
  .controller("createProduct", function($scope) {
    $scope.product = {};
    $scope.count = 20;

    $scope.submit = function() {
      console.log($scope.product);
    };

    $scope.updateCount = function() {
    
    }

  })
