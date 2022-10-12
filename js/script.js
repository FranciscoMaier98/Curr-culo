$(document).ready(function(){    
    div1 = $('#textoPerfil');
    div2 = $('#fotoPerfil');
    tdiv1 = div1.clone();
    tdiv2 = div2.clone();
});
    
$(window).resize(function() { //Fires when window is resized
    if($(window).width() <= 960) 
    {
        $("#textoPerfil").insertAfter("#fotoPerfil");
    } else{
        $("#fotoPerfil").insertAfter("#textoPerfil");
    }  
});