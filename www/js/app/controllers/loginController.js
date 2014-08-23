var loginController = function ($scope, $rootScope, $location, $cookies, authServices, userServices) {

    controllerBase.apply(this, [$scope, $location]);

    $scope.user = {};

    $scope.authenticateUser = function () {
        $scope.loading = true;
        authServices.authenticateUser($scope.user, $scope.onAuthenticated, $scope.onError);
    };

    $scope.onAuthenticated = function (data) {
        $cookies.authToken = data;

        userServices.getUser(data, $scope.onUserData, $scope.onError);

        $scope.loading = false;
    };

    $scope.onUserData = function (data) {
        $scope.userData = data;

        $rootScope.$broadcast('userDataLoaded', data);

        $scope.loading = false;

        $location.path('/serviceProviders');
    };

    $scope.onError = function (error, status) {
        console.log('ERR:');
        if (!error) {
            error = 'An unkown error occurred.  Please contact support.';
        }
        console.log(error);

        switch (status) {
            case (404):
                {
                    $scope.displayMessage('No user was found with that email address.  Please register now!');
                    $location.path('/register');
                }
                break;
            default:
                $scope.displayError(error.message);
                break;
        };

        $scope.loading = false;
    };

    $scope.displayMessage = function (message) {
        var options = {
            corners: '10px',
            life: 5000,
            sticky: true
        };
        $.jGrowl(message, options);
    };
};

waitless.controller('loginController', [
                                        '$scope',
                                        '$rootScope',
                                        '$location',
                                        '$cookies',
                                        'authServices',
                                        'userServices',
                                        loginController
                                    ]);