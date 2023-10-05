var slideIndex = 1;
        showDivs(slideIndex);
        var autoSlider = null
        function startSetInterval(){
            autoSlider = setInterval(function(){
                plusDivs(1)
            } , 4000)
        }

        startSetInterval()
 
        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length };
            for (var i = 0; i < x.length; i++) {
                x[i].style.opacity = "0";
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
            x[slideIndex - 1].style.opacity = "1";

        }
        var slider = document.getElementsByClassName("slideshow")[0];
        slider.addEventListener("mouseover", stopSetInterval, false);
        slider.addEventListener("mouseout", resumeSetInterval, false);

        function stopSetInterval() {
            clearInterval(autoSlider)
        }
        function resumeSetInterval() {
            startSetInterval()
            console.log("Đã đóng")
        }
    
       
        var input = document.querySelector(".contact-form .input .contact_email")
        var label = document.querySelector(".inner .input label")
        var button = document.querySelector(".contact-form button")
        var border_bottom = document.querySelector(".inner .contact-form")

        input.addEventListener("focus", function(){
            button.style.display="block"
            border_bottom.style.borderBottom="1px solid red"
            label.style=`top: -15px;
                font-size: 10px;
                color:red;`
        })
        input.addEventListener("blur", function(){
            if(input.value.length > 0 ){
                
                label.style=`top: -15px;
                font-size: 10px;
                color:red;`
                
                button.style.display="block"
                border_bottom.style.borderBottom="1px solid #fff"

            }else{
                button.style.display="none"
                border_bottom.style.borderBottom="1px solid #fff"
                label.style=`left: 10px;
                top: 10px;
                font-size: 15px;
                color:#fff;
                pointer-events: none;`
            }
        })