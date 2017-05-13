import * as angular from 'angular';
import '@uirouter/angularjs'; 
const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider,
    $httpProvider
  ) => {
  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>',
    })
  .state('reload', {
      url: '/reload',
      template: 'Reloading... <i class="fa fa-spinner infinite rotateIn"></i>',
      resolve: {
        reload: [
          '$state',
          '$timeout',
          ($state, $timeout) => $timeout(() => $state.go('home', {}, {reload: true, inherit: false, notify: true}), 100)
        ]
      }
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
    rewriteLinks: false
  });


  $urlRouterProvider.otherwise('/');
}];

export default Config;
