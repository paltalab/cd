/*******************************************************************************
DOCUMENT READY
*******************************************************************************/
$(document).ready(function(){
  dropdownMenuMobile(); //Dropdown para Mobile
  activarSlider();      //activa slider en el home
  activarPlaceHolder();  //Funcionalidad del Placeholder   
  activarDopdownCategorias(); //Dropdown de Categorias 
});

/*******************************************************************************
ONLOAD
*******************************************************************************/
$(window).load(function() {
  igualarTituloProducto();
  
});
/*******************************************************************************
REASIZE
*******************************************************************************/
$(window).resize(function(){
  igualarTituloProducto(); 
});
















/*******************************************************************************
FUNCIONES BASICAS
*******************************************************************************/
function activarDopdownCategorias(){
    $('.dropdown-categorias').click(function(e){
        e.preventDefault();
        console.log("sds");
        $(this).toggleClass("active");
        $('.menu-overlay-categorias').slideToggle( "slow" );
    });
}
function igualarTituloProducto(){
  equalheight('.producto-item .titulo');    
}
function activarPlaceHolder(){
  jQuery('input, textarea').placeholder();
}
function dropdownMenuMobile(){
  //Dropdown Menu
  $('.dropdown').mouseover(function(){ 
    if($(window).width() >767){
      $( this).addClass("open"); 
    }
  }).mouseout(function() {
    if($(window).width() >767){  
      $( this).removeClass("open"); 
    }
  });
      
}

/*******************************************************************************
SLIDER
*******************************************************************************/
function activarSlider(){     
  //Si exite el slider
  if($(".rslides").length>0){  
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,            // Integer: Speed of the transition, in milliseconds
      timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
      pager: true,           // Boolean: Show pager, true or false
      nav: true,             // Boolean: Show navigation, true or false
      random: false,          // Boolean: Randomize the order of the slides, true or false
      pause: false,           // Boolean: Pause on hover, true or false
      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
      prevText: "",   // String: Text for the "previous" button
      nextText: "",       // String: Text for the "next" button
      maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "",     // Selector: Declare custom pager navigation
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}     // Function: After callback
    });
  }
}
/*******************************************************************************
FAVORITOS
*******************************************************************************/
function removerFilaFavoritos(element){
    $(element).parent(".fav-botones").parent(".favorito-row").fadeOut();
}
/*******************************************************************************
MANEJO DE FORMULARIOS
*******************************************************************************/
agregarValidacionPassword();
agregarValidacionEmail();
function agregarValidacionPassword(){
    $.validator.addMethod(
            "verificaPassword",
            function (value, element) {
                if (value.length > 8) {
                    return true;
                }
                return false;
            },
            "La contraseña no concuerda, prueba de nuevo"
            );
}
function agregarValidacionEmail(){
    $.validator.addMethod(
            "verificaEmail",
            function (value, element) {
                if (value.length > 8) {
                    $("#errorEmail").hide();
                    $("#okEmail").show();
                    return true;
                }else{
                    $("#errorEmail").show();
                    $("#okEmail").hide();
                }
                return false;
            },
            "El email no concuerda, prueba de nuevo"
            );
}
function showHideFactura(check) {
    if ($(check).prop("checked")) {
        $(".form-dato-facturacion").hide();
    } else {
        $(".form-dato-facturacion").show();
    }
}


/*******************************************************************************
 EqualHeight
*******************************************************************************/
equalheight = function (container) {
    var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
/*******************************************************************************
ANIMACIONES
*******************************************************************************/
  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();

/*******************************************************************************
USER AGENT
*******************************************************************************/
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);




