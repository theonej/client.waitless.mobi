var paymentServices = function ($http, $cookies, baseApiUrl) {
    return {
        calculatePayment: function (serviceItems, success, failure) {
            var url = baseUrl + '/payment/CalculatePayment';

            var headers = {
                'WaitlessAuthToken': $cookies.authToken
            };

            var command = {
                Id: '00000000-0000-0000-0000-000000000000',
                ServiceItems: serviceItems
            };

            var config = {
                data: command,
                url: url,
                type: 'POST',
                headers: headers
            };

            $.ajax(url, config).success(success).error(failure);
        },

        getCardToken: function (card, callback) {
            Stripe.setPublishableKey(config.publicPaymentProviderId);

            Stripe.card.createToken({
                number: card.number,
                cvc: card.cvc,
                exp_month: card.expirationMonth,
                exp_year: card.expirationYear
            }, callback);
        }
    };
};

waitless.factory('paymentServices', ['$http', '$cookies', 'baseApiUrl', paymentServices]);