Metropolitano de Lima / MozLocations
====================================

Una aplicación para Firefox OS (y cualquier navegador web) para usuarios del Metropolitano, un sistema de transporte público en Lima, Perú.

Web: http://juaneladio.github.io/metropolitano/app.html

Esta aplicación puede portarse rápidamente a otros sistemas integrados de transporte público (como buses y trenes), empresas de transporte interprovinciales, etcétera. Asimismo, dado que basa su funcionamiento en lugares identificados por coordenadas, puede servir de base para aplicaciones de cadenas de negocios, como restaurantes, clínicas y más.

Para desarrolladores
--------------------

'MozLocations' fue construida usando Firefox OS Building Blocks http://buildingfirefoxos.com/ 

Archivos importantes:
* app.html: Punto de entrada de la aplicación, y que contiene todas las páginas que componen la aplicación.
* js/applicationData.js: Información de base usada por la aplicación. Contiene todas las estaciones del sistema de transporte y las rutas que interconectan las estaciones. En otros escenarios (como un negocio con varios locales) las estaciones serían simplemente 'ubicaciones'.
* js/applicationScript.js: código JavaScript requerido para el funcionamiento de la aplicación. Incluye el código para el intercambio entre páginas y la generación dinámica de las mismas.
* manifest.webapp: Archivo manifiesto con la información general de la aplicación, utilizado para identificar la aplicación y los permisos que requiere en el Firefox Marketplace.

¿Sugerencias?
-------------

Regístralas en el GitHub del proyecto https://github.com/juaneladio/metropolitano/issues
