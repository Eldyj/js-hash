# Hash JS

usage:

```js
//import hash class
import {Hash} from "./hash.min.js";

//create hash
let foo = new Hash("bar", 17, "baz", 10);

//get values from hash
foo.get("bar"); //return 17

//push values
foo.push("boom", 43);

//get index of value
foo.indexOf(43); //return "boom"

//set value to exist index
foo.set("bar",19);

//get hash length
foo.length() //return 3, cuz now i have 3 indexes and 3 values
```
