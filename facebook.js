var database = [
	{
		username: "Billy",
		password: "123"
	},
	{
		username: "Emily",
		password: "hats"
	},
	{
		username: "Josh",
		password: "beans"
	}
]
var timeline = [
	{
		username: "John",
		update: "This is the coolest website"
	},
	{
		username: "Timmy",
		update: "Hey there John please call me this is your mom"
	},
	{
		username: "Nathan",
		update: "Moving out today!"
	}
]

/*var userName = document.getElementById("username");
var userPass = document.getElementById("password"); 
var body = document.getElementById("body");
var button = document.getElementById("login");
var ul = document.getElementById("123");*/






function isUserValid (user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
			return true
		} 
	} 
	return false
}



function OpeningUp (user, pass) {
	if (isUserValid(user,pass)) {
		login()
	}
	 else {
		alert("Sorry, wrong username or password");
	}
	
}
OpeningUp();