"use strict";

function Func() {}
Func.prototype.x = "ab";

let myFunc = new Func;
let source1 = 'something';
let source2 = 'another';

function sink(stuff) {
  console.log(stuff)
}

if (source1) {
  myFunc[source2] = myFunc.x + source1;
}

sink(myFunc.x);
