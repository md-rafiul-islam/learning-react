import { useCallback } from "react";

let abc = [
    {
        name:"abc",
        age:1
    },
    {
        name:"abc",
        age:2
    },
    {
        name:"abc",
        age:3
    },
    {
        name:"abc",
        age:4
    }
]

const callback=(element)=>{
    return {...element}
}

const def = abc.map(callback);
console.log(def);