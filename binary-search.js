function binarySearch(arr, elem) {
  if (arr.length == 0) return -1;
  start = 0;
  end = arr.length - 1;
  middle = Math.floor(end + start / 2);

  while (end != start && arr[middle] != elem) {
    if (arr[middle] > elem) {
      end = middle - 1;
    }

    if (arr[middle] < elem) start = middle + 1;

    middle = Math.floor(end + start / 2);
  }
  if (arr[middle] == elem) return middle;
  return -1;
}

binarySearch([1, 2, 3, 6, 8, 9], 1);
