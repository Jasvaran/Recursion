function fibs(n) {
    let fibArray = [0, 1]
    let previousPreviousNumber
    let previousNumber = 0
    let currentNumber = 1

    for (let i = 2; i < n; i++){
        previousPreviousNumber = previousNumber
        previousNumber = currentNumber
        currentNumber = previousPreviousNumber + previousNumber
        fibArray.push(currentNumber)

    }
    console.log(currentNumber)
    console.log(fibArray)
    return currentNumber
}


fibs(5)


function fibsRec(n, array = [0, 1]){
  if (n <= 0){
    return "Enter a positive integer"
  } else if (n === 1){
    return [0];
  } else if (array.length >= n){
    return array
  }
  return fibsRec(n, [...array, array.at(-1) + array.at(-2)])

}

console.log(fibsRec(5))
  

