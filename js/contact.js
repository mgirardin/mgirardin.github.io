function submitContact(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let eaddress = document.getElementById('eaddress').value;
    let tel = document.getElementById('tel').value;
    let message = document.getElementById('message').value;    
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://api.matheusgirardin.com/v1/contact', true);	
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (this.readyState !== XMLHttpRequest.DONE) {
			return;
		}  
		if (this.status === 200) {
			//do something 
			alert("Ok!");
		}
		else{
			//print error 
			alert("Ops!");
		} 
	}
	xhr.responseType = "json";	
	grecaptcha.ready(function() {
		grecaptcha.execute('6LdI_aYZAAAAABI5RJLvdHPDtQc36dFDWUScltD2', {action: 'contact'}).then(function(token) {
            xhr.send(JSON.stringify({"first_name": fname, "last_name": lname,
                                     "number": tel, "email": eaddress,
                                     "message": message, "recaptcha": token}));	
		});
	  });
}