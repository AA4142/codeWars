const ransomNote = "aa";
const magazine = "aab";


 var canConstruct = function(ransomNote, magazine) {
    let letterHolder = {};
    for(let i = 0; i < magazine.length; i++){
        letterHolder[magazine[i]] ? letterHolder[magazine[i]]++ : letterHolder[magazine[i]] = 1;
    }
    console.log(letterHolder);

    for(let j = 0 ; j < ransomNote.length; j++){
        if(!letterHolder[ransomNote[j]]){
            return false;
        } else{
            letterHolder[ransomNote[j]]--
        }
    }
    return true;
    }
;

console.log(canConstruct(ransomNote, magazine));



let string1 = "aaabbcc";
let ransom = "bacz";
let emptyObj = {};


/*
for(let i = 0; i < string1.length; i++){
    if(emptyObj[string1[i]]){
        emptyObj[string1[i]]++;
    }else{
        emptyObj[string1[i]] = 1;
    }
}

/*
for (let j = 0; j < ransom.length; j++){
    emptyObj[ransom[j]] ? emptyObj[ransom[j]]-- : console.log("false");
}
*/


