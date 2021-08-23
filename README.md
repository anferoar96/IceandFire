# Consumo de API y cron
## Prerrequisitos
Tener instalado:
- Docker
- Docker-compose
- Postman (Opcional)
## Ejecución
1. Ingresar desde la terminal a la ruta de la carpeta
2. Ejecutar **docker-compose up --build**
3. Esperar 30 minutos para la insercion del primer personaje de Ice and Fire a la base de datos. Si se quiere a un minuto cambiar  del archivo **cron.js**  en la linea 9 por lo siguiente:
```
 cron.schedule('* * * * *',async () => {
```
Cabe aclarar que el api se expone en el puerto 4002 y la base de datos en el puerto 5434
## Explicación
Se uso el modulo **node-cron** que permite configurar facilmente cualquier un programador de tareas (cron), tambien se crearon 2 endpoints principalmente para propositos de testeo:
1. **/all** Obtiene todos personajes que hasta el momento hayan ingresado a la base de datos.
2. **/last** Obtiene el ultimo personaje que haya ingresado a la base de datos.