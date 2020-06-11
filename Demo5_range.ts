import { range } from "rxjs"

const source =range(1,10);


source.subscribe(val => console.log(val));