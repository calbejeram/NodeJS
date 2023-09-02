let log = {
    info: function(varinfo) {
        console.log(`info: ${varinfo}`);
    },
    warning: function(varwarning) {
        console.log(`warning: ${varwarning}`);
    },
    error: function(varerror) {
        console.log(`error: ${varerror}`);
    }
}

module.exports = log;