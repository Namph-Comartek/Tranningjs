//floating point numbers
let x = 0.1;
let y = 0.2;
let z = x + y;
console.log(z);
//output: 0.30000000000000004

/*console.log(z.toFixed(2));
console.log(z.toPrecision(2));
console.log(z.toString(2));
console.log(z.toExponential(2));*/
console.log(Math.floor(z));
console.log(Math.ceil(z));
console.log(Math.round(z));
console.log(Math.trunc(z));
console.log(Math.random(z));

//null and undefined
let u = undefined;
let n = null;
console.log(u);
console.log(n);

const a ={};
b ={};
const c = 3,
  d = 3,
  e = "3";
console.log(a === b);
//output: false
console.log(c === d);
//output: true
console.log(c === e);
//output: true
console.log(c === +e);
//output: true
console.log(JSON.stringify(a) === JSON.stringify(b));
//output: true
console.log(JSON.stringify(c) === JSON.stringify(d));
//output: true
console.log(JSON.stringify(c) === JSON.stringify(e));
//output: true


function getExecutionTime(title, callback) {
    console.info(title);
    const start = Date.now();
    callback();
    const end = Date.now();
    return end - start;
  }
  const n = 300000;
  const a = Array.from({ length: n }, (_, i) => i + 1);
  let sum, j;
  console.log(
    getExecutionTime("For loop caculating...", () => {
      sum = 0;
      for (let i = 0; i < n; i++) {
        sum += a[i];
      }
    })
  );
  console.log(
    getExecutionTime("For in caculating...", () => {
      sum = 0;
      for (i in a) {
        sum += a[i];
      }
    })
  );
  console.log(
    getExecutionTime("For of caculating...", () => {
      sum = 0;
      for (i of a) {
        sum += i;
      }
    })
  );
  console.log(
    getExecutionTime("For each caculating...", () => {
      sum = 0;
      a.forEach((v) => (sum += v));
    })
  );
  console.log(
    getExecutionTime("While loop caculating...", () => {
      sum = 0;
      j = 0;
      while (j < n) {
        sum += a[j++];
      }
    })
  );
  console.log(
    getExecutionTime("Do while loop caculating...", () => {
      sum = 0;
      j = 0;
      do {
        sum += a[j++];
      } while (j < n);
    })
  );
  
  //Fastest is For loop
  //if and else
    let x = 0;
    let y = 0;
    if (x === y) {
        console.log("x and y are equal");
        }
    else {
        console.log("x and y are not equal");
        }