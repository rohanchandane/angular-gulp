console.log('app');
angular.module('myaccount', ['ui.router']);

angular.module('myaccount').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

  console.log( $locationProvider);
  // push state
  if (window.history && history.pushState) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  // ui router
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        'main_header': {
          templateUrl: 'shared/header/header.html',
          controller: 'HeaderController'
        },
        'main_container': {
          templateUrl: 'shared/container/container.html',
          controller: 'ContainerController'
        },
        'main_footer': {
          templateUrl: 'shared/footer/footer.html',
          controller: 'FooterController'
        }
      }
    });
}]);
