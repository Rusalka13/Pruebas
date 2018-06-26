Prueba 3
=============
Para la prueba de hoy haremos un e-commence que será de tienda de libros. Para ello necesitará:
- 6 columnas y dentro de esas 6 columna tiene que tener 8 libros en cada una. 
- Generar columnas con precio y categorias.
-Usaremos un ventana modal que hará:
    - Se añade un carro.
    - Se pone imagenes del libro.
    - Descripción.
- Dentro del botón de comprar la función que debe hacer es subir el número de productos que tenemos en la cesta.



## Tecnologías aplicadas.
- Boostrap.
- Vue.js
- Sass.
- Jquerry.
- Git.

## Pasos.


1.Linkear lo que necesitemos. En esta ocasión ponemos el lin de boostrap (Aquí nos dirige a https://getbootstrap.com/), el sass (segun lo hayamos nombrado). Y los scrips de Vue.js y nuestro js que vayamos a crear.IMPORTANTE poner primero el scrip de Vue ante que el nuestro para que así lo encuentre.

2.Poner el navbar que podemos encontrar en la página de boostrap en el apartado de componetes/navbar. Para esta ocasión lo que haremos es poner el nombre de la página, el botón de inicio, un dropdown que nos hará más adelante la función de ordenar los articulos y en la parte derecha pondremos el carrito de la compra.
       -Para el carrito de la compra iremos a Font Awesome (https://fontawesome.com/) y cogeremos el icono del carrito y lo introducimos dentro de navbar.

3.Hacemos lo que sera la arquitectura que mostrará nuestra página. La parte que se ha selecionado ha sido una cart (de boostrap) a la cual le haremos algunas modificaciones.
        -En primer lugar creamos un archivo index.html en cual poderemos todos los links. En cuanto a nivel arquitectonico, después del body introduceremos un main con una id que conectará con vuejs y dentro del main pondremos la cart.
        -En segundo lugar creamos un archivo app.js en cual podremos toda la parte de vuejs. Pondremos todos los datos que necesitemos en esta ocasión para poner las portadas de los libros, los nombres y los precios. Podeis ver como se ha realizado esto en el codigo.
