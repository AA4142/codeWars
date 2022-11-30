/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 const ransomNote = "aa";
 const magazine = "aab"

 var canConstruct = function(ransomNote, magazine) {
    const map1 = new Map();

    for(let i = 0; i < magazine.length; i++){
        if(map1[magazine[i]]){
            map1[magazine[i]]++;
        }else{
            map1[magazine[i]] = 1;
        }
    }
    console.log(map1);
};

canConstruct(ransomNote, magazine);