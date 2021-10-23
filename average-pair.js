// add whatever parameters you deem necessary
function averagePair(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;

        if (average == num) return true;
        if (average > num) right--;
        if (average < num) left ++;
    }

    return false;
}
