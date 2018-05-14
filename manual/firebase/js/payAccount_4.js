jQuery.noConflict();

(function( $ ) {

    const copy_address = $("#copy_address");
    const address = "123455435678"
    copy_address.on('click' , function () {
        CopyFunction();
    });
function CopyFunction() {


    /* Select the text field */
    copy_address.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");

    /* Alert the copied text */
    window.alert("Copied the address: " + address);
}
})(jQuery);
