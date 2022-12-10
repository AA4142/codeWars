let test = ['w','e','w','e','w','e','w','e','w','e'];

//let test = ['w', 't'];


function isValidWalk(walk){
    let n = 0;
    let e = 0;
    let s = 0;
    let w = 0;

    if(walk.length == 1 || walk.length > 10){
        return false
    }

    for(let i = 0; i < 10; i++){
        switch(walk[i]){
            case 'n':
                n += 1;
                break;
            case 'e':
                e += 1;
                break;
            case 's':
                s += 1;
                break;
            case 'w':
                w += 1;
                break;
        }

    }

    if(n != s || e != w){
        return false
    }else{
        return true
    }
}

console.log(isValidWalk(test));