let number = prompt('Enter the number')
function revers(number){
    if(number>0){
        return '-'+ number;
    }
    else if(number<0){
        return Math.abs(number);
    }
}
revers(number)
alert(revers(number))