function twoSum(arr, target) {
const set = new Set()

    for(let i = 0; i<arr.length; i++){
  const complement = target - arr[i]

  if(set.has(complement)){

  }
  set.add(indexOf(complement), i)
    }
}

module.exports = twoSum;
