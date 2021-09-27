<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title title="Registro">Registro</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
rel="stylesheet" />
    </head>
<body>
    <header class="header">
        <div class="top-header">
            <img src="/images/logo-mercado-liebre.svg" width="360" alt="Logo de MercadoLiebre" class="logo">
            <p class="cuotas"><i class="fas fa-hand-holding-usd"></i> Comprá en cuotas y sin tarjeta de crédito</p>
        </div>

        <div class="burger-menu">
            <a href="#">
                <i class="fas fa-bars"></i>
            </a>
        </div>
        <nav class="main-navbar">
            <p><input class="search-bar"></input><i class="fas fa-search"></i></p>
            <ul class="first-ul">
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Tiendas Oficiales</a></li>
                <li><a href="#">Vender</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            <ul class="second-ul">
                <li><a href="/register">Creá tu cuenta <i class="fas fa-sign-in-alt"></i></a></li>
                <li><a href="/login">Ingresá <i class="fas fa-user-check"></i></a></li>
                <li><a href="#">Mis compras <i class="fas fa-shopping-bag"></i></a></li>
            </ul>

        </nav>
    </header>
        <main>
            <form action="/login" method="post" enctype="multipart/form-data" class="register-form">
                <!-- enctype="multipart/form-data" si el formulario incluye mas que solo texto-->

               <div class="form-control">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" required>
                    <span class="error">The email is required</span>
                </div>

                <div class="form-control">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" required>
                    <span class="error">The password is required</span>
                </div>

                <button type="submit" value="ingresar" class="button_slide slide_right button1">Enviar!</button>
                <button type="reset" value="Borrar" class="button_slide slide_right">Borrar</button>

            </form>
        </main>
        
        <!-- footer -->
        <footer>

        </footer>

    
</body>
</html>