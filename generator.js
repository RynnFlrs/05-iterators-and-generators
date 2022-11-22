function createGenerator(n) {
  let value = 0
  const returnArray = []

  return function* generatorFunction() {
    while (value < n) {
      if (value <= 1) {
        returnArray[value] = value
      } else {
        returnArray[value] = returnArray[value - 1] + returnArray[value - 2]
      }
      yield returnArray[value]
      value += 1
    }

    return returnArray[value]
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
