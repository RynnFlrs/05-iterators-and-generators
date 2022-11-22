function createGenerator(start = 0, end = 10, step = 1) {
  let value = start
  let current
  const returnArray = []

  return function* generatorFunction() {
    while (value < end) {
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

const generatorFunction1 = createGenerator(0, 10, 1)
const generatorObject1 = generatorFunction1()

for (let i = 0; i < 12; i += 1) {
  console.log(generatorObject1.next())
}

const generatorFunction2 = createGenerator(0, 10, 1)
const generatorObject2 = generatorFunction2()

console.log([...generatorObject2])
