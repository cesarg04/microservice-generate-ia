# WORKER APP

Esta aplicación es un microservicio que se encarga de procesar el Payload que envía la API REST y transformarlo en un PDF generado por inteligencia artificial.

## Tecnologías requeridas

- Typescript
- RabbitQM

## Funcionamiento

- Recibe la cola con el mensaje y el ID del recurso
- Envía el mensaje para generar la información con inteligencia artificial
- Con la información suministrada por la IA, genera un PDF
- Envía el PDF a una nube. En mi caso, utilicé Cloudinary

## Guía de uso

- Crear el archivo `.env` e insertar las variables de entorno, guiarse del archivo `.env.example`
- Instalar dependencias: `pnpm install`
- Ejecutar el compilador de Typescript: `pnpm run watch`
- Levantar la aplicación: `pnpm run dev`