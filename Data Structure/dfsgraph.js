
const depthFirstPrint = (source, graph) => {
    console.log(source);

    for(let neighbor of graph[source]) {
        depthFirstPrint(neighbor, graph)
    }

    // const result = [];
    // const stack = [source];

    // while (stack.length > 0) {
    //     const current = stack.pop();
    //     result.push(current);
    //     for (let neighbor of graph[current]) {
    //         stack.push(neighbor);
    //     }
    // }
    // return result;
    
}

const breadthFirstPrint = (source, graph) => {
    const values = [];
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }

    }
    return values;
}

const graph = {
    a: ['c','b' ],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(depthFirstPrint('a', graph))
console.log(breadthFirstPrint('a', graph))