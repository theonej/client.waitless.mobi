var verifyAccountController = function ($scope, $location, $cookies, registrationServices) {

    $scope.token = null;
    $scope.providerId = null;
    $scope.initialize = function () {

        $scope.providerId = $location.search().providerId;

        $scope.token = $cookies.authToken;
        var redirect = '';
        if ($scope.token == undefined) {
            redirect = '/account/register/';
        } else {
            redirect = '/provider/' + $scope.providerId;
        }

        $location.path(redirect);
    };
};

waitless.controller('verifyAccountController', ['$scope', '$location', '$cookies', 'registrationServices', verifyAccountController]);