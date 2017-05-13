import * as angular from 'angular';

import 'angular-ui-bootstrap';
import '@uirouter/angularjs';

export default angular.module('app.core', [
  'ui.bootstrap',
  'ui.router'
])
.name;