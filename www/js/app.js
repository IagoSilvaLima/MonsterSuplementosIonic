// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Monster', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


angular.module("Monster").config(function($stateProvider,$urlRouterProvider){

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
    
  })

  .state('app.SuplementosList', {
    url: '/suplementosList',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/suplementos/list.html',
        controller : 'SuplementosListCtrl',
        controllerAs : 'vm'
      }
    }
  })
  .state('app.SuplementosCreate', {
    url: '/suplementosCreate',
    views: {
      'menuContent': {
        templateUrl: 'templates/suplementos/create.html',
        controller : 'SuplementosCreateCtrl',
        controllerAs : 'vm'
      }
    }
  })
  .state('app.MarcasList', {
    url: '/marcasList',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/marcas/list.html',
        controller : 'MarcasListCtrl',
        controllerAs : 'vm'
      }
    }
  })
  .state('app.MarcasCreate', {
    url: '/marcasCreate',
    views: {
      'menuContent': {
        templateUrl: 'templates/marcas/create.html',
        controller : 'MarcasCreateCtrl',
        controllerAs : 'vm'
      }
    }
  })

  .state('app.CategoriasList', {
    url: '/categoriasList',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/categorias/list.html',
        controller : 'CategoriasListCtrl',
        controllerAs : 'vm'
      }
    }
  })
  .state('app.CategoriasCreate', {
    url: '/categoriasCreate',
    views: {
      'menuContent': {
        templateUrl: 'templates/categorias/create.html',
        controller : 'CategoriasCreateCtrl',
        controllerAs : 'vm'
      }
    }
  })

  $urlRouterProvider.otherwise('/app/categoriasList');
});

