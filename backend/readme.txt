Ejecutar el backend:
java -jar BackendForDemos2-0.0.1-SNAPSHOT.jar

Servicios:
Listado de juegos: http://localhost:8888/api/warcade/v1/games/
Obtener palabra aleatoria: http://localhost:8888/api/warcade/v1/games/{game}/random
Obtener palabra aleatoria con longitud fija: localhost:8888/api/warcade/v1/games/{game}/random/{longitud}