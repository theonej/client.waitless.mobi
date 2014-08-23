waitless = angular.module('waitless', ['ngRoute', 'ngCookies']);

//waitless.value('baseApiUrl', 'http://api.waitless.mobi/api/');
waitless.value('baseApiUrl', 'http://localhost:49555/api/');

waitless.config(['$routeProvider',
                  function ($routeProvider) {
                      $routeProvider.
                      when('/', {
                          templateUrl: 'templates/login.html',
                          controller: 'loginController'
                      }).
                      when('/account/register', {
                          templateUrl: 'templates/account/register.html',
                          controller: 'registerController'
                      }).
                      when('/account/verify', {
                          templateUrl: 'templates/account/verifyAccount.html',
                          controller: 'verifyAccountController'
                      }).
                      when('/provider/:providerId', {
                          templateUrl: 'templates/provider/providerProfile.html',
                          controller: 'providerProfileController'
                      }).
                      when('/order/payment', {
                          templateUrl: 'templates/order/orderPayment.html',
                          controller: 'orderPaymentController'
                      }).
                      when('/404', {
                          templateUrl: 'templates/404.html'
                      })
                      
                      //.otherwise({
                      //    redirectTo: '/login'
                      //});
                  }]);