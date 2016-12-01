var app=angular.module("MyFirstApp",[]);

app.controller("FirstController",["$scope","$http",function(scope,http){
  scope.posts=[];
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
    console.log(data);
    scope.posts=data.data;
  },
  function(data, status) {
     console.error('Response error', status, data);
  });
}]);
