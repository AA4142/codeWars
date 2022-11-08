//valid anagram
 const s = "anagram"; 
 const t = "naaaram";

var isAnagram = function(s, t){
    if(s.length != t.length){
        return false;
    }
    const letters = {};

    for(let i = 0 ; i < s.length; i++){
        if(!letters[s[i]]){
            letters[s[i]]= 0
        }
        letters[s[i]]++;

    }
    console.log(letters);

    for(let j = 0; j < t.length; j++){
        
        if(!letters[t[j]]){
            return false;
        }
        letters[t[j]]--;

    }
    return true;

}
