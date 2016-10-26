function Dog (options) {
	options === options || {};
	this.color = options.color;
	this.hungry = options.hungry;
	this.status = options.happy;
}

export { Dog };
