/**
 * @author Ismaila Khan
 * Date: 27th February 2018
 * 
 * This Javascript file is responsible for handling the form data. 
 * It sets the required fields and also gives feedback to the user after form submission.
 * 
 */


x


/**This function returns the selected rating**/
function getBagQuantity(){
	
	var quantity = document.getElementById("backpackQuantity").value;
	return quantity;
}

function getBagColor(){
	
	var color = document.getElementById("backpackColour").value;
	return color;
}

/**This function returns the selected rating**/
function getShirtQuantity(){
	
	var quantity = document.getElementById("shirtQuantity").value;
	return quantity;
}

function getShirtColor(){
	
	var color = document.getElementById("shirtColour").value;
	return color;
}

/**This function returns the selected rating**/
function getCapQuantity(){
	
	var quantity = document.getElementById("capQuantity").value;
	return quantity;
}

function getCapColor(){
	
	var color = document.getElementById("capColour").value;
	return color;
}
/**This function sets the required fields**/
function setRequiredFields(){
	
	//name, lastname and rating are required
	document.getElementById("name").required = true;
	document.getElementById("lastName").required = true;
	document.getElementById("rating").required = true;	
	
	
	
}


/**This function sets the required fields by calling the method. It then gets the values of all the fields and alerts the user upon submit**/
function submitData(){
	
	
	//These are the values that we need for the alert
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastName").value;
	
	var bagQuantity = getBagQuantity();
	var bagColor = getBagColor();
	
	var shirtQuantity = getShirtQuantity();
	var shirtColor = getShirtColor();
	
	var capQuantity = getCapQuantity();
	var capColor = getCapColor();
	
	var total = bagQuantity * 3 + shirtQuantity * 5 + capQuantity * 4;
	
	alert("Hello " + name + " " + lastName +"." + "\nYou have ordered the following:"+ "\n" + bagQuantity + " " + bagColor + " bags" + "\n" + shirtQuantity + " " +shirtColor + " shirts"  + "\n" + capQuantity + " " + capColor + " caps" + "\nYour Total: " + total   + "\nThank you for shopping with us.");	
	
}


