jQuery.noConflict();
(function( $ ) {
    var phoneNumber = $("#phone");
    var registerBtn = $("#registerBtn");
    var emailAd = $("#email");
    var pass = $("#pass1");
    var passConfirm = $("#pass2");
    var iAgreeCheck = document.getElementById("field_terms");
    var firebaseRef = firebase.database().ref();
    var inputFile = $("#inputGroupFile01");
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

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
        validatephone(this);
    });
    inputFile.on('focusout' , function () {
        console.log(this.value)
    });
    registerBtn.on('click' , function () {
       registerClick();
    });
    emailAd.on('keyup' , function () {
        email_validate(this.value);
    });
    passConfirm.on('keyup' , function () {
        checkPass();
        return false;
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
        var message = $('#confirmMessage');
        var goodColor = "#66cc66";
        var badColor = "#ff6666";
        if(pass.val() === passConfirm.val()){
            passConfirm.css('backgroundColor' , goodColor);
            message.css('color' , goodColor);
            message.html("Passwords Match")
        }else{
            passConfirm.css('backgroundColor' , badColor);
            message.css('color' , badColor);
            message.html("Passwords Do Not Match!")
        }
    }

    function validatephone(phone) {
        var countryData = InitPhoneMask.iso2;
        if (countryData === "us" || countryData === "cn"){
            window.alert("fuck y nigggggggger ili kitaec");
        }
        var numval = phone.value;
        var curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
        phone.value = curphonevar;
    }

    function Validate(txt) {
        txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
    }

    function email_validate(email) {
        if(regMail.test(email) === false){
            document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
        }else{
            document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
        }
    }
    // validate address
    function add_validate() {
        var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;

        if(regAdd.test() === false){
            document.getElementById("statusAdd").innerHTML	= "<span class='warning'>Address is not valid yet.</span>";
        }else{
            document.getElementById("statusAdd").innerHTML	= "<span class='valid'>Thanks, Address looks valid!</span>";
        }
    }
})(jQuery);