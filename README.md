Metropolitano de Lima / MozLocations
====================================
[Spanish first, English next]

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

Librerías adicionales: codebird.js y latlong.js.

¿Sugerencias?
-------------

Regístralas en el GitHub del proyecto https://github.com/juaneladio/metropolitano/issues

Metropolitano de Lima / MozLocations (English)
==============================================

A Firefox OS app (and a mobile web application for browsers) for users of Metropolitano de Lima, a public transportation system in Lima, Peru.

Web: http://juaneladio.github.io/metropolitano/app.html

This app can be ported quickly to other integrated systems of public transportation (like buses and trains), transportation companies, an so on. Also, because it's based in places identified by coordinates, it can be used as a foundation for apps related with other business: franchises, restaurants, clinics and more.

For developers
--------------

'MozLocations' was built using Firefox OS Building Blocks http://buildingfirefoxos.com/ 

Main files:
* app.html: Starting point in the application. It contains all the pages that are part of the application.
* js/applicationData.js: Base information used by the application. It contains all the stations of the transportation system and the routes that connect the stations. In other scenaries (like a business with many offices) the stations are just 'locations'.
* js/applicationScript.js: JavaScript code required by the application. It includes the code for the interchange between pages and the dynamic generation of the pages.
* manifest.webapp: Manifest file with the general information of the app, it's used to identify the app and the privilegies that requires in the Firefox Marketplace.

Additional libraries: codebird.js and latlong.js

Suggestions?
------------

Register them in Github https://github.com/juaneladio/metropolitano/issues
