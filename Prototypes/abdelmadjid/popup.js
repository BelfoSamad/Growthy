$(function () {

    $(document).ready(function () {
        $('.tabs').tabs();
    });

    //--------------------------------------------------
    // login form
    //--------------------------------------------------
    let login_email = $("#login_email");
    let login_password = $("#login_password");
    let login_button = $("#login");


    login_button.click(function (e) {


        let user_data = {"email": login_email.val(), "password": login_password.val()};
        chrome.runtime.sendMessage({command: "login", userData: user_data});
    });


    //--------------------------------------------------
    // signup form
    //--------------------------------------------------

    //TODO handle signup
    let signup_email = $("#signup_email");
    let signup_password = $("#signup_password");
    let signup_button = $("#signup");


    signup_button.click(function (e) {

        let user_data = {"email": signup_email.val(), "password": signup_password.val()};
        console.log(user_data);
        chrome.runtime.sendMessage({command: "signup", userData: user_data});
    });


    //--------------------------------------------------
    // LOGOUT
    //--------------------------------------------------

    let logout_button = $("#logout");

    //TODO handle logout
    logout_button.click(function (e) {
        chrome.runtime.sendMessage({command: "logout"});
    });


    //--------------------------------------------------
    // enable/disable extension
    //--------------------------------------------------

    // initialize ( get extension state form background.js )
    let switchButton = 'off';
    // TODO catch this message in background.js and return the state of the extension
    chrome.runtime.sendMessage({command: "get_extension_state"});
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.command === "return_extension_state") {
            // return the state , let it be request.extstate for the moment
            if (request.extstate === true) {
                $("#extension_state_switch").prop("checked", true);
                switchButton = 'on';

            } else {
                $("#extension_state_switch").prop("checked", false);
                switchButton = 'off';
            }
        }
    });

    // handles the clicking of the switch and changes the state of the extension by sending message to background.js
    // TODO catch these messages in background.js and do the work accordingly
    $("#extension_state_switch").click(function () {
        if (switchButton === 'off') {
            switchButton = 'on';
            console.log("switched to on")
            // chrome.runtime.sendMessage({command: "switch_on_extension"});
            // $('#display_result').val('is checked');
        } else {
            switchButton = 'off';
            console.log("switched to off")
            // chrome.runtime.sendMessage({command: "switch_off_extension"});
            // $('#display_result').val('is unchecked');
        }
    });


});
