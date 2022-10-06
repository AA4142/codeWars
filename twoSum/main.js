/*

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


*/

const testOne = "()[]{}" // true
const testTwo = "(]" // False
const testThree = "()[]{}(" //False

console.log(Solution(testOne));


//Solution(testOne);


function Solution(stringTest){
    //creating the stack where we will hold our values from stringTest
    let stack = []

    //creating a javascript hashmap that will use the ")"
    //outside braces as keys and the inside braces as values
    let closeToOpenHashMap = new Map([
        [")" , "("],
        ["]", "["],
        ["}", "{"],
    ]);

    



    //checking for every value in our string test
    for(character in stringTest){
        //is this a closing paranthesis? checks with ) ] }
        if(character in closeToOpenHashMap){
            if(stack.length == 0){
                return false;
            }
            else{
                if(stack[stack.length - 1] == closeToOpenHashMap.get(character)){
                    stack.pop();
                }
                else{
                    return false;
                }
            }
        }
        else{
            stack.push(character);
        }
        console.log("stack in the loop" + stack)
    
    }
    console.log("Final Stack" + stack);
}



    /*
    if(stack.length==0){
            return true;
        }else{
            console.log("Third false");
            return false;

        }








function testFunction(){
    let hashMap = new Map([
        [")" , "("],
        ["]", "["],
        ["}", "{"]
    ]);

    let fakeStack = ["(", "["];
    
    let x = "";

    if(fakeStack == hashMap.get("]")){
        console.log("TRUE");
    }
    else{
        console.log("no");
    }


    if(fakeStack && fakeStack[fakeStack.length-1] == hashMap.get("]")){
        console.log("TRUE" + fakeStack);
    }
    else{
        console.log("False" + fakeStack);
    }
   
}


testFunction(); */