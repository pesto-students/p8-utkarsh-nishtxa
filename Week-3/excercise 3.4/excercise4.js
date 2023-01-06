function createStack() {
    let items= [];

    return{
        push(item) {
            items.push(item);
        },
        pop() {
        return items.pop();
        }
    }
}

const stack = createStack();
stack.push(10); //item added: 10
stack.push(5);  //item added: 5
stack.pop();  //item removed: 5
console.log(stack.items);