# NODEJS -RABBITQM - MICROSERVICES

Esta es una aplicación orientada a microservicios que utiliza RabbitQM para el manejo de las colas.

El proyecto consiste en generar PDFs a partir de una consulta generada por inteligencia artificial, en este caso con la API de OpenAI.

Consta de autenticación para el usuario.

## Guía de uso

- **Registrarse**
  - Método: `POST`
  - Ruta: `/api/auth/register`
  - Esto te entregará un token

- Debes enlazar el token generado en el registro en el header de la petición con el nombre de `x-token`

- **Crear una consulta**
  - Método: `POST`
  - Ruta: `/api/resources`
  - Solo necesitas pasar el título del contenido que deseas generar, `title`
  - Tendrás la respuesta inmediata, pero estará en un estado pendiente. Aquí es donde entra en acción el microservicio, que se encarga de generar la información con la IA, convertirla en PDF y, finalmente, subir el archivo a la nube.
  - Una vez se haya completado todo el proceso en el microservicio, estará guardado un enlace en la base de datos donde estará el archivo.

- **Consultar todos los recursos creados**
  - Método: `GET`
  - Ruta: `/api/resources`

- **Consultar recursos por ID**
  - Método: `GET`
  - Ruta: `/api/resources/:id`
