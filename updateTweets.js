var Twit = require('twit');

var T = new Twit({
    consumer_key:         'bmEzuWjWdFZjlRK7jOVpkwgf9',
    consumer_secret:      'u6aoZ2p7GCxY2wFUwWZtInwIvPjysNYPLRdsdiQNzRum2d7F1L',
    access_token:         '284420270-fZmAGDonjRst4N98bUHTFCGAK1myruEHs2Z5JFEn',
    access_token_secret:  'OOQbVpmQLGu4tQMTw41KdzseoqD64sIIyRCIvgIa5jBpf',
    timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});


T.get('search/tweets', { q: '@MozDevz since:2016-05-01', count: 100 }, function(err, data, response) {
    var fs = require('fs');
     console.log(data);
    fs.writeFile("data/tweets.json", JSON.stringify(data.statuses), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});