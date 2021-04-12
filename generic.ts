enum Gender {
  Male,
  Female,
}

interface Objecta {
  g: Gender,
  n: string
}

let groupBy = <T, U>(array: null | T[], callback: (el: T) => U | typeof NaN | null ): null | {[key: string]: T[] | typeof NaN[]}  => {

    if (array === null) return null

    let result: { [key: string]: T[] } = {}
    
      array.map((el: T) => {
          let floor = callback(el)
          let key = String(floor)
          
          //we are check if current key doesn't exist in this object
          if (typeof result[key] === 'undefined') {
              return result[key] = [el]   
          }
          return result[key].push(el)
      })
  console.log(result)
  console.log('-------------------------')
  return result
}

groupBy<number, number>([1.2, 1.1, 2.3, 0.4], Math.floor) 
groupBy<string, string>(["one", "two", "three"], (el) => el.length)
groupBy<Objecta, Gender>(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
)
