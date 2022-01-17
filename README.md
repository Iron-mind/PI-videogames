
# Individual Project - Web Videogames
CLic --> https://iron-mind.github.io/PI-videogames
<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Descripción del Proyecto

App utlizando React, Redux, Node y Sequelize.
#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres


## Comenzando

 
__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Archivos

El repo cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que crees desde psql una base de datos llamada `videogames` o como tu quieras, pero asegurate de que sea el mismo nombre específicado al crear la conexión de sequelize.

El contenido de `client` fue creado usando: Create React App.







#### Frontend

en https://iron-mind.github.io/PI-videogames puedes ver:

__Pagina inicial__ __Ruta principal__ __Ruta de detalle de videojuego__ __Ruta de creación de videojuegos__

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Videojuego con las siguientes propiedades:
  - ID: * 
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- [ ] Genero con las siguientes propiedades:
  - ID
  - Nombre
 - [ ] plataforma con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos. Un ejemplo sería el juego `Counter Strike` pertenece a los géneros Shooter y Action al mismo tiempo. Pero a su vez existen otros videojuegos considerados como Shooter o como Action.


#### Backend (carpeta api)
### Únicos Endpoints/Flags de la api
aquí https://api-vgames.herokuapp.com están corriendo las siguientes rutas:

- [ ] __GET /videogames__:
  - Obtener un listado de los videojuegos
 
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de videojuegos que contengan la palabra ingresada como query parameter
  - tambien puedes agregar query order que puede ser alph o rating. Ejemplo: /videogames?order=rating&orderby=desc
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Incluiye los géneros asociados
  
- [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles

- [ ] __POST /videogame__:
- [ ]  - Crea un videojuego en la base de datos
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
 
