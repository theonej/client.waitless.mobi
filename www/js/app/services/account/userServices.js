var userServices = function ($http, baseApiUrl) {
    var _currentUser;

    return {
        getUser: function (token, success, failure) {

            var headers = {
                'WaitlessAuthToken': token
            };

            var url = baseApiUrl + 'User/';

            var config = {
                url: url,
                headers:headers
            };

            $http.get(url, config)
                .success(success)
                .error(failure);
        },

        setPassword: function (user, token, success, failure) {
            var headers = {
                'WaitlessAuthToken': token
            };

            var command = {
                id: '00000000-0000-0000-0000-000000000000',
                userId: user.Id,
                password:user.password
            };

            var url = baseApiUrl + 'User/SetPassword';

            var config = {
                url: url,
                headers: headers
            };

            $http.post(url, command, config)
                .success(success)
                .error(failure);
        },

        resetPassword: function (emailAddress, success, failure) {
            var url = baseApiUrl + 'User/ResetPassword';

            var command = {
                Id: '00000000-0000-0000-0000-000000000000',
                EmailAddress: emailAddress,
                Source:1
            };

            var config = {
                data: command,
                url: url,
                type: 'POST'
            };

            $http.post(url, command, config)
                .success(success)
                .error(failure);
        },

        setCurrentUser: function (currentUser) {
            _currentUser = currentUser;
        },

        getCurrentUser: function () {
            return _currentUser;
        }
    };
};

waitless.factory('userServices', ['$http', 'baseApiUrl', userServices]);