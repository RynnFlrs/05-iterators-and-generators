function createGenerator(n) {
  let index = 0
  let num1 = 0
  let num2 = 1
  let nextNum = 0

  return function* generatorFunction() {
    while (index < n) {
      yield nextNum
      nextNum = num2 + num1
      num2 = num1
      num1 = nextNum
      index += 1
    }
  }
}

const generatorFunction1 = createGenerator(7)
const generatorObject1 = generatorFunction1()

for (let i = 0; i < 12; i += 1) {
  console.log(generatorObject1.next())
}

const generatorFunction2 = createGenerator(7)
const generatorObject2 = generatorFunction2()

console.log([...generatorObject2])
