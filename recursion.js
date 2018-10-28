function recursion (tree) {
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

    const final = [[result[0]]];
    
    for ( let i = 2; i < result.length; i=Math.pow(i,2) ) {
        const m = [];
        for ( let j = i-1; j < Math.pow(i,2)-1; j++ ) {
            if( !result[j] ) break;
                m.push( result[j] );
        }
        final.push(m);
    }
    return final;
}