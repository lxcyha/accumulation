const Stack = require('./stack')
// 进制转换
function baseConverter(decNumber, base){

    let remStack = new Stack(),rem,baseString='',digits = '0123456789ABCDEF'

    while(decNumber>0){
        rem = decNumber % base
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while(remStack.size()>0){
        baseString+=digits[remStack.pop()]
    }
    return baseString
}

console.log(baseConverter(16,16))