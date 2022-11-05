const testval = "()[]{}"

var isPair = function(s){

    //javascript array allows for push() and pop();
    let stack = [];
    //set my map
    const closeToOpen = new Map();
    closeToOpen.set(')', '(');
    closeToOpen.set(']', '[');
    closeToOpen.set('}', '{');

    for (let i = 0; i < s.length; i++){
        if(s[i] in closeToOpen){
            console.log("YOOOO");
        }
    }

}

isPair(testval);