var app=angular.module("ToDoList",["LocalStorageModule"]);

app
.factory("TodoService",function(localStorageService){
  var todoService={};
  todoService.key="angular-todoList";
  if(localStorageService.get(todoService.key)){
      todoService.activities=localStorageService.get(todoService.key);
  }else {
      todoService.activities=[];
  }
  todoService.add=function(newActv){
    todoService.activities.push(newActv);
    todoService.updaLocalStorage();
  };
  todoService.updaLocalStorage=function(){
    localStorageService.set(todoService.key,todoService.activities);
  };
  todoService.clean=function(){
    todoService.activities=[];
    todoService.updaLocalStorage();
    return todoService.getAll();
  };
  todoService.getAll=function(){
    return todoService.activities;
  };
  todoService.removeItem=function(item){
    todoService.activities=todoService.activities.filter(function(activity){
//Si la condición es falso, remueve el elemento de la colección, si es verdadero, lo mantiene
      return activity !== item;
    });
    todoService.updaLocalStorage();
    return todoService.getAll();
  };
  return todoService;
})
.controller("ToDoController",function($scope,TodoService){
  $scope.todo=TodoService.getAll();
  $scope.newActv={};
  $scope.addActivity=function(){
    TodoService.add($scope.newActv);
    $scope.newActv={};
  }
  $scope.removeActivity=function(item){
    $scope.todo=TodoService.removeItem(item);
  }
  $scope.clean=function(){
    $scope.todo=TodoService.clean();
  }
});
