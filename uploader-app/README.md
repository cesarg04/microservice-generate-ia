# UPLOADER APP

Esta es una API REST que conecta con un microservicio. Su función principal es recibir un Payload, guardarlo en la base de datos y luego enviar una cola para que el microservicio lo procese y cree un archivo PDF.

## Tecnologías requeridas

- Typescript
- PostgreSQL
- RabbitQM

## Guía de uso

- Crear el archivo `.env` e insertar las variables de entorno, guiarse del archivo `.env.example`
- Instalar dependencias: `pnpm install`
- Ejecutar el compilador de Typescript: `pnpm run watch`
- Levantar la aplicación: `pnpm run dev`