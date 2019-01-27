function reverseString (str) {
	let r_str = '';
	for (i = str.length; i > 0; i--) {
		r_str += str[i-1];
	}
	return r_str;
}

console.log(reverseString("Greetings from Earth"));