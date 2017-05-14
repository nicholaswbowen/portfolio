import * as angular from 'angular';
import controller from './bio.controller';
import './bio.scss'
const name = 'bio';
const template = '/app/bio/bio.html';

export default angular.module('app.bio', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .name;