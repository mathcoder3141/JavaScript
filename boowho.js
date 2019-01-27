function booWho(bool) {
	return typeof bool === 'boolean'
}

console.log(booWho(true))
console.log(booWho(false))
console.log(booWho("True"))
console.log(booWho(1))