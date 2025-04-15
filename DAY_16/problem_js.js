function findSubarrayWithSum(arr, target) {
    let start = 0;
    let current_sum = 0;

    for (let end = 0; end < arr.length; end++) {
        current_sum += arr[end];

        while (current_sum > target && start < end) {
            current_sum -= arr[start];
            start++;
        }

        if (current_sum === target) {
            return [start + 1, end + 1]; 
        }
    }

    return [-1];
}

// Test Cases
console.log(findSubarrayWithSum([1, 2, 3, 7, 5], 12));       
console.log(findSubarrayWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(findSubarrayWithSum([5, 3, 4], 2));