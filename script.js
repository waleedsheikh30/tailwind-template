function harry() {
    
let name = document.getElementById("fname").value;
let email = document.getElementById("email").value;
let msg = document.getElementById("msg").value;

if (name == "") {
    document.getElementById("error1").innerHTML = "Please Fill this field";
}
else if (name.length <= 4) {
    document.getElementById("error1").innerHTML = "Name must be of 6 digits or more";
}
else{
    document.getElementById("error1").innerHTML = "";
}


if (email == "") {
    document.getElementById("error2").innerHTML = "Please Fill this field";
}
else{
    document.getElementById("error2").innerHTML = "";
}

if (msg == "") {
    document.getElementById("error3").innerHTML = "Please Enter a msg here";
}
else{
    document.getElementById("error3").innerHTML = "";
}



}
