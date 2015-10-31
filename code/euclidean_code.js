///////////// JS FIDDLE CODE TO GENERATE TABLES //////////////////////

var mapRange = function(a, b, fn) {
	return _.map(_.range(a,b), fn);
}

function out(str)
{
    document.getElementById('output').innerHTML += str + "\n";
}

var euclid = function(steps, fill, offset) {
    //console.log('Euclid',steps,fill);
    var val = 0;
	var bits = mapRange(0,steps, function(idx) {
        var pos = (idx - offset);
        var a = (pos * fill);
        var a2 = a % steps;
        var on = a2 < fill ? 1 : 0;
        if(on) val += Math.pow(2,steps - idx - 1);
        return on;
    });
    // Output bit array
    out('[' + bits + ']');
    // Output 32-bit right aligned value
    //out(val);
    // Output normalised float value
    var scaled = val / (Math.pow(2,steps) - 1);
    //out(scaled);
    return bits;
};

 var allSets = mapRange(1,32, function(steps) {
    var offset = ((steps * (steps + 1)) / 2) - 1;
   	//console.log(steps + ' : ' + offset);
    var sets = mapRange(0,steps+1, function(n) {
       return euclid(steps, n, 0);
    });
    //console.log('SET ' + steps + ' has ' + sets.length + ' seqs.');
    return sets;
});

//console.log('All Sets',allSets);


////////////////////////////////

// Read offset of euclidean table
//var offset = ((steps * (steps + 1)) / 2) - 1;

