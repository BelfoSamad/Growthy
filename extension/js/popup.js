

$(function () {

    $(document).ready(function(){
        $('.tabs').tabs();
    });

    //--------------------------------------------------
    // login form
    //--------------------------------------------------
    let login_email = $("#login_email");
    let login_password = $("#login_password");
    let login_button = $("#login");


    login_button.click(function (e) {


        let user_data = {"email" : login_email.val(),"password":login_password.val()};
        chrome.runtime.sendMessage({command: "login", userData : user_data});
    });


    //--------------------------------------------------
    // signup form
    //--------------------------------------------------

    //TODO handle signup
    let signup_email = $("#signup_email");
    let signup_password = $("#signup_password");
    let signup_button = $("#signup");


    signup_button.click(function (e) {

        let user_data = {"email" : signup_email.val(),"password":signup_password.val()};
        console.log(user_data);
        chrome.runtime.sendMessage({command: "signup", userData : user_data});
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
    /*--------------------------------------------------

    let switchButtpn = "off";
    //get the saved state of the extension from storage
    chrome.storage.sync.get(["enabled"], function(items){
        if (items[0]) {
            switchButton = 'on';
            $("#extension_state_switch").prop("checked", true);
        } else {
            switchButton = "off";
            $("#extension_state_switch").prop("checked", false);
        }
      });


    // handles the clicking of the switch and changes the state of the extension by sending message to background.js
    // TODO catch these messages in background.js and do the work accordingly
    $("#extension_state_switch").click(function(){
        if(switchButton === 'off'){
            switchButton = 'on';
            console.log("switched to on");
            chrome.storage.sync.set({ "enabled": true }, () => {
                console.log("Data Added");
            });
        }else{
            switchButton = 'off';
            console.log("switched to off");
            chrome.storage.sync.set({ "enabled": false }, () => {
                console.log("Data Added");
            });
        }
    });
    */

});
