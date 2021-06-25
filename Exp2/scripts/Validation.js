$(document).ready(function() {

    $('#submit').click(function() {
        checked = $("input[type=checkbox]:checked").length;
      
    });

});



function diff_years(dt2, dt1) 
{
console.log(dt1);
console.log(dt2);
var diff =(new Date(dt2).getTime() - new Date(dt1).getTime()) / 1000;
diff /= (60 * 60 * 24);
return Math.abs(Math.round(diff/365.25));

}

function isString(val){
    var letters = /^[A-Za-z ]+$/;
    if(val.value.match(letters))
        {
            return true;
        }
    else
        {
           return false;
        }
}

function isNumber(val){
    var numbers = /^[0-9]+$/;
    if(val.value.match(numbers))
        {
            return true;
        }
    else
        {
           return false;
        }
}

function isFloat(val){
    var numbers = /^[0-9.]+$/;
    if(val.value.match(numbers))
        {
            return true;
        }
    else
        {
           return false;
        }
}

function isEmpty(obj){
    if(obj == ""){
        window.alert("Empty Field Please fill your "+obj.value);
        document.regform.name.focus();
        return false;
    }
}

function validation(){
        isEmpty(document.regform.name.value); 
        if(isString(document.regform.name)==false){
            window.alert("Please enter a valid string");
            document.regform.name.focus();
            return false;
        }
        if(document.regform.fname.value == ""){
            window.alert("Please fill your fathers name");
            document.regform.fname.focus();
            return false;
        }
        
        if(isString(document.regform.fname)==false){
            window.alert("Please enter a valid string");
            document.regform.fname.focus();
            return false;
        }
        
        if(document.regform.mname.value == ""){
            window.alert("Please fill your mothers name");
            document.regform.mname.focus();
            return false;
        }
        
        if(isString(document.regform.mname)==false){
            window.alert("Please enter a valid string");
            document.regform.mname.focus();
            return false;
        }
        
        if(document.regform.date.value == ""){
            window.alert("Please choose your date of birth");
            document.regform.date.focus();
            return false;
        }

        var d1 = document.regform.date.value;
        var today = new Date().toLocaleDateString();
        // console.log(document.regform.date.value);
        // console.log(today);
        // console.log(diff_years(d1,today));

        if(document.regform.course.value.toString()=='degree'){

            if(parseInt(diff_years(d1,today))<18){
                window.alert("You are not eligible for Btech. program as your age is less than 18");
                return false;
            }

        }
        else if(document.regform.course.value.toString()=='diploma'){
            if(parseInt(diff_years(d1,today))<16){
                window.alert("You are not eligible for Diploma program as your age is less than 16");
                return false;
            }
        }

        if(document.regform.addressP.value == ""){
            window.alert("Please fill your Parmanent Address");
            document.regform.addressP.focus();
            return false;
        }
        
        if(document.regform.addressC.value == ""){
            window.alert("Please fill your Current address");
            document.regform.addressC.focus();
            return false;
        }
        
        if(document.regform.gender.value == ""){
            window.alert("Please Choose your Gender");
            document.regform.gender.focus();
            return false;
        }
        
        if(document.regform.fnumber.value == ""){
            window.alert("Please fill your fathers Number");
            document.regform.fnumber.focus();
            return false;
        }

        if(document.regform.fnumber.value.length > 10){
            window.alert("Fathers phone number greater than 10 digits not allowed");
            document.regform.fnumber.focus();
            return false;
        }

        if(isNumber(document.regform.fnumber)==false){
            window.alert("String not allowed in Fathers Number filled");
            document.regform.fnumber.focus();
            return false;
        }

        if(document.regform.pnumber.value.length > 10){
            window.alert("Personal phone number greater than 10 digits not allowed");
            document.regform.fnumber.focus();
            return false;
        }
    
        if(document.regform.pnumber.value == ""){
            window.alert("Please fill your number");
            document.regform.pnumber.focus();
            return false;
        }

        if(isNumber(document.regform.pnumber)==false){
            window.alert("String not allowed in Personal Number filled");
            document.regform.pnumber.focus();
            return false;
        }
        
        if(document.regform.course.value == ""){
            window.alert("Please chooose your course");
            document.regform.course.focus();
            return false;
        }
        
        
        if(document.regform.email.value == ""){
            window.alert("Please fill your email");
            document.regform.email.focus();
            return false;
        }

        var atpos = document.regform.email.value.toString().indexOf("@");  
        var dotpos = document.regform.email.value.toString().lastIndexOf(".");          
        if( (parseInt(atpos)) < 1 || (parseInt(dotpos) - parseInt(atpos)) < 2){
            window.alert("Please enter a valid email");
            document.regform.email.focus();
        }

        if(!checked) {
            alert("You must Select atlest one Course");
            return false;
        }

        if(document.regform.tenb.value == ""){
            window.alert("Please fill your 10th board");
            document.regform.tenb.focus();
            return false;
        }

        if(isString(document.regform.tenb) == false){
            window.alert("Number Not allowed in 10th Board field");
            document.regform.tenb.focus();
            return false;
        }
        
        if(document.regform.tenp.value == ""){
            window.alert("Please fill your 10th percentage");
            document.regform.tenp.focus();
            return false;
        }

        if(isFloat(document.regform.tenp) == false){
            window.alert("String Not allowed in 10th Percentage field");
            document.regform.tenp.focus();
            return false;
        }
        
        if(document.regform.teny.value == ""){
            window.alert("Please fill your 10th passing year");
            document.regform.teny.focus();
            return false;
        }

        if(isNumber(document.regform.teny) == false){
            window.alert("String Not allowed in 10th Year field");
            document.regform.teny.focus();
            return false;
        }

        if(document.regform.course.value.toString()=='degree'){

            if(document.regform.twelb.value == ""){
                window.alert("Please fill your 12th board");
                document.regform.twelb.focus();
                return false;
            }

            if(isString(document.regform.twelb) == false){
                window.alert("Number Not allowed in 12th Board field");
                document.regform.twelb.focus();
                return false;
            }
            
            if(document.regform.twelp.value == ""){
                window.alert("Please fill your 12th percentage");
                document.regform.twelp.focus();
                return false;
            }

            if(isFloat(document.regform.twelp) == false){
                window.alert("String Not allowed in 12th Percentage field");
                document.regform.twelp.focus();
                return false;
            }
            
            if(document.regform.twely.value == ""){
                window.alert("Please fill your 12th passing year");
                document.regform.twely.focus();
                return false;
            }

            if(isNumber(document.regform.twely) == false){
                window.alert("String Not allowed in 12th Year field");
                document.regform.twely.focus();
                return false;
            }
        }
                                          
}