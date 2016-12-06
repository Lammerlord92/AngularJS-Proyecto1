var app=angular.module("MyFirstApp",[]);

app.controller("FirstController",["$scope","$http",function(scope,http){
  scope.posts=[];
  scope.loading=true;
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
    console.log(data);
    scope.posts=data.data;
    scope.loading=false;
  },
  function(data, status) {
     scope.loading=false;
  });

}]);
