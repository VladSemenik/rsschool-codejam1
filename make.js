function make (...args) {
    const prom = [];
    args.forEach(element => {
        prom.push(element);					
    });
    function insertedMaker (...args) {
        if( args[0] instanceof Function ){
            return prom.reduce(function (acc, element) { return args[0](acc, element) }, 0 );
        }else{
            args.forEach(element => {
                prom.push(element);				
            });
            return insertedMaker;
        }
    }
    return insertedMaker;
}
function sum (a, b) {
    return a + b;
}