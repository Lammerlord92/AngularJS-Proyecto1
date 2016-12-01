var app=angular.module("MyFirstApp",[]);

//El siguiente código sirve para cambiar el nombre de la
//variable $scope por m dentro de la función, todos los
//$scope se sustitullen por m con el objeto de reducir
//el tamaño del javascript. también, se suelen eliminar
//los espacios
app.controller("FirstController",["$scope",function(m){
  m.nombre="Javier";
  m.nuevoComentario={
    comentario:"Nuevo comentario",
    username:"Usuario"
  }
  m.comentarios=[
    {
      comentario:"Primer comentario",
      username:"javcarfer"
    },
    {
      comentario:"LOL",
      username:"trollasso"
    }
  ];
  m.agregarComentario=function(){
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario={};
  }
}]);
