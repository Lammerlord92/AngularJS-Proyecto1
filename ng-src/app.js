var app=angular.module("CustomDirective",[]);
app.directive('circularImg',function(){
  //scope:variables del controlador,element:elementos de la directiva(el div),attrs:los atributos
  return function(scope,element,attrs){
    //Value ews el valor que recibe la directiva
    attrs.$observe('circularImg',function(value){
      element.css({
        "background":"url("+value+")",
        "background-position":"center",
        "background-size":"cover"
      });
    });
  }
}).controller("AppCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/Lammerlord92/repos")
  .then(function(data){
    $scope.repos=data.data;
  },
  function(data, status) {
    console.error('Response error', status, data);
  });
});
