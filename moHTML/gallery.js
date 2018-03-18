

//function to enlarge image into middle grid box and insert text into "desc" grid box
function enlarge(name){
	var enl = document.getElementById("enlImg");

	var path = ("images/" + name);
	var source = path;
		
	
	switch(name){
		case "1b.jpg": 
			enl.src = source;
			document.getElementById("descText").innerHTML = "Picture of the ISS space station. A collaborative effort by the Canadian Space Agency, European Space Agency, Japan Aerospace Exploration Agency, Roscosmos, and NASA. The ISS is expected to be used until 2028.";
		     break;
			
		case "2b.jpg": 
			enl.src = source;
				document.getElementById("descText").innerHTML = "Picture of the Atom. The atom is the smallest component of an element having the chemical properties of the element, consisting of a nucleus containing combinations of neutrons and protons and one or more electrons bound to the nucleus by electrical attraction; the number of protons determines the identity of the element. ";
		     break;
		case "3b.png": 
			enl.src = source;
				document.getElementById("descText").innerHTML = "The periodic table of chemical elements. A chart of the chemical elements that displays them in rows horizontally in order of increasing atomic number and vertically according to similarity of the chemical properties of their atoms.";
		     break;
		case "4b.jpg": 
			enl.src = source;
				document.getElementById("descText").innerHTML = "A picture of a Double Helix. Double helix is the description of the structure of a DNA molecule. A DNA molecule consists of two strands that wind around each other like a twisted ladder. Each strand has a backbone made of alternating groups of sugar (deoxyribose) and phosphate groups.";
		     break;
		case "5b.jpg": 
			enl.src = source;
				document.getElementById("descText").innerHTML = "Picture of a circuit board. Circuit boards consist of sheets of insulating material used for the mounting and interconnection (often by a printed circuit) of components in electronic equipment. ";
		     break;
		case "6b.png": 
			enl.src = source;
				document.getElementById("descText").innerHTML = "A picture depicting the major animal phylum. Phylum can be defined as the primary subdivision of a taxonomic kingdom, grouping together all classes of organisms that have the same body plan. ";
		     break;
				
	
	}
}
     
	 
	 
	 //change bg color
    function bg1(list)
    {
		document.body.style.backgroundColor = list.value;
   
    }
	
	// change text color
	function txt1(list)
    {
		var targets = [ "thumbs1", "desc", "pHeader"];
		
		for(x = 0; x < targets.length; x++){
			document.getElementById(targets[x]).style.color = list.value;
		}
		
		
    }

	 // clear text and background changes
	function norm(){
		var targets = [ "thumbs1", "desc", "pHeader"];
		
		for(x = 0; x < targets.length; x++){
			document.getElementById(targets[x]).style.color = "";
		}
		
		document.body.style.backgroundColor = "";
	}

	