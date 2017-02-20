angular.module('Monster').controller('SuplementosCreateCtrl',function($http,$state){
  var vm = this;
  vm.name = 'create';

  this.save = salvar;


 function GetMarcas(){
   $http.get('http://192.168.1.5:3000/marca')
      .then(function(response){
        vm.marcas = response.data;
      });
 }

 function GetCategorias(){
   $http.get('http://192.168.1.5:3000/categoria')
      .then(function(response){
        vm.categorias = response.data;
      });
 }


  GetMarcas();
  GetCategorias();


  function salvar(suplemento){
    $http.post('http://192.168.1.5:3000/suplemento',suplemento)
      .then(function(response){
        console.log('gravado');
        $state.go('app.SuplementosList');
      })
  }


})