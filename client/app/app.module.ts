import * as angular from 'angular';
import config from './app.config';
import run from './app.run';
import core from './core/core.module';
import layout from './layout/layout.module';
import home from './home/home.module';
import bio from './bio/bio.module';
import '../styles/style.scss';
const name = 'app';
const dependencies = [
  'ui.bootstrap',
  core,
  home,
  layout,
  bio
];


angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name]);
