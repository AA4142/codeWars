let test = "(((({{";

function validBraces(braces){
    //key pair values "(){}[]"
    if(braces.length % 2 != 0){
        return false;
    }
    let map = { 
        ")" : "(",
        "}" : "{",
        "]" : "["
     }

     let bracketHolder = [];

     for (let i = 0 ; i < braces.length;  i++){

        if(braces[i] == map[")"] ||braces[i] == map["}"] ||  braces[i] == map["]"]){
            bracketHolder.push(braces[i])
        }else{
            if(map[braces[i]] == bracketHolder[(bracketHolder.length - 1)]){
                bracketHolder.pop();
            } else{
                return false;
            }

        }
     }
     if(bracketHolder.length < 1){
        return true
     }else{
        return false;
     }
  }

  console.log(validBraces(test));