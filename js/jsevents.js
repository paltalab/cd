/*******************************************************************************
DOCUMENT READY
*******************************************************************************/
$(document).ready(function(){
  dropdownMenuMobile(); //Dropdown para Mobile
  activarSlider();      //activa slider en el home
  activarPlaceHolder();  //Funcionalidad del Placeholder   
  activarDopdownCategorias(); //Dropdown de Categorias 
  activarMasMenosFaq();   // + - en FAQ
  activarMasMenosFormasDePago();   // + - en FAQ
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

function activarMasMenosFaq(){
        $('.faq-row-respuesta').on('show.bs.collapse', function () {
            $("#btn"+$(this).attr("id")).addClass("abierto");
        });
        $('.faq-row-respuesta').on('hide.bs.collapse', function () {
            $("#btn"+$(this).attr("id")).removeClass("abierto");
        });    
}
function activarMasMenosFormasDePago(){

        $("input[name='formadepago']").change(function() {
            $(".checkout-pagos-detalle").slideUp("slow");
            $($(this).attr("ref")).slideDown("slow");
        });

        $('.checkout-pagos-detalle').on('show.bs.collapse', function () {            
           // $(".checkout-pagos-row input").removeAttr("checked");
            $("input[value='"+$(this).attr("ref")+"']").prop("checked",true);
            $("#btn"+$(this).attr("id")).addClass("abierto"); 
        });
        $('.checkout-pagos-detalle').on('hide.bs.collapse', function () {
           // $("#btn"+$(this).attr("id")).removeClass("abierto").removeAttr("checked");
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
    $(element).parent(".fav-botones").parent(".favorito-row").fadeOut().remove(); 
}
/*******************************************************************************
CARRITO
*******************************************************************************/
function inputCantidadAgregar(agrega,element){
    var caja=$(element).parent(".input-cantidad");
    var valor=$('input',caja).val();
    if(agrega){
        $('input',caja).val(parseInt(valor)+parseInt(1));
    }else if(valor>1){
        $('input',caja).val(parseInt(valor)-parseInt(1));
    }
}
function removerFilaCarrito(element){
    $(element).parent(".fav-botones").parent(".carrito-row").fadeOut().remove(); 
}
/*******************************************************************************
MANEJO DE FORMULARIOS
*******************************************************************************/
agregarValidacionPasswordVieja();
agregarValidacionPassword();
agregarValidacionEmail();
function agregarValidacionPasswordVieja(){
    $.validator.addMethod(
            "verificaPasswordVieja",
            function (value, element) {
                if (value=="vieja") {
                    return true;
                }
                return false;
            },
            "La contraseña no concuerda, prueba de nuevo"
            );
}
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




