$("#error").attr("visibility", "hidden");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    const $result = $("#result");
    const $email = $("#email");
    const error = $("#error");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text("Done!");
        $result.css("color", "green");
        $("#error").attr("visibility", "hidden");
        $email.css("border", "");
    } else {
        $result.text("Please provide a valid email");
        $result.css("color", "#d1868e");
        $email.css("border", "2px solid red");
        $("#error").removeAttr("visibility");
    }
    return false;
}

$("#validate").on("click", validate);