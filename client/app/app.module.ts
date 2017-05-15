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
  .run(run)
  .factory('$exceptionHandler', ['$window', function ($window) {
    //Replace value within quotes with your API key instead

    // create a new event
    var appEvent = $window.trakerr.createAppEvent();

    return function (exception, cause) {
        // ...

        $window.trakerr.sendError(exception, "Error", function(error, data, response) {
            // ... handle or log response if needed ...
        });
    };
}]);

angular.bootstrap(document.body, [name]);
