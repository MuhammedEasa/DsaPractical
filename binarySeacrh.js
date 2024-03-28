// normal way
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 4));


// with recusrion
function recursiveBinary(arr,target){
    return Search(arr,target,0,arr.length-1)
}
function Search(arr,target,left,right){
    if(left>right)return -1
    let middle  = Math.floor((left+right)/2)
if(target === arr[middle]){
    return middle
}
if(target<arr[middle]){
    return Search(arr,target,left,middle-1)
}else{
    return Search(arr,target,middle+1,right)
}
}

console.log(recursiveBinary([1,2,3,4,5],4));