/**
 *  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    The overall run time complexity should be O(log (m+n)).

    Example1:
    Input:nums1 = [1,3], nums2 = [2]
    Output:2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example2:
    Input:nums1 = [1,2], nums2 = [3,4]
    Output:2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

    Constraints:
    - nums1.length == m
    - nums2.length == n
    - 0 <= m <= 1000
    - 0 <= n <= 1000
    - 1 <= m + n <= 2000  
    - -106 <= nums1[i], nums2[i] <= 106
 */
function median(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;
    while(i + j < nums1.length + nums2.length) {
        if(nums1[i] < nums2[j] || nums2[j] === undefined) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    let midpoint = Math.floor((merged.length - 1) / 2);
    console.log(merged);
    if(merged.length % 2 == 0) {
        return (merged[midpoint] + merged[midpoint + 1]) / 2;
    }
    return merged[midpoint];
}

// Test cases
console.log(median([1, 3], [2]));
console.log(median([1, 2], [3, 4]));