"use strict";

const fs = require("fs/promises");

function Func() {}
Func.prototype.x = "ab";

let myFunc = new Func;
let source1 = 'something';
let source2 = 'another';

function write(stuff) {
  console.log(stuff);
  fs.writeFile(stuff);
}

if (source1) {
  myFunc[source2] = myFunc.x + source1;
}

write(myFunc.x);
