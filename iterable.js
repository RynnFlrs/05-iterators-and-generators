/* eslint-disable func-names */
/* eslint-disable object-shorthand */
function createIteratable(start = 0, end = 10, step = 1) {
  let value = start
  let current
  const fibArray = []

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result
          if (value < end) {
            if (value <= 1) {
              fibArray[value] = value
              current = fibArray[value]
            } else {
              fibArray[value] = fibArray[value - 1] + fibArray[value - 2]
              current = fibArray[value]
            }
            result = { value: current, done: false }
            value += step
            return result
          }
          return { value, done: true }
        },
      }
    },
  }
}

const iterable1 = createIteratable(0, 5, 1)

// eslint-disable-next-line no-restricted-syntax
for (const number of iterable1) {
  console.log(number)
}

const iterable2 = createIteratable(0, 5, 1)

console.log([...iterable2])
