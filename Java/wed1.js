//displaying value index and array
let suppers=[ 'batman', 'spiderman','webboy', 'aquaman']
suppers.forEach(
    function(value, index , array){
        console.log( value, index,array)}
        
)

//converting to uppercase
function UpperCase(value){
    return value.toUpperCase()
}

let supersCap = suppers.map(UpperCase);
console.log(supersCap)

//doubling numbers
let numbers= [1,2,3,4,5,6,7,8,9,10]

function multiplier(x){
    return x*3;
}
let multiplication= numbers.map(multiplier);
console.log(multiplication)

//displaying even numbers
let evenNumbers=numbers.filter(
    function (x,y,z){
        return x % 2=== 0 ;
    }
)
console.log(evenNumbers)

//learning how to use reduce
function summation(total,x,y,z){
    return total+x;
}
let add = numbers.reduce(summation);
console.log(add)

//learning how to use find
let findSuper=suppers.find(
    function(value){
        return value==='aquaman';
    }
)
console.log(findSuper)

