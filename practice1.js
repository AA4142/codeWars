
let test = [false,1,0,1,2,0,1,3,"a"];


function moveZeros(arr) {
    let zeroesArray = [];

    const filtered = arr.filter( (x) => {
        if(x === 0){
            zeroesArray.push(x);
        }
        return x !== 0;
    });

    console.log(zeroesArray);

    
    for(const value in zeroesArray){
        filtered.push(zeroesArray[value]);
    }

    console.log(filtered);

    return
  }

moveZeros(test);