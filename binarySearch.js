const numbers = [10, 15, 21, 26, 30, 39, 50, 60, 65, 71, 79];
const numbers2 = [79, 71, 65, 60, 50, 39, 30, 26, 21, 15, 10];
const target = 30;
const target2 = 50;

const binarySearch = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return `target found at index ${mid}`
        }
        else if (numbers[mid] > target) {
            end = mid - 1;
        }
        else if (numbers[mid] < target) {
            start = mid + 1;
        }
    };
    return "target not found";
};

console.log(binarySearch(numbers, target));

const orderAgnosticBinarySearch = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    let mid;
    let isAscending = numbers[0] < numbers[numbers.length - 1];

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return `target found at index ${mid}`
        }
        else if (numbers[mid] > target) {
            isAscending ? end = mid - 1 : start = mid + 1;
        }
        else if (numbers[mid] < target) {
            isAscending ? start = mid + 1 : end = mid - 1;
        }
    };
    return "target not found";
};

console.log(orderAgnosticBinarySearch(numbers2, target2));