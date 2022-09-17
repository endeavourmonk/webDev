function dataAccess(){
    var name = document.getElementById("name").value;
    var fName = document.getElementById("fName").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var mobNo = document.getElementById("mobNo").value;
    var course = document.getElementById("course").value;
    // Accessing value of vhecked items
    var cv= [];
    var ckdv;
    var i = 0;
    ckdv = document.getElementById("C++");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;
    ckdv = document.getElementById("C#");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;
    ckdv = document.getElementById("Ruby");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;
    ckdv = document.getElementById("Dart");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;
    ckdv = document.getElementById("Kotlin");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;
    ckdv = document.getElementById("Python");
    cv[i++] = (ckdv.checked == true) ? ckdv.value : i--;

    var about = document.getElementById("about").value;
 
//     let rv = document.getElementsByName("gender");
//     let radVal;
//     for(let i=0 ; rv.length ; i++)
//         if(rv[i].checked === true)
//             radVal = rv[i].value;
// console.log(radVal)

    var finalOutput = "Name  : " + name + "<br/>"+"Father's Name : "+fName + "<br/>" + "Date of Birth : "+dob +"<br/>" + "Address : "+address +"<br/>" + "Contact Number :" + mobNo +"<br/>" + "Course : "+ course +"<br/>" + "About : "+about+"<br/>" + "Languages known : ";
    for(let ind of cv)
        finalOutput+= ind + ",";
    // finalOutput += "Gender : " + radVal;
    document.getElementById("displayArea").innerHTML=finalOutput;
}