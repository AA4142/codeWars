let test =[1, 3, 2, 8, 5, 4, 11 ];



function sortArray(array){
    let keyPairs = {};
    let oddArray = []

    for (let i = 0; i<array.length; i++){
        if(array[i] % 2 == 0){
            keyPairs[i] = array[i];
        }else{
            oddArray.push(array[i]);
        }

    }
    oddArray.sort(function(a, b) {return a-b});
    for (const property in keyPairs){
        oddArray.splice(property, 0 , keyPairs[property]);
    }

    if(oddArray == array){
        return undefined;
    }else{
        return oddArray;
    }

}

sortArray(test);