function setOfNumbers(arr,num,i=1, index=0){
  if(num === 0){
    console.log(arr.slice(0,index))
  }
  for(let j = i; j <= num; j++){
    arr[index] = j
    setOfNumbers(arr,num-j,j,index+1)
  }
}
let arr = []

setOfNumbers(arr,6)

