function createGenerator(n) {
  const step = 1
  let value = 0
  let current
  const returnArray = []

  return function* generatorFunction() {
    while (value < n) {
      if (value <= 1) {
        returnArray[value] = value
        current = returnArray[value]
      } else {
        returnArray[value] = returnArray[value - 1] + returnArray[value - 2]
        current = returnArray[value]
      }
      yield current
      value += step
    }

    return current
  }
}

const generatorFunction1 = createGenerator(10)
const generatorObject1 = generatorFunction1()

for (let i = 0; i < 10; i += 1) {
  console.log(generatorObject1.next())
}

const generatorFunction2 = createGenerator(10)
const generatorObject2 = generatorFunction2()

console.log([...generatorObject2])
