function power(base, exp) {
    if(exp ===0){
        return 1
    }
    return base * power(base, exp-1)
}

// function power(base, exp) {
//     let i = 0

//     if(i === exp){
//         return 1
//     }else{
//         i++
//     }
//     return base * power(base, exp-1)
// }

module.exports = power;
