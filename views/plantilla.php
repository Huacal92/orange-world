<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="views/public/images/brand/favicon-ow-180.png" sizes="16x16 32x32 64x64" type="image/x-icon">
    <link rel="icon" href="views/public/images/brand/favicon-ow-192.ico" sizes="192x192" type="image/png">
    <link rel="apple-touch-icon" href="views/public/images/brand/favicon-ow-180.ico" sizes="180x180">
    <!-- CSS LINKS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="views/public/bundle.css">
    <!-- Slider Revolution Archivos CSS -->
    <link rel="stylesheet" type="text/css" href="views/plugins/revolution/css/settings.css">
    <link rel="stylesheet" type="text/css" href="views/plugins/revolution/css/layers.css">
    <link rel="stylesheet" type="text/css" href="views/plugins/revolution/css/navigation.css">
    <!-- Fonts Links -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- Icons Font Awasome -->
    <script src="https://kit.fontawesome.com/d99dc7685c.js" crossorigin="anonymous"></script>
    <!-- Plugins CSS -->
    <link rel="stylesheet" href="views/public/iconsow.css">
    <link rel="stylesheet" href="views/public/magnific-popup.css">
   <!--  <link rel="stylesheet" href="views/public/normalize.css"> -->
    <link rel="stylesheet" href="views/public/owl.carousel.css">
    

    <!-- Core jQuery Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- Plugins JS -->
    <script src="views/plugins/magnificPopup/magnificPopup.min.js"></script>
    <script src="views/plugins/countMe/countMe.min.js"></script>
    <script src="views/plugins/owlCarousel/owl.carousel.js"></script>
    <!-- Slider Revolution core JavaScript files -->
    <script type="text/javascript" src="views/plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>

    <!-- Scripts de extensión Slider Revolution. SOLO NECESARIO PARA PRUEBAS LOCALES -->
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="views/plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
    
    
</head>
<body style="background-image: url('views/public/images/bg/bg-pagina-inicio-orange-world.jpg'); background-size:cover; background-repeat:no-repeat; background-position:top left;" >

<div id="page" class="site-main">



<?php

 // Obtener la página solicitada
 $pagina = isset($_GET['include']) ? $_GET['include'] : 'home';
 $esPaginaLogin = ($pagina === 'login');

  if (!$esPaginaLogin) {
    include "includes/header.php";
  }

 /* echo "Página solicitada: " . $pagina; */
 // Definir la ruta del controlador
 $controllerPath = "controllers/{$pagina}Controller.php";

 // Verificar si el controlador existe
 if (file_exists($controllerPath)) {
     include $controllerPath;
     $controllerClass = ucfirst($pagina).'Controller';
     $controller = new $controllerClass();
     $controller->index();
 } else {
     // Si el controlador no existe, cargar el controlador 404
     include "controllers/Error404Controller.php";
     $notFoundController = new NotFoundController();
     $notFoundController->index();
 }
    
    if (!$esPaginaLogin) {
      include "includes/footer.php";
  }


?>
</div>    
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="views/public/bundle.js" defer></script>
</body>
</html>