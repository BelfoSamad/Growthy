$(function () {


    //--------------------------------------------------
    // sign in form
    //--------------------------------------------------
    let signin_email = $("#signin_email");
    let signin_password = $("#signin_password");
    let singin_button = $("#signin");


    singin_button.click(function (e) {

        let user_data = {"email" : signin_email.val(),"password":signin_password.val()};
        chrome.runtime.sendMessage({command: "signin", userData : user_data})
    });
});