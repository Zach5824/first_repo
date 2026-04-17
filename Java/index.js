//attempt 1

function getTotal(w,x,y,z){
    let sum=w+x+y+z ;
    return sum;
}
function printTotal(a ,b ){
    console.log("Value of a is", a) //"This is the total:"
    console.log("Value of b is", b) //14
    return a + b ;

}
console.log(printTotal("This is the total:" , getTotal(2,3,4,5)))

//attempt 2

function getTotal2(w,x,y,z){
    let sum=w+x+y+z ;
    return sum;
}
function printTotal2(a ,b ){
    console.log("Value of a2 is", a) //"This is the total:"
    console.log("Value of b2 is", b) //
    return a + b(2,3,4,5) ;

}
console.log(printTotal2("This is the total:" , getTotal2))