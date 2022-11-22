/* eslint-disable func-names */
/* eslint-disable object-shorthand */
function createIteratable(n) {
  let index = 0
  const fibArray = []

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result
          if (index < n) {
            if (index <= 1) {
              fibArray[index] = index
            } else {
              fibArray[index] = fibArray[index - 1] + fibArray[index - 2]
            }
            result = { value: fibArray[index], done: false }
            index += 1
            return result
          }
          return { value: index, done: true }
        },
      }
    },
  }
}

const iterable1 = createIteratable(4)

// eslint-disable-next-line no-restricted-syntax
for (const number of iterable1) {
  console.log(number)
}

const iterable2 = createIteratable(4)

console.log([...iterable2])
