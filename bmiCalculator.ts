

interface Values {
  a: number
  b: number
}
const parseValues = (args: Array<string>): Values => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      a: Number(args[2]),
      b: Number(args[3]),
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

export default function calculateBmi(height: number, weight: number): string {
  if (height === 0 || weight === 0) {
    throw new Error('Invalid input')
  }
  height = height / 100
  if (weight / (height * height) >= 18.5 && weight / (height * height) < 25) {
    return 'Normal (healthy weight)'
  } else if (weight / (height * height) < 18.5) {
    return 'Below normal weight' + weight / (height * height) + height
  } else return 'Overwieght'
}

try {
  const { a, b } = parseValues(process.argv)
  console.log(calculateBmi(a, b))
} catch (err) {
  console.log(err.message)
}

