var app=angular.module("MyFirstApp",[]);

app.controller("FirstController",["$scope","$http",function(scope,http){
  scope.posts=[];
  scope.newPost={};
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
    console.log(data);
    scope.posts=data.data;
  },
  function(data, status) {
     console.error('Response error', status, data);
  });
  scope.addPost=function(){
    http.post("http://jsonplaceholder.typicode.com/posts",{
      title: scope.newPost.title,
      body: scope.newPost.body,
      userId: scope.newPost.userId
    })
    .then(function(data,status,headers,config){
      scope.posts.unshift(scope.newPost);
      scope.newPost={};
    },
    function(error,status,headers,config){
      console.log(error);
    });
    }
}]);
