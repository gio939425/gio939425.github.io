function estimate() {
 
let sqft =
document.getElementById("sqft").value;
 
let total = sqft * 180;
 
document.getElementById("result").innerHTML =
"Estimated Cost: $" +
total.toLocaleString();
 
}
