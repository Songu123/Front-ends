var script = document.createElement('script');
script.onload = function () {
    fbInboxFillPage('https://www.facebook.com/thefashionhousestore','https://facebookinbox-omni-onapp.haravan.com/facebookinbox/static/images/fb-icon-1.png','#3366CC','#797979','#FFFFFF','0','Liên hệ với chúng tôi!',false,false),facebookShowPanelButton();
};
script.src = "https://facebookinbox-omni-onapp.haravan.com/facebookinbox/static/javascripts/fb-box.js?v=1672975563321";
document.getElementsByTagName('head')[0].appendChild(script);