// JavaScript Document

console.log(name); 


//"while ()" does a loop until a specific event happens while the "for ()" will do a loop a set amount of times

for (var i = 0; i < 10; i++) {
	document.write('<br>' + i); //the "i" will make it write 1, 2,3,4 etc on the webpage, the <br> will add a new line
	document.write('<h1>' + i + '</h2>');
}


function isCooleness () {
	var name = prompt ('What is your name');
	
	if (name == 'Tracy') {
		document.write ('That is an awesome name!');
	}else{
		document.write ("I don't like your name.");
	}
}

//calling function

isCooleness();


//function #2

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 3; i++ ) {
		document.write ('<strong>Tracy</strong><br>');
	}
};

writeNameMultipleTimes ();  //this is a variable but inside it is a function