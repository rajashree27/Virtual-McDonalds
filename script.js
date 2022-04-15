function orderFood() {
	let orderNo = Math.floor(Math.random() * 100 + 1);

	let randTime = Math.random() * 10 * 1000;

	alert(`Order Successfully Placed! Order Number is ${orderNo}`);

	let orders = document.getElementsByTagName("input");
	let foodArr = [];

	for (let i = 0; i < orders.length; i++) {
		if (orders[i].checked) {
			foodArr.push(orders[i].value);
            orders[i].checked=false;
		}
	}

	let foodContainer = document.getElementById("orderContainer");

    foodContainer.innerHTML="";

	let orderNoBox = document.createElement("div");
	orderNoBox.innerText = `Your order number is ${orderNo}`;
	orderNoBox.style = "color:white;font-size:25px;margin:-50px 0px 30px 0px";

	let box = document.createElement("div");

	let photo = document.createElement("img");
	photo.src =
		"https://media1.giphy.com/media/eJKvbnScYtC9nEK4MU/200w.webp?cid=ecf05e47ggwfwenk9x6zwujp8uz26cql70y78e7i2pr9ud6m&rid=200w.webp&ct=g";
	photo.style =
		"height:200px;width:300px;margin:0px 0px 30px 0px;border-radius:10px";

	let orderReady = document.createElement("p");
	orderReady.innerText =
		"Your order is being prepared!";
	orderReady.style =
		"font-size:20px;color:white;padding:10px;margin:0px 0px 30px 0px";

	box.append(photo, orderReady);

	foodContainer.append(orderNoBox, box);

    //Promise
	new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(foodArr);
		}, randTime);
	})
		.then(function (res) {
			foodContainer.innerHTML = "";

			orderNoBox.innerText = `Your order number ${orderNo} is ready!`;
			// orderNoBox.style = "color:white;font-size:25px;margin:-50px 0px 30px 0px";

			// let box = document.createElement("div");

			// let photo = document.createElement("img");
			photo.src =
				"https://www.mashed.com/img/gallery/this-mcdonalds-employee-went-viral-after-preparing-6400-item-order/l-intro-1636736373.jpg";
			// photo.style =
			// 	"height:200px;width:300px;margin:0px 0px 30px 0px;border-radius:10px";

			// let orderReady = document.createElement("p");
			orderReady.innerText =
				"Your order is ready! Please collect it from the counter!";
			// orderReady.style =
			// 	"font-size:20px;color:white;padding:10px;margin:0px 0px 30px 0px";

			box.append(photo, orderReady);

			foodContainer.append(orderNoBox, box);
		})
		.catch(function (err) {
			console.log("Error occured");
		});
}
