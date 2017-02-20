angular.module('Monster').controller('CategoriasCreateCtrl',function($http,$state){
  var vm = this;
  vm.name = 'create';

  this.save = salvar;






  function salvar(categoria){
    $http.post('http://192.168.1.5:3000/categoria',categoria)
      .then(function(response){
        console.log('gravado');
        $state.go('app.CategoriasList');
      })
  }


})