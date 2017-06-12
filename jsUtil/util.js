module.exports = {
    ts(val){
        return "" + val
    },
    ti(val){
        return ~~val
    },
    tf(val){
        return 1* val
    },
    tb(val){
        return !! val
    },
    ta(val){
        return [val]
    },
}
