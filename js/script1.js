$(function() {
    // $("#list")
    //     .find("li")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .children("li")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .children("li")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .parents("body")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .parent()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .siblings()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .prev()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .next()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");

    //select all the direct next elements that come after a header element
    $("h2")
        .next()
        .css("background-color", "rgba(180, 180, 30, 0.8)");
    // select all the input child elements of the form element which are a password
    $("form")
        .children("input[type = 'password']")
        .css("background-color", "rgba(180, 180, 30, 0.8)");
});
