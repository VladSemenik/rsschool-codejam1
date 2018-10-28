function recursion (tree) {
    // const final = [];
    const result = [];
    const queue = [tree];
    helpRecursion (tree);
    function helpRecursion (tree) {
        if (!tree) {
            return null;
        }
        if(queue[0] instanceof Object) {
            let node = queue.shift();
            result.push(node.value);
            queue.push(node.left);
            queue.push(node.right);
            helpRecursion(node);
        }
    }
    
    // for (let i = 2; i < result.length; i=Math.pow(i,2)) {
    //     const m = [];
    //     for (let j = i-2; j < Math.pow(i,2); j++) {
    //         m.push(result[j]);
    //     }
    //     final.push(m);
    // }
    return result;
}