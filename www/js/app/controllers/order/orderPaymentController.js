var orderPaymentController = function ($scope, $location, $cookies, paymentServices) {
    $scope.currentOrder = null;

    $scope.initialize = function () {
        $scope.currentOrder = JSON.parse($cookies.currentOrder);
        console.log($scope.currentOrder);
    };
};

waitless.controller('orderPaymentController', ['$scope', '$location', '$cookies', 'paymentServices', orderPaymentController]);