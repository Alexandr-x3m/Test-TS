enum Gender {
  Male,
  Female,
}

interface Object {
  g: Gender,
  n: string
}
 
let result: { [key: string]: number[] | string[] | Array<Object> } = {}


let groupBy = <T, U>(array: T[], callback: (el: T) => U ): void  => {
    
    array.map((el: T) => {
        let floor = callback(el)
        let key = String(floor)
        

        //we are check if current key doesn't exist in this object
        if (typeof result[key] === 'undefined') {
            return result[key] = [el]
        }
        
        return result[key].push(el)
    })
}

groupBy<number, number>([1.2, 1.1, 2.3, 0.4], Math.floor) 
groupBy<string, string>(["one", "two", "three"], (el) => el.length)
groupBy<Object, Gender>(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
)
