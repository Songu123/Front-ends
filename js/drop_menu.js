var dropdown_first = document.querySelectorAll(".dropdown")[0]
var dropdown_second = document.querySelectorAll(".dropdown")[1]
var dropdown_menu_first = document.querySelectorAll("ul.dropdown-menu")[0]
var dropdown_menu_second = document.querySelectorAll("ul.dropdown-menu")[4]
var content_menu_first = document.querySelectorAll("li.content-menu")[0]
var content_menu_second = document.querySelectorAll("li.content-menu")[1]
var content_menu_third = document.querySelectorAll("li.content-menu")[2]
var sub_menu_first = document.querySelectorAll("ul.sub-menu")[0]
var sub_menu_second = document.querySelectorAll("ul.sub-menu")[1]
var sub_menu_third = document.querySelectorAll("ul.sub-menu")[2]

dropdown_menu_first.style.display = "none"
dropdown_menu_second.style.display = "none"
sub_menu_first.style.display = "none"
sub_menu_second.style.display = "none"
sub_menu_third.style.display = "none"

dropdown_first.addEventListener("mouseover", function(){
    dropdown_menu_first.style.display="flex"
})

dropdown_first.addEventListener("mouseout", function(){
    dropdown_menu_first.style.display="none"
})

dropdown_second.addEventListener("mouseover", function(){
    dropdown_menu_second.style.display="flex"
})

dropdown_second.addEventListener("mouseout", function(){
    dropdown_menu_second.style.display="none"
})

content_menu_first.addEventListener("mouseover", function(){
    sub_menu_first.style.display="flex"
})

content_menu_first.addEventListener("mouseout", function(){
    sub_menu_first.style.display="none"
})

content_menu_second.addEventListener("mouseover", function(){
    sub_menu_second.style.display="flex"
})

content_menu_second.addEventListener("mouseout", function(){
    sub_menu_second.style.display="none"
})

content_menu_third.addEventListener("mouseover", function(){
    sub_menu_third.style.display="flex"
})

content_menu_third.addEventListener("mouseout", function(){
    sub_menu_third.style.display="none"
})




