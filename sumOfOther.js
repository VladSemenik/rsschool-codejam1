function sumOfOther(arr){
    let mas = [];
    for(let i = 0; i < arr.length; i++){
        let prom = 0;
        for(let j = 0; j < arr.length; j++){
            prom += arr[j];
        }
        mas.push(prom - arr[i]);
    }
    console.log( mas );
    console.log( arr );
}