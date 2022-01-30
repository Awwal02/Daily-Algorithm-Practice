function bubbleSort(arr) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j+1, j);
      }
    }
  }
  return arr;
}
bubbleSort([5, 4, 6, 1, 3, 8]);
