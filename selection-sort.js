function selection() {
  arr = [0, 3, 2, 1, 0, 8, 3, 1, 0];
  for (i = 0; i < arr.length; i++) {
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

selection();
