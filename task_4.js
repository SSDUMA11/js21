let km = prompt('Enter the distance')
let metric=prompt('Enter the ')
function KmToM(km){
    return km*1000 +'m';  
}

function KmToCm (km){
    return km*100000 + 'cm';
}

function getMetric(metric,km,m,cm){
  if(metric==='cm'){
   return cm(km)
  }
  if(metric==='m'){
   return m(km)
  }
}

alert(getMetric(metric,km,KmToM,KmToCm))


