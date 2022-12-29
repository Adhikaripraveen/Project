function loadcoupon() {
    document.getElementsByClassName("coupon")[0].style.display = "block";
    document.getElementById("ticket-section").style.opacity = "0.4";
    document.getElementById("tickets-offer").style.opacity = "0.4";
    document.getElementById("navigation-bar").style.opacity = "0.4";
}



function couponclose() {
    document.getElementsByClassName("coupon")[0].style.display = "none";
    document.getElementById("ticket-section").style.opacity = "1";
    document.getElementById("tickets-offer").style.opacity = "1";
    document.getElementById("navigation-bar").style.opacity = "1";
}