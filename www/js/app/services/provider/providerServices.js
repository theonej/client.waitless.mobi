var providerServices = function ($http, $cookies, baseApiUrl, userServices) {
    return {
        getProvider: function (providerId, success, failure) {

            var headers = {
                'WaitlessAuthToken': $cookies.authToken
            };

            var url = baseApiUrl + 'ServiceProviders/' + providerId;

            var config = {
                url: url,
                headers: headers
            };

            $http.get(url, config)
                .success(success)
                .error(failure);
        },

        getProviderInventory: function (providerId, success, failure) {
            var headers = {
                'WaitlessAuthToken': $cookies.authToken
            };

            var url = baseApiUrl + 'ServiceProvider/' + providerId + '/ServiceInventory/';

            var config = {
                url: url,
                headers: headers
            };

            $http.get(url, config)
                .success(success)
                .error(failure);
        },
    };
};

waitless.factory('providerServices', ['$http', '$cookies', 'baseApiUrl', 'userServices', providerServices]);