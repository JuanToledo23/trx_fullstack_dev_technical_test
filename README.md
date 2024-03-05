
# Hi, I'm Juan Alberto Toledo Tello! 👋


## 🚀 About Me
Hola mi nombre es Juan Alberto Toledo Tello y soy un desarrollador FullStack, les presento mi version de la prueba tecnica que me compartieron, saludos.


## FrontEnd

 - [ReactJS](https://react.dev/)
 - [NextJS](https://nextjs.org/)
 - [Material UI](https://mui.com/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [Redux Toolkit](https://redux-toolkit.js.org/)
 - [React Google Maps](https://www.npmjs.com/package/@react-google-maps/api)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Prettier](https://mui.com/)

## BackEnd

 - [NodeJS](https://nodejs.org/en)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Express](https://www.express.com/)
 - [MongoDB](https://www.mongodb.com/)

 ## Funcionalidad 

En la interfaz principal se muestra el mapa de Google trazando la ruta que obtenemos desde el [API](https://iorm9noapi.execute-api.us-east-1.amazonaws.com/challenge/route/dummy1) que viene en el reto marcando los puntos con un pin rojo.

![1](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/1.png)

En la parte de abajo tenemos el listado de vehículos que obtenemos con el backend creado, podemos consultar la siguiente colección de postman para ver las diferentes apis

[Colección Postman](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/trx_fullstack_dev_technical_test.postman_collection.json)

Obtener los datos paginados
- [GET] - {{host}}/vehicles?page=1&perPage=10

Obtener todos los datos sin paginación
- [GET] - {{host}}/vehicles

Insertar un nuevo registro
- [POST] - {{host}}/vehicles

Actualizar un registro
- [PUT] - {{host}}/vehicles/:id

Eliminar un registro
- [DELETE] - {{host}}/vehicles/:id


Al dar clic en alguno de los vehículos enlistados se pondrá en el mapa un nuevo marcador que tiene una ubicación aleatoria (el backend se encarga de agregar esa ubicación), en los marcadores podremos hacer click y nos mostrara un pop up en el mapa con la información del vehículo.

![2](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/2.png)

![3](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/3.png)

Adicional al hacer click en algún vehículo nos mostrará un recuadro en la esquina inferior izquierda con los detalles de nuestro vehículo, donde podremos editar y eliminar así como directamente en la tabla.

![4](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/4.png)

![5](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/5.png)

En el Header de la tabla donde aparece el logo de "Traxi" podemos encontrar el paginador, un input de búsqueda y un botón de agregar, al momento de agregar o editar cualquier registro nos aparecerá un formulario, el formulario está validado para que todos los campos sean obligatorios.

![6](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/6.png)

En el input de búsqueda se puede realizar por cualquier campo de los registros, se realiza la búsqueda en el backend y te devuelve el resultado al dar "ENTER", con la "X" podemos limpiar el input y regresar todos los registros.

![7](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/7.png)
## Environment Variables

Para correr el proyecto tenemos que agregar las siguientes variables de entorno

FRONT END

- `NEXT_PUBLIC_ROUTE_DETAIL_URL=https://iorm9noapi.execute-api.us-east-1.amazonaws.com/challenge/route/dummy1`
- `NEXT_PUBLIC_HOST=http://localhost:5055`
- `NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyDu6D7_Z-zQVFJYlqICtecyksra2iyCi6w`

BACK END

- `DB_CONN_STRING="mongodb+srv://juantoledot:EiYKtKqfSNLore1L@vehiclesdb.rbemhmz.mongodb.net/?retryWrites=true&w=majority&appName=vehiclesDB"`
- `DB_NAME="traxion"`
- `VEHICLES_COLLECTION_NAME="vehicles"`


## Installation

Instalar las dependencias de los proyeyectos tanto del back y del front es con los siguientes comandos

```bash
  npm install
  npm run dev
```
    
## Demo

Se desplego el Front en Vercel, se necesita correr el backend de manera local para su correcto funcionamiento.

[https://trx-fullstack-dev-technical-test.vercel.app/
](https://trx-fullstack-dev-technical-test.vercel.app/
)


## Base de datos en MongoDB

![8](https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/8.png)