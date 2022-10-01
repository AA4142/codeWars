const sampleSentence = "Hey fellow warriors";

spinWords(sampleSentence);

function spinWords(string){
    let i = 0;
    const myArray = string.split(" ");
    // split the string
    
    while (i < myArray.length){
      if (myArray[i].length > 4 ){
        const splitString = myArray[i].split("");
        const reverseArray = splitString.reverse();
        myArray[i] = reverseArray.join("");
      }
      i++;
    }
    return (myArray.join(" "));

    
    
    // for i in array that is longer than 5, flip the words in the string
    
    // replace the value
    
    // return the string
  
  }