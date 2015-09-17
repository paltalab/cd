<?php include('inc/head.php'); ?>
<div class="central-content">    
    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="/">Home</a> / Checkout
                </div>
            </div>                
        </div>
    </div>
    <div class="titulo-pagina">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <span>Checkout</span>
                </div>
            </div>                
        </div>
    </div>            
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="checkout-content">
                    <div class="inner">
                        
                        <div class="checkout-content-direccion">
                        <?php include('inc/checkout-direccion-form.php');?>
                        </div>

                        <div class="checkout-content-productos">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">                            
                            <div class="title">Pedido</div>
                            <?php include('inc/checkout-productos.php'); ?> 
                                </div>
                             </div>                             
                        </div>
                        <div class="checkout-content-detalle">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                    <?php include('inc/checkout-detalle.php'); ?> 
                                </div>
                             </div>   
                        </div>

                    </div>
                </div> 
            </div>
        </div>
    </div>

</div>
<?php include('inc/close.php'); ?>