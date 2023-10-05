var cart_info = document.querySelector(".cart-info")
var cart_view = document.querySelector(".cart-view")

cart_info.addEventListener("mouseover", function () {
    cart_view.style.display = "block"
})

cart_info.addEventListener("mouseout", function () {
    cart_view.style.display = "none"
})