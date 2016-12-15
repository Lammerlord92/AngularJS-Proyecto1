var app=angular.module("CustomDirective",[]);

app.controller("AppCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/Lammerlord92/repos")
  .then(function(data){
    console.log(data);
    $scope.repos=data.data;
  },
  function(data, status) {
    console.error('Response error', status, data);
  });
});
