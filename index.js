var HunterSDK = require('hunterio');

var KEY = 'xwxaxaxazaeazasazeartfadfarrfarfafz';

var hunter = new HunterSDK(KEY);

let mails = [];

hunter.domainSearch({
    domain: 'https://www.siteweb.fr/'
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
