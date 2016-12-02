var app=angular.module("ToDoList",["LocalStorageModule"]);

app.controller("ToDoController",function($scope,localStorageService){
  if(localStorageService.get("angular-todoList")){
      $scope.todo=localStorageService.get("angular-todoList");
  }else {
      $scope.todo=[];
  }
  /*
  {
    descripcion:"Terminar el curso de Angular",
    fecha:"3-03-15 12:30pm"
  }
  */
  //Vigila la colección "todo", cuando se modifique, lo mete en el localStorage
  $scope.$watchCollection("todo",function(newValue,oldValue){
    localStorageService.set("angular-todoList",$scope.todo);
  });
  $scope.addActivity=function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv={};
  };
  //Si se pone en el boton de limpiar ng-click="todo=[]", no hace falta esta función
  $scope.cleanActivities=function(){
    $scope.todo=[];
  };
});
