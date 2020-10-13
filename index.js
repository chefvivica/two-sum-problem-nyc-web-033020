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
describe('#bruteForceTwoSum', function() {
	it("collects each pair of numbers with a matching sum", function() {
		let array = [2, 3, 4, 3, 6, 7]
		let sum = 6
		expect(bruteForceTwoSum(array, sum)).toEqual([[2, 4], [3, 3]])
	})
})
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