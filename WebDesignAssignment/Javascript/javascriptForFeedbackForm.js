/**
 * @author Ismaila Khan
 * Date: 27th February 2018
 * 
 * This Javascript file is responsible for handling the form data. 
 * It sets the required fields and also gives feedback to the user after form submission.
 * 
 */


/**This function sets the required fields**/
function setRequiredFields(){
	
	//name, lastname and rating are required
	document.getElementById("name").required = true;
	document.getElementById("lastName").required = true;
	document.getElementById("rating").required = true;
	
	
	
}

/**This function returns the selected rating**/
function getRating(){
	
	var rating = document.getElementById("rating").value;
	return rating;
	
}


/**This function sets the required fields by calling the method. It then gets the values of all the fields and alerts the user upon submit**/
function submitData(){
	
	//set required fields
	setRequiredFields();
	
	//These are the values that we need for the alert
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastName").value;
	var opinion = document.getElementById("opinion").value;
	var rating = getRating();
	
	//Only alert user if the value is not an empty string 
	if(rating != "" && name!= "" && opinion != ""){
		
		alert("Hello " + name + " " + lastName + ". You gave us a rating of "+ rating + " out of 5." + ".\nYou said the following: \n\"" + opinion + " \"."  + "\nThank you for your feedback!");
		
	} 
	
	else if(rating != "" && name!= ""){
		
		alert("Hello " + name + " " + lastName + ". You gave us a rating of "+ rating + " out of 5." + "\nThank you for your feedback."+"\n\nPlease do consider giving us your opinion next time!.");
		
	} 
	
	
	
}