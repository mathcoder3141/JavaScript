function repeatStringNumTimes (str, num) {
	var repeatedString = ""
	while (num > 0) {
		repeatedString += str;
		num--
	};
	return repeatedString;
}

console.log(repeatStringNumTimes("abc", -2));