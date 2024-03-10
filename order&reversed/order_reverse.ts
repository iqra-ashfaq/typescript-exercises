
let places : string[] = ['paris', 'dubai', 'france', 'italy', 'japan']

//print array orignal
console.log(places) ;
//print copy array in order

console.log([...places].sort());

//print orignal array again.
console.log(places) ;
//print copy array in reversed.


console.log([...places].sort().reverse());

//print orignal array
console.log(places) ;
//reversed the orignal array
console.log(places.reverse()) ;

//reverse the array to make it in orignal condition
console.log(places.reverse()) ;
//sort orignal array
console.log(places.sort()) ;
//reverse your sort array
console.log(places.sort().reverse()) ;

