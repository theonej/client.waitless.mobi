var registerController = function ($scope, $location, $cookies, registrationServices, authServices) {

    controllerBase.apply(this, [$scope, $location]);

    $scope.user = {
        emailAddress: '',
        password:guid(),
        valid: function () {
            var valid = false;

            if (this.emailAddress != '') {
                valid = true;
            }

            return valid;
        }
    };

    $scope.register = function () {
        if ($scope.registerForm.$valid === true && $scope.user.valid() === true) {

            $scope.loading = true;
            $scope.user.password = guid();
            registrationServices.registerUser($scope.user, $scope.onUserRegistered, $scope.onError);
        }
    };

    $scope.onUserRegistered = function (data) {
        $scope.loginUser();
    };

    $scope.loginUser = function () {
        authServices.authenticateUser($scope.user, $scope.onUserAuthenticated, $scope.onError);
    };

    $scope.onUserAuthenticated = function (data) {
        $cookies.authToken = data;
        $scope.loading = false;

        var providerId = $location.search().providerId;
        var redirect = '/provider/' + providerId;
        $location.path(redirect);
    };

};

waitless.controller('registerController', ['$scope', '$location', '$cookies',  'registrationServices', 'authServices', registerController]);