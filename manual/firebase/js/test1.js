jQuery.noConflict();

(function( $ ) {
    const phoneNumber = $("#phone");
    const registerBtn = $("#registerBtn");
    const emailAd = $("#email");
    const pass = $("#pass1");
    const passConfirm = $("#pass2");
    const iAgreeCheck = document.getElementById("field_terms");
    const firebaseRef = firebase.database().ref();
    const inputFile = $("#inputGroupFile01");
    const regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    const InitPhoneMask = phoneNumber.intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        utilsScript: "../node_modules/intl-tel-input/build/js/utils.js"
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
        console.log(phoneNumber.val());
        console.log(regMail.test(emailAd.val()));
        console.log(emailAd.val());
        console.log(pass.val());
        console.log(passConfirm.val());

        if ( phoneNumber.val() &&
            regMail.test(emailAd.val()) &&
            pass.val() &&
            passConfirm.val() &&
            pass.val() == passConfirm.val()
        ){

            firebaseRef.push("phoneNumber").set(phoneNumber.val());
            firebaseRef.push("email").set(emailAd.val());
            firebaseRef.push("password").set(pass.val());
            firebaseRef.push("passConfirm").set(passConfirm.val());
            window.alert("gg niggger");
            location.href="test2.html";

        } else {

            window.alert("fuck you nigggger");

        }
    }

    function checkPass() {
        const message = $('#confirmMessage');
        const goodColor = "#66cc66";
        const badColor = "#ff6666";
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
        const countryData = InitPhoneMask.iso2;
        if (countryData === "us" || countryData === "cn"){
            window.alert("fuck y nigggggggger ili kitaec");
        }
        phone.value = phone.value.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    }

    function Validate(txt) {
        txt.value = txt.val().replace(/[^a-zA-Z-'\n\r.]+/g, '');
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
        const regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;

        if(regAdd.test() === false){
            document.getElementById("statusAdd").innerHTML	= "<span class='warning'>Address is not valid yet.</span>";
        }else{
            document.getElementById("statusAdd").innerHTML	= "<span class='valid'>Thanks, Address looks valid!</span>";
        }
    }
})(jQuery);