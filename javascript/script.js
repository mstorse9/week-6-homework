//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn(){
	alert("Thanks for signing in")
}


//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp(){
	var userEmail = prompt("Enter your email address to sign up for the good stuff!");
	document.getElementById("output-here").innerHTML = "Thanks for signing up, " + userEmail;
}