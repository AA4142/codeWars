
function Solution(stringTest){
    //creating the stack that allows us to hold array values
    let stack = [];

    //creating the hashmap that allows us to compare key to test values
    let hashMap = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);



    //algorithm begins here

    //if the test value given is 0, we need to return false
    if(stringTest.length == 0){
        return false

        //we can continue if it is not 0
    }else{

        //this is a for loop for the duration of values in Stringtest
        for(let property in stringTest){

            //condition if our bracket is reverse to test it vs hashmap
            if(hashMap.has(stringTest[property])){
                //if the value is reverse and our stack is 0 it would not be valid
                if(stack.length == 0){
                    return false;

                //we want to compare it to the top value in stack
                //see if it matches the key
                }else{

                    //condition: if top value is same as value at key -> pop
                    if(stack[stack.length-1] == hashMap.get(stringTest[property])){
                        stack.pop();
                    }else{
                        return false;
                    }
                }

            //not in means it's forward, add it to our stack
            }else{
                stack.push(stringTest[property]);
            }
        }if(stack.length == 0){
            return true;
        }else{
            return false;
        }
 
    }

}

var isValid = Solution(s);
