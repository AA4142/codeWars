
const string = "ccc";

 var longestPalindrome = function(s) {
    const stringMap = {};
    let totalLength = 0;
    let hasOdd = 0;

    for(let i = 0; i < s.length; i++){
        if(stringMap[s[i]]){
            stringMap[s[i]] += 1;
        }else{
            stringMap[s[i]] = 1;
        }
    }

    console.log(Object.values(stringMap).length);
    console.log(Object.values(stringMap));

    if(Object.values(stringMap).length == 1){
        let tempVal = Object.values(stringMap);
        console.log(tempVal);
    }


    Object.values(stringMap).forEach((val) => {
        if(val >= 2){
            let evenValues = Math.floor(val / 2);
            totalLength = totalLength + (evenValues * 2);
        }else{
            hasOdd = 1;
        }
    });

    return(totalLength + hasOdd);
    
};

longestPalindrome(string);
