interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

type Data = Array<number>

const parseData = (args: Array<string>): Data => {
  if (args.length < 5) throw new Error('Not enough arguments')

  if (args.slice(2).filter(x => isNaN(Number(x))).length > 0)
    throw new Error(`Array must be an array of numbers `)
  else return [...args.slice(2).map(x => Number(x))]
}

export default function calculateExercises(
  this: any,
  data: Array<number>,
): Result {
  const analyzedData: Result = {
    periodLength: data.length - 1,
    trainingDays: data.filter(x => x > 0).length - 1,
    success: this.average > this.target ? true : false,
    rating: this.trainingDays === 0 ? 1 : this.trainingDays > 4 ? 3 : 2,
    ratingDescription:
      this.rating === 1 ? 'real bad' : this.rating > 2 ? 'ok' : 'average bad',
    target: data[0],
    average: data.reduce((x, y) => x + y) / data.length - 1,
  }
  return analyzedData
}

try {
  const data = parseData(process.argv)
  console.log(calculateExercises(data))
} catch (Err) {
  console.log(Err.message)
}

