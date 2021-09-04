function linearsearch(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}
linearsearch([3, 4, 58, 9, 3, 5, 58], 58);

//worst case = O(n)
//best case = O(1)
