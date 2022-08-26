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
    let merged = [];
    for(let i = 0; i < totalLength; i++) {
        let min = 10_001 // greater than max according to spec
        let list = 0;
        for(let j in lists) {
            let val = lists[j][0];
            if(val < min && val !== undefined) {
                min = val;
                list = j;
            }
        }
        merged.push(lists[list].shift());
    }
    return merged;
}

console.log(mergeLists([[1,4,5],[1,3,4],[2,6]]));
console.log(mergeLists([]));
console.log(mergeLists([[]]));