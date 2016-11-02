function Person (options) {
	options = options || {};


};

Person.prototype.pet = function(dog) {
	dog.status = 'happy';
}

Person.prototype.feed = function(dog) {
	dog.hungry = false;
}

export { Person };
t