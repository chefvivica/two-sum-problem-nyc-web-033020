const bruteForceTwoSum = (array, sum) => {
  let list = []
  array= [...new set(array)]
  for(let i = 0 ; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[i] + array[j] == sum){
        list.push([array[i],array[j]])
      }
    }
  }
  return list
}