const isEven = (num) => {
  return num % 2 === 0
}

const isOdd = (num) => {
  return num % 2 != 0
}

const sum = (...nums) => {
  return nums.reduce((acc, n) => n + acc, 0)
}

const subtract = (...nums) => {
  return nums.reduce((acc, n) => acc - n, 0)
}

const multiply = (...nums) => {
  return nums.reduce((acc, n) => n * acc, 1)
}

const divide = (num1, num2) => {
  if (num2 === 0) return "Division by 0 is not accepted."
  return num1 / num2
}

const sqrt = (numBase, numIndex = 2) => {
  const invertedNumIndex = numIndex * -1
  const invertedNumBase = numBase * - 1
  if (numIndex < 0) return "1 / " + (numBase ** (1 / invertedNumIndex)).toString()
  if (numIndex === 0) return 1
  if (numBase > 0) return numBase ** (1 / numIndex)
  if (numBase < 0 && isEven(numIndex)) return ((numBase * -1) ** (1 / numIndex)).toString() + "i"
  if (numBase < 0 && !isEven(numIndex)) return invertedNumBase ** (1 / numIndex)
  return null
}

const pow = (numBase, numIndex = 2) => {
  if (numIndex < 0) return "1 / " + numBase ** (numIndex * -1)
  if (numIndex === 0) return 1
  if (numIndex > 0) return numBase ** numIndex
  return null
}

