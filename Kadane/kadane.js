//Solution with time complexity of O(n)
const maxSubArray = (nums) => {
    if (nums.length == 0)
        return 0;
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        max = Math.max(nums[i], max);
    }
    return max;
};

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Maximum Sub Array :', maxSubArray(numbers)); // 6

const arr = [4, -1, -2, 1, 5]; // 7
console.log('Max Sub Array :', maxSubArray(arr));

/*Solution with time complexity of O(n^2). Quadratic Algorithm.
Idea: The sum of A[i..j] can be efficiently calculated as (sum of A[i..j-1]) + A[j].*/

/* const findMaxSubArrayBruteForce = (arr) => {
    let max_so_far = Number.NEGATIVE_INFINITY;
    let leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (let i = 0; i < len; i++) {
        maxSum = 0;

        for (let j = i; j < len; j++) {
            maxSum += arr[j];

            if (max_so_far < maxSum) {
                leftIndex = i;
                max_so_far = maxSum;
                rightIndex = j;
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array)); */