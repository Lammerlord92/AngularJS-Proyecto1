var app=angular.module("ToDoList",["LocalStorageModule"]);

app
.service("TodoService",function(localStorageService){
  this.key="angular-todoList";
  if(localStorageService.get(this.key)){
      this.activities=localStorageService.get(this.key);
  }else {
      this.activities=[];
  }
  this.add=function(newActv){
    this.activities.push(newActv);
    this.updaLocalStorage();
  };
  this.updaLocalStorage=function(){
    localStorageService.set(this.key,this.activities);
  };
  this.clean=function(){
    this.activities=[];
    this.updaLocalStorage();
    return this.getAll();
  };
  this.getAll=function(){
    return this.activities;
  };
  this.removeItem=function(item){
    this.activities=this.activities.filter(function(activity){
//Si la condición es falso, remueve el elemento de la colección, si es verdadero, lo mantiene
      return activity !== item;
    });
    this.updaLocalStorage();
    return this.getAll();
  };
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
