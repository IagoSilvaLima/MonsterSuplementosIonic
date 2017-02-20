angular.module('Monster').controller('CategoriasListCtrl',function($http,$state){
  var vm = this;


  this.add = insert;
  listagem();

  function listagem(){
    $http.get('http://192.168.1.5:3000/categoria')
      .then(function(response){
        console.log(response);
        vm.categorias = response.data;
      });
  }


  function insert(){
    $state.go('app.CategoriasCreate');    
  }


})