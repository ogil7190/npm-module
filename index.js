exports.kapi = function(log) {
    console.log( "KAPI", log );
}

exports.papi = function(log) {
    console.error( "KAPI ERROR", log );
}

exports.tapi = function(log) {
    console.warn( "KAPI WARN", log );
}

exports.zapi = function(log) {
    console.info( "KAPI INFO", log );
}