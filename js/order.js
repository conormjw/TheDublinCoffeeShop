function order(number) {
	var name = document.getElementById(number + "-name").innerHTML; //1-name
	var price = document.getElementById(number + "-price").innerHTML; //1-price

    window.location.href = "checkout.html?name="+name+"&price="+price;
}
