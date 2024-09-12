
// Styles Switcher JS
function setActiveStyleSheet(title) {
    var i, a, main;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title)
                a.disabled = false;
        }
    }
}
function getActiveStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled)
            return a.getAttribute("title");
    }
    return null;
    0
}
function getPreferredStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1
            && a.getAttribute("rel").indexOf("alt") == -1
            && a.getAttribute("title")
        )
            return a.getAttribute("title");
    }
    return null;
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else
        expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
window.onload = function (e) {
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);
}
window.onunload = function (e) {
    var title = getActiveStyleSheet();
    createCookie("style", title, 365);
}
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);



/*this function execute when window properly loaded*/
$(window).on('load', function () {

    // init set color on window load
    if (localStorage.getItem("main-color")) {
        document.documentElement.style.setProperty('--main-color', localStorage.getItem("main-color"));
        $('#reset-color-picker').attr('disabled', false);
    }

    // init spectrum color picker
    if ($('#color-picker').length) {
        $('#color-picker').val(getComputedStyle(document.documentElement).getPropertyValue('--main-color'));
        $('#color-picker').spectrum({
            type: "component",
            togglePaletteOnly: true,
            showInput: true,
            showInitial: true,
            showAlpha: true,
            palette: [
                ["#17202A","#1C2833","#212F3D","#273746","#2C3E50","#566573","#808B96","#ABB2B9" , "#D5D8DC" , "#EAECEE"],
                ["#424949","#515A5A","#707B7C","#707B7C","#707B7C","#7F8C8D","#99A3A4","#CCD1D1" , "#E5E8E8" , "#F2F4F4"],
                ["#626567","#797D7F","#909497","#A6ACAF","#A6ACAF","#BDC3C7","#CACFD2","#D7DBDD" , "#F2F3F4" , "#F8F9F9"],
                ["#78281F","#943126","#B03A2E","#CB4335","#E74C3C","#EC7063","#F1948A","#F5B7B1" , "#FADBD8" , "#FDEDEC"],
                ["#6E2C00","#873600","#A04000","#BA4A00","#D35400","#DC7633","#E59866","#EDBB99" , "#F6DDCC" , "#FBEEE6"],
                ["#7D6608","#9A7D0A","#B7950B","#D4AC0D","#F1C40F","#F4D03F","#F7DC6F","#F9E79F" , "#FCF3CF" , "#FEF9E7"],
                ["#186A3B","#1D8348","#239B56","#28B463","#2ECC71","#58D68D","#82E0AA","#ABEBC6" , "#D5F5E3" , "#EAFAF1"],
                ["#002f2f","#004747","#005f5f","#007777","#008e8e","#00a6a6","#00bebe","#00d6d6" , "#00eeee" , "#ccfbfb"],
                ["#0000ff","#1919ff","#3232ff","#4c4cff","#6666ff","#7f7fff","#9999ff","#b2b2ff" , "#ccccff" , "#e5e5ff"],
                ["#1B4F72","#21618C","#2874A6","#2E86C1","#3498DB","#5DADE2","#85C1E9","#AED6F1" , "#D6EAF8" , "#EBF5FB"],
                ["#4A235A","#5B2C6F","#6C3483","#7D3C98","#8E44AD","#A569BD","#BB8FCE","#D2B4DE" , "#E8DAEF" , "#F4ECF7"]
            ],
            move: function (color) {
                localStorage.setItem("main-color", color);
                document.documentElement.style.setProperty('--main-color', color);
                $('#reset-color-picker').removeAttr('disabled');
            }
        });

        // on reset-color-picker
        $("#reset-color-picker").click(function () {
            localStorage.clear();
            document.location.reload();
            getComputedStyle(document.documentElement).getPropertyValue('--main-color');
            $('#reset-color-picker').attr('disabled', true);
        });
    }

});



// func init 
$(document).ready(function () {
    // switcher toggle
    $('.open-switcher').click(function () {
        if ($(this).hasClass('show-switcher')) {
            $('#switcher').css({ 'left': 0 });
            $('.open-switcher').removeClass('show-switcher');
            $('.open-switcher').addClass('hide-switcher');
        } else if (jQuery(this).hasClass('hide-switcher')) {
            $('#switcher').css({ 'left': '-212px' });
            $('.open-switcher').removeClass('hide-switcher');
            $('.open-switcher').addClass('show-switcher');
        }
    });

});
