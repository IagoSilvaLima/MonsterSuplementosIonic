angular.module('Monster').controller('MarcasCreateCtrl',function($http,$state){
  var vm = this;
  vm.name = 'create';

  this.save = salvar;






  function salvar(marca){
    $http.post('http://192.168.1.5:3000/marca',marca)
      .then(function(response){
        console.log('gravado');
        $state.go('app.MarcasList');
      })
  }


})