var arrayOfObjects = [];
var empForm = document.getElementById("emp_form").contentWindow;
var empData = document.getElementById("emp_data").contentWindow;

function logInValidate(){
	var check = 0;
	var uname = document.getElementById("uname").value;
	var password = document.getElementById("password").value;
	//Password
	if(password == ""){

		document.getElementById("logerror").style.display = "block";
		document.getElementById("logerror").innerHTML = "Password should not be Empty";
		document.getElementById("password").focus();
		document.getElementById("password").style.border = "2px solid red";

	}else{
		var pwdreg = /^([!@#$%^&*]*)(\w+)([!@#$%^&*]*){8,}$/;
		var pwdverify = pwdreg.test(password);
		if(!pwdverify){
			document.getElementById("logerror").innerHTML = "Password should more than 8 characters and atleast 1 special symbol";
			document.getElementById("password").focus();
			document.getElementById("password").style.border = "2px solid red";
		}
		else{
			document.getElementById("password").style.border = "";
			check++;
			
		}
		
	}
	//UserNAME
	if(uname == ""){
		document.getElementById("logerror").style.display = "block";
		document.getElementById("logerror").innerHTML = "UserName should not be Empty";
		document.getElementById("uname").focus();
		document.getElementById("uname").style.border = "2px solid red";

	}else{
		var unamereg = /^[a-zA-Z]{1,15}$/;
		var unameverify = unamereg.test(uname);
		if(!unameverify){
			document.getElementById("logerror").innerHTML = "Username should be max 15 characters and only Alphabets";
			document.getElementById("uname").focus();
			document.getElementById("uname").style.border = "2px solid red";
		}
		else{
			document.getElementById("uname").style.border = "";
			check++;
			
		}
		
	}
	if(check == 2){
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("frameDiv").style.display = "block";

	}
		
	return false;
	
}
function empFormValidate(){
	var fname = empForm.document.forms["empForm"]["fname"].value;
	var lname = empForm.document.forms["empForm"]["lname"].value;
	var dob = empForm.document.forms["empForm"]["dob"].value;
	var empId = empForm.document.forms["empForm"]["empId"].value;
	var email = empForm.document.forms["empForm"]["email"].value;
	var mobile = empForm.document.forms["empForm"]["mobile"].value;
	var adress = empForm.document.forms["empForm"]["adress"].value;
	var check = 0;
	
	
	//Mobile
	if(mobile == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "Mobile number should not be Empty";
		empForm.document.getElementById("mobile").focus();
		empForm.document.getElementById("mobile").style.border = "2px solid red";
	}else{
		var mobilereg = /^9[0-9]{9}$/;
		var mobileverify = mobilereg.test(mobile);
		if(!mobileverify){
			empForm.document.getElementById("error").innerHTML = "Mobile number should be 10 digits ex :9XXXXXXXXX";
			empForm.document.getElementById("mobile").focus();
			empForm.document.getElementById("mobile").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("mobile").style.border = "";
			check++;
		}
	}

	//Email
	if(email == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "Email should not be Empty";
		empForm.document.getElementById("email").focus();
		empForm.document.getElementById("email").style.border = "2px solid red";
	}else{
		var mailreg = /(\w+)(.|-|@|!|#|$|%|&)(\w+)@([a-zA-Z]+)\.(com|in|co\.in)$/;
		var mailverify = mailreg.test(email);
		if(!mailverify){
			empForm.document.getElementById("error").innerHTML = "Email should be example@domain.com/in/co.in";
			empForm.document.getElementById("email").focus();
			empForm.document.getElementById("email").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("email").style.border = "";
			check++;
		}
	}

	//Employee Id
	if(empId == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "Employee Id should not be Empty";
		empForm.document.getElementById("empId").focus();
		empForm.document.getElementById("empId").style.border = "2px solid red";
	}else{
		var empreg = /^[0-9]{5}$/;
		var empverify = empreg.test(empId);
		if(!empverify){
			empForm.document.getElementById("error").innerHTML = "Employee Id should be 5 digits only";
			empForm.document.getElementById("empId").focus();
			empForm.document.getElementById("empId").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("empId").style.border = "";
			check++;
		}
	}

	//dob
	if(dob == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "Date should not be Empty";
		empForm.document.getElementById("dob").focus();
		empForm.document.getElementById("dob").style.border = "2px solid red";
	}else{
		var dreg = /^(0[1-9]|[1-9]|3[01]|1[0-9]|2[0-9])(\-|\/)(0[1-9]|[1-9]|1[0-2])(\-|\/)([0-9]{4})$/;
		var dverify = dreg.test(dob);
		if(!dverify){
			empForm.document.getElementById("error").innerHTML = "Date sholuld  be DD-MM-YYYY or DD/MM/YYYY";
			empForm.document.getElementById("dob").focus();
			empForm.document.getElementById("dob").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("dob").style.border = "";
			check++;
		}
	}

	//Last Name
	if(lname == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "Last Name should not be Empty";
		empForm.document.getElementById("lname").focus();
		empForm.document.getElementById("lname").style.border = "2px solid red";
	}else{
		var lreg = /^[A-Za-z]{1,10}$/;
		var lverify = lreg.test(lname);
		if(!lverify){
			empForm.document.getElementById("error").innerHTML = "Lastname should be max 10 characters and only Alphabets";
			empForm.document.getElementById("lname").focus();
			empForm.document.getElementById("lname").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("lname").style.border = "";
			check++;
		}
	}

	//First name
	if(fname == ""){
		empForm.document.getElementById("error").style.display = "block";
		empForm.document.getElementById("error").innerHTML = "First Name should not be Empty";
		empForm.document.getElementById("fname").focus();
		empForm.document.getElementById("fname").style.border = "2px solid red";
	}else{
		var freg = /^[A-Za-z]{1,20}$/;
		var fverify= freg.test(fname);
		if(!fverify){
			empForm.document.getElementById("error").innerHTML = "Firstname should be max 20 characters and only Alphabets";
			empForm.document.getElementById("fname").focus();
			empForm.document.getElementById("fname").style.border = "2px solid red";
		}
		else{
			empForm.document.getElementById("fname").style.border = "";
			check++;
		}
	}
	if(check == 6){
		empForm.document.getElementById("error").style.display = "none";
		empForm.document.getElementById("sucess").style.display = "block";
		empForm.document.getElementById("sucess").innerHTML = "Your Data Saved Successfully!";
		CreateJSONObject();
	}
	return false;
}
function CreateJSONObject(){
	var obj = {

		Firstname : empForm.document.forms["empForm"]["fname"].value,
	 	Lastname :  empForm.document.forms["empForm"]["lname"].value,
		DateOfBirth : empForm.document.forms["empForm"]["dob"].value,
		EmployeeId : empForm.document.forms["empForm"]["empId"].value,
		Email : empForm.document.forms["empForm"]["email"].value,
		Mobile : empForm.document.forms["empForm"]["mobile"].value,
		Address : empForm.document.forms["empForm"]["adress"].value

	};
	arrayOfObjects.push(obj);
	
}
function showInTable(){
	var table = empData.document.getElementById("tableId");
	table.innerHTML = "";
	var tr = empData.document.createElement("tr");
	if(!arrayOfObjects){
		table.innerHTML = "No Data Found";
	}
	var obj = arrayOfObjects[0];
	for(key in obj){
		var th = empData.document.createElement("th");
		var thText = empData.document.createTextNode(key);
		th.appendChild(thText);
		tr.appendChild(th);
		
	}
	table.appendChild(tr);
	for(var i=0;i<arrayOfObjects.length;i++){
		var tr = empData.document.createElement("tr");
		for(key in obj){
			var td = empData.document.createElement("td");
			var tdText = empData.document.createTextNode(obj[key]);
			td.appendChild(tdText);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
	return false;
}