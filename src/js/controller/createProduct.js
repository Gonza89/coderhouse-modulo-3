var app = require('../Myapp');

app
  .controller("createProduct", function($scope) {
    $scope.product = {};

    $scope.submit = function() {

      var array = $scope.product.tags.split(",");
      for (var i=0; i < array.length; i++){
        array[i] = array[i].trim();
      }

      $scope.product.tags = array;
      console.log($scope.product);
    };


  })
