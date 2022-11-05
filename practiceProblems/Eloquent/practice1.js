/*
Definition for a singly-linked list.

function listNode (val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
*/

function listNode (val, next){
    this.val = (val === undefined? 0 : val);
    this.next = (next === undefined ? null : next);
}


var mergeTwoLists = function (list1, list2){
    const list3 = new listNode(null, null);
    let prev = list3;
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            prev.next = list1;
            list1 = list1.next;
        }else{
            prev.next = list2;
            list2 = list2.next;
        }
        //this just moves prev along with the newest value
        prev = prev.next;
    }
    if(list1 === null){
        prev.next = list2;
    }
    if(list2 === null){
        prev.next = list1;
    }
    return list3.next;

}

//first let's make all the nodes

let n6 = new listNode(4, null);
let n5 = new listNode(3, n6);
let n4 = new listNode(1, n5);
let L2 = n4;

let n3 = new listNode(4, null);
let n2 = new listNode(2, n3);
let n1 = new listNode(1, n2);
let L1 = n1

console.log(mergeTwoLists(L1, L2));