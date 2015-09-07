<?php include('inc/head.php'); ?>
<div class="central-content">
    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="/">Home</a> / Mi Carrito
                </div>
            </div>                
        </div>
    </div>
    <div class="titulo-pagina">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <span>Mi Carrito</span>
                </div>
            </div>                
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="carrito-content">
                    <div class="inner">
                        <?php include('inc/carrito-row.php'); ?>  
                        <div class="carrito-cuenta">
                            <hr/>
                            <div class="row">
                                <div class="col-sm-6 left">
                                    <input type="text" class="form-control cupon" name="cupon" id="cupon" placeholder="Cupón de Descuento" required>

                                    <button class="btn chico-button">APLICAR</button>
                                </div>
                                <div class="col-sm-6 right">
                                    <button class="btn chico-button">Actualizar</button>
                                    <button class="btn invertido-button">PROCEDER A PAGAR</button>                                    
                                </div>
                            </div>
                            <div class="row carrito-total-detalle">
                                <div class="col-md-6 col-sm-offset-6">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="carrito-total-descripcion">Subtotal</div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="carrito-total-valor">$899.92</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="carrito-total-descripcion">Costo Envío</div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="carrito-total-valor">
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="envio" value="1" checked="checked"> Opción1: <strong>$50.00</strong>
                                                    </label>
                                                </div>  
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="envio" value="2"> Opción2: <strong>$40.00</strong>
                                                    </label>
                                                </div> 
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="envio" value="3"> Opción3: <strong>$30.00</strong>
                                                    </label>
                                                </div>                                                 
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="carrito-total-descripcion">Total</div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="carrito-total-valor">$849.92</div>
                                        </div>
                                    </div>
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