const test = "()[]{}"

var isValid = function(s){
    //let's take care of the edge cases
    const lastChar = s.charAt(s.length - 1);
    const firstChar = s.charAt(0);
    if((s.length % 2 == 1) || lastChar == "(" || lastChar == "{" || lastChar == "[" ||
        firstChar == ")" || firstChar == "}" || firstChar == "]"){
            return false;
    }
    //now we need to loop through the values
    let charHolder = "";
    for(let i = 0; i < s.length; i++){
        //check for reverse brackets
        if(s[i] == ")"){
            if(charHolder.charAt(charHolder.length-1) == "("){
                charHolder = charHolder.slice(0, -1);
            }else{
                return false;
            }

        } else if(s[i] == "}"){
            if(charHolder.charAt(charHolder.length-1) == "{"){
                charHolder = charHolder.slice(0, -1);
            }else{
                return false;
            }

        } else if(s[i] == "]"){
            if(charHolder.charAt(charHolder.length-1) == "["){
                charHolder = charHolder.slice(0, -1);
            }else{
                return false;
            }

        }else{
            charHolder = charHolder + s[i];
        }
    }
    if(charHolder.length == 0){
        return true
    }else{
        return false;
    }
}

console.log(isValid(test));