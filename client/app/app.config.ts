import * as angular from 'angular';
import '@uirouter/angularjs';
const Config = [
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  (
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
  ) => {

  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>',
    })


  $urlRouterProvider.otherwise('/');
}];

export default Config;
