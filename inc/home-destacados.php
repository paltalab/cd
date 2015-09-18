<div class="home-destacados-content">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="titulo-seccion">Productos Destacados</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="productos-content">
                    <?php for($i=1;$i<9;$i++):?>
                    <div class="producto-item-fix">
                        <div class="producto-item">
                            <div class="destacado-box-imagen">                            
                                <img src="images/home-producto.jpg" class="img-responsive" />
                                <div class="overlay">
                                    <a href="#" class="left" data-toggle="tooltip" data-placement="top" title="Agregar al Carrito"><i class="fa fa-plus"></i></a>
                                    <a href="#" class="right" data-toggle="tooltip" data-placement="top" title="Agregar a Favoritos"><i class="fa fa-heart-o"></i></a>                      
                                </div>
                            </div>
                            <div class="destacado-box-descripcion">
                                <div class="titulo">
                                    <a href="/producto.php">
                                    Hay - About a Lounge Chair AAL 93
                                    </a>
                                </div>
                                <div class="precio">$ 659.55</div>
                            </div>
                        </div>
                    </div>    
                    <?php endfor;?>
                </div>
            </div>
        </div>
    </div>
</div>