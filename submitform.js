function submitform() {
    var fullname = document.myform.fullname.value;
    var address = document.myform.address.value;

    document.getElementById("result").innerHTML = "ชื่อ:" + fullname + "<br>ที่อยู่:" + address;
    console.log(fullname);
    console.log(address);
}