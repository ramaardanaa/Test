
function isPrime(num) {
  if(num < 2 || num === 4){
    return false
  }else if(num === 2){
    return true
  }else{
    for(let i = 2; i < Math.ceil(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false
      } 
    }
    return true
  }
}

function getPrimes(num){
  let result = []
  for(i = 2; i < num; i++){
    if(isPrime(i)){
      result.push(i)
    }
  }
  return result
}

console.log(getPrimes(50))