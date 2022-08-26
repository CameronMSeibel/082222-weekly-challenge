
class ListNode {

    constructor(value, next) {
        this.value = value ? value : 0;
        this.next = next ? next : null;
    }

}

class LinkedList {

    constructor(array) {
        if(!array) {
            this.length = 0;
            this.head = null;
            this.last = null;
        } else {
            this.length = array.length;
            if(array.length === 0) {
                this.head = null;
                this.last = null;
            } else {
                this.head = new ListNode();
                this.last = this.head;
                for(let i in array) {
                    this.last.value = array[i];
                    if(i !== array.length - 1) {
                        this.last.next = new ListNode();
                        this.last = this.last.next;
                    }
                }
            }
        }
    }

    peek() {
        return this.head.value;
    }

    push(value) {
        this.length++;
        if(this.head === null) {
            this.head = new ListNode(value);
            this.last = this.head;
        } else {
            this.last.next = new ListNode(value);
            this.last = this.last.next;
        }
    }

    shift() {
        if(this.length === 0) {
            return null;
        }
        this.length--;
        let value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    toString() {
        let temp = this.head;
        let string = "["
        for(let i = 0; i < this.length; i++) {
            if(i !== this.length - 1) {
                string += `${temp.value}, `;
                temp = temp.next;
            } else {
                string += temp.value;
            }
        }
        string += "]"
        return string;
    }

}

/*
    You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
    Merge all the linked-lists into one sorted linked-list and return it.

    Example1:
    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output:[1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6

    Example2:
    Input: lists= []
    Output: []

    Example3:
    Input: lists = [[]]
    Output: []

    Constraints:

    k == lists.length
    0 <= k <= 104
    0 <= lists[i].length <= 500
    -10^4 <= lists[i][j] <= 10^4
    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 10^4.
*/
function mergeLists(lists) {
    let totalLength = 0;
    for(let list of lists) {
        totalLength += list.length;
    }
    let merged = new LinkedList();
    for(let i = 0; i < totalLength; i++) {
        let min = 10_001 // greater than max according to spec
        let list = 0;
        for(let j in lists) {
            let val = lists[j].peek();
            if(val < min) {
                min = val;
                list = j;
            }
        }
        merged.push(lists[list].shift());
        if(lists[list].length === 0) {
            lists.splice(list, 1);
        }
    }
    return merged;
}

// Test cases
console.log(mergeLists([new LinkedList([1,4,5]),new LinkedList([1,3,4]), new LinkedList([2,6])]).toString());
console.log(mergeLists([]).toString());
console.log(mergeLists([[]]).toString());