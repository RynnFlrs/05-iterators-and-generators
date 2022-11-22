function createGenerator(n) {
  let index = 0
  const returnArray = []

  return function* generatorFunction() {
    while (index < n) {
      if (index <= 1) {
        returnArray[index] = index
      } else {
        returnArray[index] = returnArray[index - 1] + returnArray[index - 2]
      }
      yield returnArray[index]
      index += 1
    }

    return returnArray[index]
  }
}

const generatorFunction1 = createGenerator(5)
const generatorObject1 = generatorFunction1()

for (let i = 0; i < 10; i += 1) {
  console.log(generatorObject1.next())
}

const generatorFunction2 = createGenerator(5)
const generatorObject2 = generatorFunction2()

console.log([...generatorObject2])
