var controllerBase = function ($scope, $location) {

    $scope.loading = false;

    $scope.onError = function (error, status) {
        console.log('ERR:');
        if (!error) {
            error = 'An unkown error occurred.  Please contact support.';
        }
        console.log(error);

        if (status !== 401 && status !== 403) {
            $scope.displayError(error.message);
        }

        switch (status) {
            case (401): 
                $location.path('/');
                break;
            case (404): 
                $location.path('/404');
                break;
            default: break;
        };

        $scope.loading = false;
    };

    $scope.displayError = function (message) {
       
    };

    $scope.displayMessage = function (message) {
        
    };
};