class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    clear(){
        this.items = []
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }

}

module.exports = Stack