function bubbleSort(arr) {
  for (j = 0; j < arr.length; j++) {
    noSwap = true;
    for (i = 1; i < arr.length - j; i++) {
      if (arr[i - 1] > arr[i]) {
        let replace = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = replace;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

bubbleSort([9, 0, 4, 2, 5, 8, 66, 22, 2]);
