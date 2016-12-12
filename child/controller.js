angular.module("MyFirstApp",[])
.run(function($rootScope){
  $rootScope.nombre="Código Facilito"
})
.controller("FirstController",function($scope){
  $scope.nombre="CF"
}).controller("ChildController",function($scope){
})

;
