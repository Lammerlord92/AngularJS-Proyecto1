var app=angular.module("CustomDirective",[]);
app.directive("myAutocomplete",function(){
  function postLink($scope,element,attrs){
    $(element).autocomplete({
      source:$scope.$eval(attrs.myAutocomplete),
      select:function(ev,ui){
        ev.preventDefault();
        if(ui.item){
          $scope.optionSelected(ui.item.value);
        }
      },
      focus:function(ev,ui){
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  }
  return {
    //link:nombre de la función
    link:postLink
  }
})
.directive('circularImg',function(){
  //scope:variables del controlador,element:elementos de la directiva(el div),attrs:los valores que le entran a la directiva
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
  $scope.repos=[];
  $http.get("https://api.github.com/users/Lammerlord92/repos")
  .then(function(data){
    $scope.posts=data.data;
    for(var i=data.data.length-1;i>=0;i--){
      var repo=data.data[i];
      $scope.repos.push(repo.name);
    };
  },
  function(data, status) {
    console.error('Response error', status, data);
  });

  $scope.optionSelected=function(data){
      $scope.$apply(function(){
        $scope.main_repo=data;
      })
  }
});
