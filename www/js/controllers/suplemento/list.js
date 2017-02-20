angular.module('Monster').controller('SuplementosListCtrl',function($http,$state){
  var vm = this;


  this.add = insert;
  listagem();

  function listagem(){
    $http.get('http://192.168.1.5:3000/suplemento')
      .then(function(response){
        console.log(response);
        vm.suplementos = response.data;
      });
  }


  function insert(){
    $state.go('app.SuplementosCreate');    
  }


})