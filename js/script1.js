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
    // $("h2")
    //     .next()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // select all the input child elements of the form element which are a password
    // $("form")
    //     .children("input[type = 'password']")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");

    //
    // filtering methods //////////////////
    // $("#list")
    //     .find("li")
    //     .filter(":even")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list")
    //     .children("li")
    //     .filter(":even")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li")
    //     .filter(function(index) {
    //         return index % 3 === 2;
    //     })
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");

    // $("li")
    //     .first()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li")
    //     .last()
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li")
    //     .eq(0)
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li")
    //     .not(":last")
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li")
    //     .not(function(index) {
    //         return index % 3 === 1;
    //     })
    //     .css("background-color", "rgba(180, 180, 30, 0.8)");
    $("li")
        .not("#list ul li")
        .css("background-color", "rgba(180, 180, 30, 0.8)");
});
