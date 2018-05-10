var registerBtn = document.getElementById("registerBtn");
var phoneNumber = $("#phone");
var emailAd = document.getElementById("email");
var pass = document.getElementById("pass1");
var passConfirm = document.getElementById("pass2");
var iAgreeCheck = document.getElementById("field_terms");
var firebaseRef = firebase.database().ref();
var inputFile = $("#inputGroupFile01");
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

jQuery.noConflict();
(function( $ ) {
    $(function() {
        // More code using $ as alias to jQuery
    });
})(jQuery);

var InitPhoneMask = phoneNumber.intlTelInput({
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript: "node_modules/intl-tel-input/build/js/utils.js"
});
phoneNumber.on('keyup , countrychange' , function () {
    validatephone();
});
inputFile.on('focusout' , function () {
    console.log(this.value)
});

function registerClick() {

    console.log(phoneNumber.value);
    console.log(regMail.test(emailAd));
    console.log(regMail)
    console.log(emailAd.value)
    console.log(pass.value);
    console.log(passConfirm.value);
    console.log(pass.value == passConfirm.value);

   if ( phoneNumber.value &&
     regMail.test(emailAd.value) &&
     pass.value &&
     passConfirm.value &&
     pass.value == passConfirm.value
    ){

      firebaseRef.push("phoneNumber").set(phoneNumber.value);
      firebaseRef.push("email").set(emailAd.value);
      firebaseRef.push("password").set(pass.value);
      firebaseRef.push("passConfirm").set(passConfirm.value);
      window.alert("gg niggger");
      location.href="test2.html";

    } else {

        window.alert("fuck you nigggger");

    }
}

function checkPass() {
    //Store the password field objects into variables ...

    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field
    //and the confirmation field
    if(pass.value == passConfirm.value){
        //The passwords match.
        //Set the color to the good color and inform
        //the user that they have entered the correct password
        passConfirm.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        passConfirm.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}


function validatephone() {

    var countryData = InitPhoneMask.iso2;


    if (countryData === "us" || countryData === "cn"){
        window.alert("fuck y nigggggggger ili kitaec");

    }
    var numval = phone.value;
    var curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phoneNumber.value = curphonevar;
    phoneNumber.focus;
}
// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email) {

    if(regMail.test(email) == false)
    {
        document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
        document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
    }
}
// validate address
function add_validate(address) {

    var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;

    if(regAdd.test(address) == false)
    {
        document.getElementById("statusAdd").innerHTML	= "<span class='warning'>Address is not valid yet.</span>";
    }
    else
    {
        document.getElementById("statusAdd").innerHTML	= "<span class='valid'>Thanks, Address looks valid!</span>";
    }

}
function  nextPage() {
    location.href="test1.html";

}