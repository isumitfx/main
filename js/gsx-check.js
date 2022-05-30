let form = document.querySelector("#form");

let bot = {
	TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
	chatID: "-1001718677606",
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var imei = document.getElementById("inputIMEI").value;
	var mailid = document.getElementById("inputEmailID").value;
	
	var my_text = `GSX Basic Report Request:%0A - Email ID: ${mailid} %0A - IMEI/SN: ${imei} %0A request from iCrack`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Information submited successfully. Report will be get delivered by mail. TIME : WITHIN 24 WORKING HOURS")
		window.location.assign("https://icrack.in")
	}, error => {
		alert("Submit Failed!")
		console.log(error);
	})
})
