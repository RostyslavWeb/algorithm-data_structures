const array = [1, 4, 5, 8, 23, 10, 7, 2, 11, 15, 22, 32, 54, 34]
count = 0;

function selectionSort(array) {
  // Finding the smallest number in subarray
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count += 1
    }
    // Swapping the elements
    if (indexMin != i) {
      let tmp = array[i]
      array[i] = array[indexMin]
      array[indexMin] = tmp
    }
  }
  return array
}


console.log(selectionSort(array))
console.log(count)
//O(n*n)