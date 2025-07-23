function twoSum(arr, target) {
  const set = new Set()

  for(let i = 0; i< arr.length; i++){
    const diff = target-arr[i]
    
    if(set.has(diff)){
      return [arr.indexOf(diff), i]
    }

    set.add(arr[i])
  }
  return []
}

module.exports = twoSum;
