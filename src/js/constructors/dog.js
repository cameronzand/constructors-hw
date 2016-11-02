function Dog (options) {
	options === options || {};
	this.color = options.color;
	this.status = "normal";

	if (options.hungry !== undefined) {
		this.hungry = options.hungry;

	}
	else {
		this.hungry = true;
	}


	// this.hungry = options.hungry !== undefined ? options.hungry : true;
	// if statement used above also works like above commented out code.
}

export { Dog };
