angular.module('Monster').controller('MarcasListCtrl',function($http,$state){
  var vm = this;


  this.add = insert;
  listagem();

  function listagem(){
    $http.get('http://192.168.1.5:3000/marca')
      .then(function(response){
        console.log(response);
        vm.marcas = response.data;
      });
  }


  function insert(){
    $state.go('app.MarcasCreate');    
  }


})