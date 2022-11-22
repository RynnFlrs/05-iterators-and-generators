/* eslint-disable func-names */
/* eslint-disable object-shorthand */
function createIteratable(n) {
  let index = 0
  let num1 = 0
  let num2 = 1
  let nextNum = 0

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result
          if (index < n) {
            result = { value: nextNum, done: false }
            nextNum = num2 + num1
            num2 = num1
            num1 = nextNum
            index += 1
            return result
          }
          return { done: true }
        },
      }
    },
  }
}

const iterable = createIteratable(4)

console.log([...iterable])
