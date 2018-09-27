angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('911', {
    url: '/page2',
    templateUrl: 'templates/911.html',
    controller: '911Ctrl'
  })

  .state('miguelTongol', {
    url: '/page3',
    templateUrl: 'templates/miguelTongol.html',
    controller: 'miguelTongolCtrl'
  })

  .state('dean', {
    url: '/page4',
    templateUrl: 'templates/dean.html',
    controller: 'deanCtrl'
  })

  .state('msBeth', {
    url: '/page5',
    templateUrl: 'templates/msBeth.html',
    controller: 'msBethCtrl'
  })

  .state('dad', {
    url: '/page6',
    templateUrl: 'templates/dad.html',
    controller: 'dadCtrl'
  })

  .state('paulvoron', {
    url: '/page7',
    templateUrl: 'templates/paulvoron.html',
    controller: 'paulvoronCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});