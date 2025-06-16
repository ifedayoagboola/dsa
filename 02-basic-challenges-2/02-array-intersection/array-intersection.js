function arrayIntersection(arr1, arr2) {
let int = []
for(let i = 0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
        int.push(arr1[i])
    }
}

return int
}

module.exports = arrayIntersection;
