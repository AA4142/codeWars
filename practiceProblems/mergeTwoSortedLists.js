


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */






class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}


class LinkedList{
    constructor(head){
        this.head = (head===undefined ? null : head);
    }
}


let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;



let node4 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

let L1 = new LinkedList(node1);
let L2 = new LinkedList(node4);

console.log(L1);
console.log(L2);

var mergeTwoLists = function(list1, list2){

    //create linked list pointer
    var list3 = new ListNode(null, null);
    var prev = list3;

    //while both linked lists are not empty
    while(list1 !== null && list2 !== null){
        if(list1.data < list2.data){
            list3.next = list1;
            list1 = list1.next;

        }else{
            list3.next = list2;
            list2 = list2.next;
        }
        list3 = list3.next;
    }

    if(list1 === null){
        list3.next = list2;
    }else if(list2 === null){
        list3.next = list1;
    }
    return prev.next;
    


};



console.log(mergeTwoLists(L1, L2));


