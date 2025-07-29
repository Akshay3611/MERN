// higher order Function in JS

const radius = [3, 4, 5, 7];

const formulaofarea = function (r) {
  return Math.PI * r * r;
};

function calculate(radiusarray, formula) {
  const result = [];
  for (let i = 0; i < radiusarray.length; i++) {
    const a = formula(radiusarray[i]);
    result.push(a);
  }
  return result;
}

const result1 = calculate(radius, formulaofarea);
console.log(result1);
