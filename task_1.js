
let a = prompt('Enter number one')
let b = prompt('Enter number two')

function maxNumber(a,b){
if (a>b){
    return a;
}
else if (b>a){
    return b;
}
else if (a=b){
    return a +'='+ b;
}

}
maxNumber(a,b)
alert(maxNumber(a,b));