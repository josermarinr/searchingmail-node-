var HunterSDK = require('hunterio');

var KEY = '447d75269d37c8d96999b289ef37c8940de4d235';

var hunter = new HunterSDK(KEY);

let mails = [];

hunter.domainSearch({
    domain: 'https://www.aktarma.fr/'
}, function(err, body) {
    if (err) {
        console.log(err)
    } else {
        // Will contain same body as the raw API call

        body['data']['emails'].forEach(element => {
            console.log(element['value'])

        });

    }
});