enum Gender {
  Male,
  Female,
}

interface Object {
  g: Gender,
  n: string
}

interface interfaceTS {
    arrayEl: number | string | Object
    array: Array<interfaceTS["arrayEl"]>,
    result: { [key: string]: interfaceTS["array"] },
    callback: (el: interfaceTS["arrayEl"]) => number | string
}

let result: interfaceTS["result"] = {}


let groupBy = (array: interfaceTS["array"], callback: interfaceTS["callback"] ) => {
    
    array.map((el: interfaceTS["arrayEl"]) => {
        let floor = callback(el)

        //we are check if current key doesn't exist in this object
        if (typeof result[floor] === 'undefined') {
            return result[floor] = [el]
        }

        return result[floor].push(el)
    })
}

//groupBy([1.2, 1.1, 2.3, 0.4], Math.floor);
groupBy(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
);
console.log(result)