var app=angular.module("MyFirstApp",[]);

app.controller("FirstController",function($scope){
  $scope.nombre="Javier";
  $scope.nuevoComentario={
    comentario:"Nuevo comentario",
    username:"Usuario"
  }
  $scope.comentarios=[
    {
      comentario:"Primer comentario",
      username:"javcarfer"
    },
    {
      comentario:"LOL",
      username:"trollasso"
    }
  ];
  $scope.agregarComentario=function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario={};
  }
});
