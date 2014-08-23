var authServices = function ($http, baseApiUrl) {

    function getAuthHeaderValue(user) {
        var headerValue = user.emailAddress + ':' + user.password;
        headerValue = Base64.encode(headerValue);

        return 'Basic ' + headerValue;
    };


    return {
        authenticateUser: function (user, success, failure) {
            var headerValue = getAuthHeaderValue(user);

            var headers = {
                'Authorization': headerValue
            };

            var url = baseApiUrl + 'Authorization/';

            var config = {
                url: url,
                headers: headers
            };

            $http.get(url, config)
                .success(success)
                .error(failure);
        }
    };
};
waitless.factory('authServices', ['$http', 'baseApiUrl', authServices]);