

let x = 22;

var countBits = function(n){
    let binaryValue = n.toString(2);

    binaryValue = binaryValue.replace(/0/g, "");
    console.log(binaryValue);
    return binaryValue.length;
}
    

countBits(x);