$(document).ready(() => {
    $(".generate").on("submit", (event) => {
        event.preventDefault();
        // character strings
        let length = $("#length").val();
        let lowerCase = "abcdefghijklmnopqrstuvwxyz"
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let numeric = "1234567890"
        let special = "!@#$%&?"
        // string to loop through
        let loopString = ""
        // password to eventually return
        let password = ""
        // these conditionals force the character requirements onto smaller passwords
        // by intentionally adding at least one character of the required character type
        // to the password, then add the entirety of that type to the bulk string and
        // subtract from the length, to track how many conditionals it has run, that way
        // we don't go over the desired password length due to these additions when the 
        // loop is run
        if ($('#lower').is(":checked")) {
            let random = Math.floor(Math.random() * lowerCase.length);
            password += lowerCase[random]
            loopString += lowerCase
            length -= 1
        }
        if ($('#upper').is(":checked")) {
            let random = Math.floor(Math.random() * upperCase.length);
            password += upperCase[random]
            loopString += upperCase
            length -= 1
        }
        if ($('#num').is(":checked")) {
            let random = Math.floor(Math.random() * numeric.length);
            password += numeric[random]
            loopString += numeric
            length -= 1
        }
        if ($('#spec').is(":checked")) {
            let random = Math.floor(Math.random() * special.length);
            password += special[random]
            loopString += special
            length -= 1
        }

        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * loopString.length);
            password += loopString[random]
        }
        // put the password in the text box
        $("#password").text(password);
    });
});
