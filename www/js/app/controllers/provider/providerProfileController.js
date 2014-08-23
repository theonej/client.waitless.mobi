var providerProfileController = function ($scope, $location, $cookies, providerServices) {
    var self = this;

    controllerBase.apply(this, [$scope, $location]);

    $scope.providerId = null;
    $scope.provider = null;
    $scope.providerInventory = null;
   
    $scope.initialize = function () {
        $scope.providerId = $location.search().providerId;
        $scope.loading = true;
        
        providerServices.getProvider($scope.providerId, $scope.onProvider, $scope.onError);
    };

    $scope.onProvider = function (data) {
        $scope.provider = data;
        providerServices.getProviderInventory($scope.providerId, $scope.onProviderInventory, $scope.onError);
    };

    $scope.onProviderInventory = function (data) {
        for (var index = 0; index < data.length; index++) {
            var item = data[index];
            item.requestedCount = 0;
        }

        $scope.providerInventory = data;

        $scope.loading = false;
    };

    $scope.beginOrder = function () {

        var currentOrder = {
            items:[]
        };

        for (var index = 0; index < $scope.providerInventory.length; index++) {
            var item = $scope.providerInventory[index];
            currentOrder.items.push(item);
        }

        var serializedData = JSON.stringify(currentOrder);
        $cookies.currentOrder = serializedData;

        $location.path('/order/payment');
    };

    $scope.incrementCount = function (item) {
        item.requestedCount++;
    };
};

waitless.controller('providerProfileController', ['$scope', '$location', '$cookies', 'providerServices', providerProfileController]);