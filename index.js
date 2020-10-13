// const twoSum = ( sum, a)=>{
// let sorted = [...a].sort()
// let left = 0
// let right = sorted.length-1
// while(left < right){
//   let res = sorted[left] + sorted[right]
//   if(res === sum ) return [sorted[left], sorted[right]]
//   else if(res > sum) right--
//   else left++
// }
// }

const bruteForceTwoSum = (array, sum) => {
  let list = []
  for(let i = 0 ; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[i] + array[j] == sum){
        list.push([i,j])
      }
    }
  }
  return list
}