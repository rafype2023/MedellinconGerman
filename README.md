# Medellín en buena compañía

Guía independiente para Rafy, Vanessa, Germán y Lina. Viaje del 13 al 20 de octubre de 2026. Sitio estático sin instalación ni claves de API.

## Publicación en Render

Crear **New → Static Site**, conectar `rafype2023/MedellinconGerman`, rama `main`, y usar:

- Build command: `echo "Sitio estático listo"`
- Publish directory: `dist`

También se incluye `render.yaml` para un Blueprint. Para GitHub Pages desde la raíz, `index.html` abre `dist/`.

## Contenido

El plan principal es `Medellin_13-20_octubre_2026.pdf`. Los otros documentos sirven de contexto, no sustituyen el itinerario principal. Llegada de Rafy y Vanessa: martes 13, 18:25. Salida: martes 20, 11:00. Todas las horas son de Colombia. Se asume MDE para calcular los traslados; confirmar el billete.

Germán y Lina llegan el viernes por la noche y comparten sábado (Comuna 13), domingo (Arví) y lunes (Sabaneta / La Octava Maravilla). Su Airbnb está en Carrera 35 #49-37, apartamento 301, Medellín, Antioquia 050013. El mapa orienta sobre la cuadra (pin exacto del anfitrión por contrastar); los enlaces de ruta usan la dirección del edificio. Aniversario: viernes 16, Andrés Medellín a las 19:00; la guía no verifica ni modifica la reserva.

Cada día tiene mapa, secuencia de actividades, indicaciones de transporte, cena y plan de lluvia. La sección de encuentros fija Biblioteca San Javier (sábado 12:00), entrada exterior de Parque Explora (domingo 08:45) y fachada de Santa Ana en Sabaneta (lunes 12:00), con alternativas en taxi y transporte público desde ambos alojamientos. El directorio añade 13 lugares y un mapa con M (miradores), R (restaurantes) y X (mercados), filtros y enlaces. Los marcadores son orientativos y las líneas no son rutas calculadas. Los enlaces externos permiten obtener navegación real. Temperaturas 63–77 °F y lluvia ≈85% son referencias históricas mensuales de Medellín, no un pronóstico ni datos específicos de Arví. Las puntuaciones de restaurantes se conservan de las guías aportadas sin atribuir una plataforma no identificada.

Las tres escenas familiares son recreaciones con IA a partir de fotografías proporcionadas por el usuario. La escena de los cuatro en Plaza Botero es imaginada y no modifica la visita del miércoles para Rafy y Vanessa. No se incluyen los PDFs ni las fotografías originales en el repositorio.

## Archivos y créditos

- `dist/index.html`: página principal.
- `dist/data.js`: itinerario y lugares.
- `dist/app.js`: navegación, mapas diarios y contenido.
- `dist/guide-data.js`: encuentros actualizados y directorio de lugares.
- `dist/guide.js`: secciones de encuentros y mapa general filtrable.
- `dist/style.css`: presentación adaptable.
- `dist/assets/`: imágenes y Leaflet.

Fotografía de Medellín: Carlos Andres Granada, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Medell%C3%ADn_Panor%C3%A1mica.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Se recorta visualmente al mostrarla. Cartografía © OpenStreetMap. Leaflet conserva su licencia adjunta. Fuentes operativas y metodología en la sección final de la página, revisadas el 19 y 20 de septiembre de 2026.

Este proyecto no modifica `rafype2023/Medellin` ni su página anterior.
