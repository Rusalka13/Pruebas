Prueba2

Día 15/6/2018

-Hacer un parallax con 3 imagenes.
-Añadir un Vue.js que pinta H1 en imagen central + añadir un botón que lo gire todo.
-Hacer TDD calculadora.
  -"2+2",devuelve 4.
  -"5+4*2/2" devuelve 9.
  -"3/2, produce error.
  -"** 4-2", produce error.
  -"45-2", produce error.



1. Buscamos las imagenes.

2. Hacer parallax.
   Para hacerlo iremos al css o sass y pondremos al body y html el margin y padding a 0 y el height a 100%; para que nos cubra toda la página. A continuacion creamos una id (esta id ira dentro del div en index) en el mismo sass para que nos haga el parallax.Le pondremos la imagen con un background-image, el background-attachment para que se nos quede fija la imagen en el sitio, le ponemos el background-position en center, background-repeat y escogemos la opcion para que no se repita, background-size para estirar la imagen lo mayor posible; y height para darle tamaño a la imagen.

Podemos repetir esto tantas veces como queramos o necesitemos.

3. Hacer el Vue.js y que gire:
   Para hacerlo iremos a la página vue.js y ponemos el script corespondiente para que nos funcione. A continuación escogemos la opción que necesitemos, en este caso la que tiene el boto que haga girar la letra. Por un lado cogemos el index con el codigo i la ponemos en el html, por otro lado cogemos el 
