<div class="cambiar-password">
    <div class="title">CAMBIAR CONTRASEÑA</div>    
    <form id="form-password">
        <div class="form-group">                            
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nombre" required>
        </div>                 
        <div class="form-group">           
            <input type="email" class="form-control" id="email" name="email" placeholder="Email">
        </div>
        <div class="form-group">            
            <input type="password" class="form-control" id="pass" name="pass" placeholder="Contraseña">
        </div>
        <div class="form-group">           
            <input type="password" class="form-control" id="pass1" name="pass1" placeholder="Contraseña">
        </div> 
        <button type="submit" class="btn form-control">Registrarme</button>       
    </form>   
    <script type="text/javascript">
        $("#form-password").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                pass: {
                    required: true,
                    equalTo: "#pass1",
                    verificaPassword: true
                },
                pass1: {
                    required: true,
                }
            }
        });
    </script>                    
</div>