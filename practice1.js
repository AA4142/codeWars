let test =[ 30,16,-47,19, -21];

//46,-38,10,-48,-43,-39,

function sortArray(array){
    let keyPairs = {};
    let oddArray = []

    for (let i = 0; i<array.length; i++){
        if(array[i] % 2 == 0){
            keyPairs[array[i]] = i;
        }else{
            oddArray.push(array[i]);
        }

    }
    console.log(keyPairs);
    console.log(oddArray);
    oddArray.sort(function(a, b) {return a-b});
    console.log(oddArray);

    for (const property in keyPairs){
        console.log("key pairs property" + keyPairs[property] + "property: " + property);
        oddArray.splice(keyPairs[property], 0 , property);
    }
    console.log(oddArray);




    /*
    oddArray.sort(function(a,b){return a-b});

    for(const property in keyPairs){
        oddArray.splice(keyPairs[property], 0, parseInt(property))
    }
    */


}

sortArray(test);