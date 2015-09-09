<div class="producto-detalle-top-precio">
    $2999.00
</div>
<div class="producto-detalle-top-rating">
    <input id="rating" name="rating" class="rating" data-min="0" data-max="5" data-step="1">
    <script>
        $("#rating").rating({
            stars: 5,
            glyphicon: true,
            symbol: null,
            ratingClass: '',
            disabled: false,
            readonly: false,
            rtl: false,
            size: 'sm',
            showClear: false,
            showCaption: false,
            defaultCaption: '{rating}',
            starCaptions: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5'
            },
            starCaptionClasses: {
                1: 'label label-danger',
                2: 'label label-warning',
                3: 'label label-info',
                4: 'label label-primary',
                5: 'label label-success'
            },
            clearButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
            clearButtonTitle: 'Clear',
            clearButtonBaseClass: 'clear-rating',
            clearButtonActiveClass: 'clear-rating-active',
            clearCaption: false,
            clearCaptionClass: 'label label-default',
            clearValue: null,
            captionElement: null,
            clearElement: null,
            containerClass: null,
        });
    </script>
</div>
<div class="producto-detalle-top-pedir">
    <div class="row">
        <div class="col-md-6">
            <div class="input-color">
            <select id="colorselector">
                <option value="" data-color=""  selected="selected"></option>
                <option value="106" data-color="#A0522D">sienna</option>
                <option value="47" data-color="#CD5C5C">indianred</option>
                <option value="87" data-color="#FF4500">orangered</option>
                ...
                <option value="15" data-color="#DC143C">crimson</option>
                <option value="24" data-color="#FF8C00">darkorange</option>
                <option value="78" data-color="#C71585">mediumvioletred</option>
            </select>
            <span id="colorTitle">Seleccione</span>
            </div>
            <script>
                $('#colorselector').colorselector({
                    callback: function (value, color, title) {
                        $("#colorTitle").html(title);
                    }
                });
            </script>            


            <div class="form-group">
                <label for="exampleInputEmail1">Material</label>
                <select class="form-control " name="material" id="material">
                    <option value="Material 1"><i></i>Material 1dada</option>
                    <option value="Material 2">Material 2</option>
                    <option value="Material 3">Material 3</option>
                </select>
            </div>   
        </div>
        <div class="col-md-6">
            <div class="input-cantidad">
                <a class="menos" href="javascript:void(0);" onclick="inputCantidadAgregar(false, this);">-</a>
                <input type="text" class="form-control" value="1" />
                <a class="mas" href="javascript:void(0);" onclick="inputCantidadAgregar(true, this);">+</a>            
            </div>            
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="content-agregar-favoritos">
                <button class="btn agregar-al-carrito">+ AÑADIR AL CARRITO</button>
            </div>            
        </div>
    </div>    
    <div class="row">
        <div class="col-md-12">
            <div class="content-agregar-favoritos">
                <a href="/favoritos.php">AGREGAR A FAVORITOS</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="descripcion">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo.                 
            </div>
        </div>
    </div>    
</div>