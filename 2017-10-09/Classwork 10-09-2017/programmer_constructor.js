function Programmer(name, title, age, focus) {
	this.Name = name;
	this.Title = title;
	this.Age = age;
	this.Focus = focus;
};

var Zazil = new Programmer("Zazil", "Senior Developer", 35, "Python")

Zazil.prototype.printStats = function() {
		console.log(this);
};

Zazil.printStats();