const testString = "(){}}{";

var isValid = function(s){
    let parenHolder = "";



    if(s[0] == ")" || s[0] == "]" || s[0] == "}" || s.length == 1 || s.length % 2 != 0){
        return false
    } 

    for (let i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            parenHolder = parenHolder + s[i];
        }
        switch(s[i]){
            case ")":{
                if(parenHolder[parenHolder.length-1] == "("){
                    parenHolder = parenHolder.slice(0, -1);
                    if(parenHolder.length < 1){
                        return true;
                    }
                }else{
                    return false;  
                }
            }
            case "]":{
                if(parenHolder[parenHolder.length-1] == "["){
                    parenHolder = parenHolder.slice(0, -1);
                    if(parenHolder.length < 1){
                        return true;
                    }
                }else{
                    return false;
                }

            }
            case "}":{
                if(parenHolder[parenHolder.length-1] == "{"){
                    parenHolder = parenHolder.slice(0, -1);
                    if(parenHolder.length < 1){
                        return true;
                    }
            }else{
                return false;
            }

        }
    }

} return false;

}

console.log(isValid(testString));