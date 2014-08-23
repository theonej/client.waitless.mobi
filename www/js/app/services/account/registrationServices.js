var registrationServices = function ($http, baseApiUrl) {
    return {
        registerUser: function (user, success, failure) {

            var url = baseApiUrl + 'Authorization/';

            var command = {
                userName: user.emailAddress,
                emailAddress:user.emailAddress,
                password: user.password
            };

            var config = {
                url: url,
                data:command
            };

            $http.post(url, command, config)
                .success(success)
                .error(failure);
        }
    };
};

waitless.factory('registrationServices', ['$http', 'baseApiUrl', registrationServices]);