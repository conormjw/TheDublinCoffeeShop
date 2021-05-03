var query = window.location.search.substring(1); //query = name=awergfaw price=agerg
//checkout.html ? name=awergfaw&price=agerg
var array = query.split("&"); //array = [name=somefawheg, price=some]

var namePair = array[0]; // name=something
var pricePair = array[1]; //price=soemthing

var name = namePair.split("=")[1]; //coffee%20of%20the%20day
var price = pricePair.split("=")[1]; // something;

var actualname = decodeURI(name); //coffee of the day

document.getElementById("name").innerHTML = actualname;
document.getElementById("price").innerHTML = price;
document.getElementById("total").innerHTML = price;

function updatePrice() {
	var total = price * $("#countinput").val();
	document.getElementById("total").innerHTML = total;
}
