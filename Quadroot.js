function Quadroot(a, b, c){
	D = ((-b * -b) - 4 * a * c)
	return D;
}

function sqrt(x){
	return x ** (1/2);
}

do {
  var a = prompt('Please enter a number between -100.0 and 100.0 for x^2');
  if (a < -100.0 || a > 100.0) {
  	console.log("The number you have entered is not valid");
  }
} while (a < -100.0 || a > 100.0);

do {
  var b = prompt('Please enter a number between -100.0 and 100.0 for x');
  if (b < -100.0 || b > 100.0) {
    console.log("The number you have entered is not valid");
  }
} while (b < -100.0 || b > 100.0);

do {
  var c = prompt('Please enter a number between -100.0 and 100.0 for the constant');
  if (c < -100.0 || c > 100.0) {
  	console.log("The number you have entered is not valid");
  }
} while (a < -100.0 || a > 100.0);

var D = Quadroot(a, b, c);

var D2 = (-b + sqrt(D))/(2*a);

var D3 = (-b - sqrt(D))/(2*a);

if (D < 0) {
    console.log("The determinant is less than 0 so the roots are imaginary/not real");
};

if (D == 0) {
    console.log("The determinant is 0 so there will only be one root, the root is " + D2);
}; 

if (D > 0) {
    console.log("The determinant is greater than 0 so there will be two roots, the roots are " + D2 + " and " + D3);
};