function Person (options) {
	options = options || {};
	this.cool = options.cool || false;


};

Person.prototype.pet = function(dog) {
	dog.status = 'happy';
}

Person.prototype.feed = function(dog) {
	dog.hungry = false;
}

export { Person };
