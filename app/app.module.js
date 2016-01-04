console.log('app');
angular.module('myaccount', [
  'ui.router'
]);

angular.module('myaccount').config(['$stateProvider', function($stateProvider){
      $stateProvider
        .state('root',{
          url: '',
          abstract: true,
          views: {
            'header': {
              templateUrl: 'header.html',
              controller: 'HeaderCtrl'
            },
            'footer':{
              templateUrl: 'footer.html',
              controller: 'FooterCtrl'
            }
          }
        })
        // .state('root.home', {
        //   url: '/',
        //   views: {
        //     'container@': {
        //       templateUrl: 'homePage.html'
        //     }
        //   }
        // })
        // .state('root.other', {
        //   url: '/other',
        //   views: {
        //     'container@': {
        //       templateUrl: 'other.html'
        //     }
        //   }
        // })
        ;

    }]);

angular.module('myaccount').controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
