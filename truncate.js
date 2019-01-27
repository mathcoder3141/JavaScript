function truncateString(str, num) {
	if (str.substring(0, num) === str) {
		return str;
	}
	else {
		return str.substring(0, num) + '...';
	}
}