// B. Jumps between application's pages.

  //stations
  document.querySelector('#btn-stations-back').addEventListener ('click', function () {
    document.querySelector('#stations').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //favoritestations
  document.querySelector('#btn-favorite-back').addEventListener ('click', function () {
    document.querySelector('#favorite-stations').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //neareststations
  document.querySelector('#btn-nearest-back').addEventListener ('click', function () {
    document.querySelector('#nearest-stations').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //tweets
  document.querySelector('#btn-tweets-back').addEventListener ('click', function () {
    document.querySelector('#tweets').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //info
  document.querySelector('#btn-info-back').addEventListener ('click', function () {
    document.querySelector('#info').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //about
  document.querySelector('#btn-about-back').addEventListener ('click', function () {
    document.querySelector('#about').className = 'right';
    document.querySelector('#index').className = 'current';
  });
  //1station
  document.querySelector('#btn-station-back').addEventListener ('click', function () {
    document.querySelector('#station').className = 'right';
  });
    
// C. General functions

  function makeLink(text) // this REGEX converts http(s) links that are embedded in the tweet text into real hyperlinks.
  {  
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;  
    return text.replace(exp,"<a href='$1' target='_blank'>$1</a>");
  }
  
  function getFavoriteStationsAsArray()
  {
    var arrayFavoriteStations = JSON.parse(localStorage.getItem("myfavoritestations"));
    if (arrayFavoriteStations == null ) { arrayFavoriteStations=[]; }
    return arrayFavoriteStations;
  }
  
  function removeFavoriteStation(stationselected)
  {
    var arrayFavoriteStations = getFavoriteStationsAsArray();
    var position = arrayFavoriteStations.indexOf(stationselected);
    if (position != -1)
    {
      arrayFavoriteStations.splice(position,1);
    }
    localStorage.setItem("myfavoritestations",JSON.stringify(arrayFavoriteStations));
  }

// D. Content builders for dynamic pages

  function showinformation()
  {
    document.querySelector('#info').className = 'current';
  }
  
  function showabout()
  {
    document.querySelector('#about').className = 'current';
  }
  
  function showliststations()
  {
    /* The list is ordered before
     * The next script was based on MDN's Array.prototype.sort page */
    // the array to be sorted
    var list = applicationData.stations;
    // temporary holder of position and sort-value
    var map = list.map(function(e, i){
      return {index: i, value: e.name.toLowerCase()}
    })
    //console.log(map);
    // sorting the map containing the reduced values
    map.sort(function(a, b) {
      return a.value > b.value ? 1 : -1;
    });
    //console.log(map);
    // container for the resulting order
    var result = map.map(function(e){
      return list[e.index]
    })
    var htmlstations = "<ul>";
    var numberstations = applicationData.stations.length;
    for (var i=0; i<numberstations; i++)
    {
      // Before: htmlstations += "<li><a href='javascript:showstation("+i+")'>";
      htmlstations += "<li><a href='javascript:showstation("+map[i].index+")'>";
      // Now: Explanation: map[i].index has the unordered index for the current element
      htmlstations += '<aside class="icon comms-icon contacts-location"></aside>';
      // Before: htmlstations += "<p>"+applicationData.stations[i].name+"</p></a></li>";
      htmlstations += "<p>"+result[i].name+"</p></a></li>";
      // Now: Explanation: result[i].name is the name of the current element, 
      // equals map[i].value but without .toLowerCase()
    }
    htmlstations += "</ul>";
    document.querySelector('#list-of-stations').innerHTML = htmlstations;
    document.querySelector('#stations').className = 'current';
  }

  function showstationsindirection(stationSelected,routeSelected,directionSelected)
  {
    var htmlstations = '';
    htmlstations += '<h1>';
    htmlstations += applicationData.routes[routeSelected].name+'<br>';
    htmlstations += applicationData.routes[routeSelected].directions[directionSelected].name;
    htmlstations += '</h1>';
    htmlstations += '<p class="small">';
    var numberStationsInDirectionSelected = applicationData.routes[routeSelected].directions[directionSelected].stations.length;
    for (var i=0; i<numberStationsInDirectionSelected; i++)
    {
      stationIterated = applicationData.routes[routeSelected].directions[directionSelected].stations[i];
      if (stationIterated === stationSelected)
      htmlstations += '<u>[ '+applicationData.stations[stationIterated].name+" ]</u><br>";
      else
      htmlstations += '-'+applicationData.stations[stationIterated].name+"<br>";
    }
    htmlstations += '</p>';
    document.querySelector('#list-of-stationsindirection').innerHTML = htmlstations;
    document.querySelector('#stationsindirection').className = 'fade-in';
	}

  function showstationinmap(stationSelected,applicationData)
  {
    var htmlstations = '';
    htmlstations += '<h1>';
    htmlstations += applicationData.stations[stationSelected].name;
    htmlstations += '</h1>';
    htmlstations += '<p class="small">';
    htmlstations += applicationData.stations[stationSelected].address;
    htmlstations += '</p>';
    if (!navigator.onLine)
    {
      htmlstations += '<p class="small">'+"Usted no está conectado a Internet."+"</p>";
      document.querySelector('#list-of-stationinmap').innerHTML = htmlstations;
    }
    else
    {
      document.querySelector('#list-of-stationinmap').innerHTML = htmlstations;
      Map.init(applicationData.stations[stationSelected], '#list-of-stationinmap');
    }
    document.querySelector('#stationinmap').className = 'fade-in';
	}
  
  function showstation(stationselected)
  {
    // a. Show stations details
    var htmlstation = "";
    htmlstation += '<ul><li><aside class="icon comms-icon contacts-location"></aside>';
    htmlstation += "<p>"+applicationData.stations[stationselected].name+"</p>";
    htmlstation += "<p>"+applicationData.stations[stationselected].address+"</p>";
    htmlstation += "</li>";
    if ((getFavoriteStationsAsArray().indexOf(stationselected)) != -1)
      htmlstation += '<div id="favoritebutton"><a role="button" href="javascript:removefavoritestation('+stationselected+',applicationData)">'+"Dejar de ser favorita"+"</a></div>";
    else
      htmlstation += '<div id="favoritebutton"><a role="button" href="javascript:addfavoritestation('+stationselected+',applicationData)">'+"Fijar como favorita"+"</a></div>";
    htmlstation += "</ul>";
    htmlstation += '<div id="showmapbutton"><a role="button" href="javascript:showstationinmap('+stationselected+',applicationData)">'+"Mostrar mapa de estación"+"</a></div>";
    // b. Load current date in order to show information valid for today
    if ("routes" in applicationData)
    {
      var today = new Date();
      var dayname = "";
      switch (today.getDay()) {
        case 0: dayname = "Domingo"; break
        case 1: dayname = "Lunes"; break
        case 2: dayname = "Martes"; break
        case 3: dayname = "Miércoles"; break
        case 4: dayname = "Jueves"; break
        case 5: dayname = "Viernes"; break
        case 6: dayname = "Sábado"; break
      }
      // c. Load available routes Today
      htmlstation += "<header>"+"Rutas para hoy <strong>"+dayname+"</strong></header><ul>";
      var numberroutes = applicationData.routes.length;
      for (var i=0; i<numberroutes; i++)
      { 
        var routealreadylisted = false;
        var numberdirections = applicationData.routes[i].directions.length;
        for (var j=0; j<numberdirections; j++)
        { 
          var routewithcoincidences = false;
          if ( (applicationData.routes[i].directions[j].days.indexOf(today.getDay())!==-1)
            && (applicationData.routes[i].directions[j].stations.indexOf(stationselected)!==-1)
            ) // If today this direction is available, and this direction pass through this station
          {
            routewithcoincidences = true;
            if (!routealreadylisted)
            { // I'm going to list the Route's name only once
              htmlstation += '<li><p>';
              htmlstation += applicationData.routes[i].name+'</p>';
              routealreadylisted = true;
            }
//            htmlstation += "<p>"+applicationData.routes[i].directions[j].name+"</p>";
            htmlstation += '<a href="javascript:showstationsindirection('+stationselected+','+i+','+j+')"><aside class="icon comms-icon contacts-link"></aside><p>'+applicationData.routes[i].directions[j].name+"</p>";
            htmlstation += "<p>- "+"Salidas"+": ";
            var numberhours = applicationData.routes[i].directions[j].hours.length;
            for (var k=0; k<numberhours; k++)
            {
              if (applicationData.routes[i].directions[j].typeOfSchedule === "Intervals")
              { // Intervals: Ej: The direction is available between 07:00 and 09:00 hours
                if (k===0)
                { htmlstation += ""+applicationData.routes[i].directions[j].hours[k].toString()+"-"; }
                else if ( (k%2) === 0 )
                { htmlstation += ", "+applicationData.routes[i].directions[j].hours[k]+"-"; }
                else 
                { htmlstation += ""+applicationData.routes[i].directions[j].hours[k]+""; }
              }
              if (applicationData.routes[i].directions[j].typeOfSchedule === "Frequencies")
              { // Frequencies: Ej: The route is available at 07:30, then at 09:00, and the last departure is at 12:30
                if (k===0)
                { htmlstation += ""+applicationData.routes[i].directions[j].hours[k].toString(); }
                else
                { htmlstation += ", "+applicationData.routes[i].directions[j].hours[k]+""; }
              }
            }
            htmlstation += "</p></a>";
//            htmlstation += "</p>";
          }
          if (routewithcoincidences && (j==numberdirections-1) )
          { // If this Route has coincidences and this is the last iteration I'm closing the list of Directions
            htmlstation += "</li>";
          }
        }
      }
      htmlstation += "</ul>";
    }
    // d. Transfer all HTML to the page
    document.querySelector('#station-details').innerHTML = htmlstation;
    document.querySelector('#station').className = 'current';
    /*setTimeout(function(){
      Map.init(applicationData.stations[stationselected]);
    },2000);*/
  }
  
  function addfavoritestation(stationselected,applicationData)
  {
    //localStorage.setItem("myfavoritestations",stationselected);
    var arrayFavoriteStations = getFavoriteStationsAsArray();
    if (arrayFavoriteStations.indexOf(stationselected) == -1)
    { // if I didn't find it, add it
      arrayFavoriteStations.push(stationselected);
      localStorage.setItem("myfavoritestations",JSON.stringify(arrayFavoriteStations));
    }
    if ("mozNotification" in navigator)
    { // FirefoxOS
      var notification = navigator.mozNotification.createNotification(
        "Metropolitano de Lima",
        "Estación favorita: "+applicationData.stations[stationselected].name
        );
      notification.onshow = function () { setTimeout(notification.close(), 1000); }
                    notification.show();
    }
    else
    if ("Notification" in navigator)
    { // Firefox +22
      var n = new Notification("Metropolitano de Lima",{body:"Estación favorita: "+applicationData.stations[stationselected].name});
    }
    else
    { // Other browsers: do nothing
    }
    var htmlbutton = '<a role="button" href="javascript:removefavoritestation('+stationselected+',applicationData)">'+"Dejar de ser favorita"+"</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
  }
  
  function removefavoritestation(stationselected,applicationData)
  {
    removeFavoriteStation(stationselected);
    var htmlbutton = '<a role="button" href="javascript:addfavoritestation('+stationselected+',applicationData)">'+"Fijar como favorita"+"</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
    renderfavoritestations();
  }
  
  function confirmremoveallfavorites()
  {
    localStorage.removeItem('myfavoritestations');
    document.querySelector('#remove-favorite-stations').className = 'fade-out';
    showfavoritestations();
  }
  
  function cancelremoveallfavorites()
  {
    document.querySelector('#remove-favorite-stations').className = 'fade-out';
  }
  
  function cancelstationsindirection()
  {
    document.querySelector('#stationsindirection').className = 'fade-out';
  }
  
  function cancelstationinmap()
  {
    document.querySelector('#stationinmap').className = 'fade-out';
  }
  
  function renderfavoritestations()
  {
    var arrayFavoriteStations = getFavoriteStationsAsArray();
    var htmlfavoritestations = "";
    if (arrayFavoriteStations.length  )
    {
      htmlfavoritestations = "<ul>";
      var numberstations = arrayFavoriteStations.length;
      for (var i=0; i<numberstations; i++)
      {
        htmlfavoritestations += "<li><a href='javascript:showstation("+arrayFavoriteStations[i]+")'>";
        htmlfavoritestations += '<aside class="icon comms-icon contacts-location"></aside>';
        htmlfavoritestations += "<p>"+applicationData.stations[arrayFavoriteStations[i]].name+"</p></a></li>";
      }
      htmlfavoritestations += "</ul>";
      htmlfavoritestations += '<a role="button" class="danger" href="javascript:removeallfavorites()">'+"Quitar todas las favoritas"+"</a>";
    }
    else
    {
      htmlfavoritestations = '<p class="small">'+"No hay estación favorita."+"</p>";
    }
    document.querySelector('#list-of-favorite-stations').innerHTML = htmlfavoritestations;
  }
  
  function showfavoritestations()
  { 
    // render fills updated HTML, show really displays
    // if not, weird behaviors occurs (remove a favorite still shows in list of favorites
    // or if add show after remove a favorite in main list displays favorites, not main list
    renderfavoritestations();
    document.querySelector('#favorite-stations').className = 'current';
  }
  
  function removeallfavorites()
  {
    document.querySelector('#remove-favorite-stations').className = 'fade-in';
  }
  
  function showneareststations()
  {
    if (!navigator.onLine)
    {
      document.querySelector('#list-of-nearest-stations').innerHTML = '<p class="small">'+"Usted no está conectado a Internet."+"</p>";
      document.querySelector('#nearest-stations').className = 'current';
    }
    else
    {
      var stationsList = document.querySelector('#list-of-nearest-stations');
      stationsList.innerHTML = '<p class="small">'+"Por favor, espere un momento ... "+"<progress></progress></p>";
      document.querySelector('#nearest-stations').className = 'current';
      if ("geolocation" in navigator)
      {
        var options = {
          // enableHighAccuracy: true,
          timeout: 30000 //30 sec
          // maximumAge: 0
          };
        function success(pos)
        {
          var crd = pos.coords;
          //console.log('Latitude : ' + crd.latitude);
          //console.log('Longitude: ' + crd.longitude);
          //console.log('More or less ' + crd.accuracy + ' meters.');
          var myLatLong = new LatLon(Geo.parseDMS(crd.latitude), Geo.parseDMS(crd.longitude));
          var numberstations = applicationData.stations.length;
          var min_distance;
          var neareststation;
          for (var i=0; i<numberstations; i++)
          {
            var current_station = new LatLon(Geo.parseDMS(applicationData.stations[i].coordinatelat), Geo.parseDMS(applicationData.stations[i].coordinatelng));
            //console.log(myLatLong);
            var current_distance = myLatLong.distanceTo(current_station);
            //console.log(current_distance);
            if (i==0)
            {
              min_distance = current_distance;
              neareststation = 0;
            }
            if (parseFloat(current_distance) < parseFloat(min_distance))
            {
              min_distance = current_distance;
              neareststation = i;
            }
          }
          // Print info
          var htmlneareststations = '';
          htmlneareststations = '<ul>';
          htmlneareststations += '<li><a href="javascript:showstation('+neareststation+')">';
          htmlneareststations += '<aside class="icon comms-icon contacts-location"></aside>';
          htmlneareststations += '<p>'+applicationData.stations[neareststation].name+'</p>';
          htmlneareststations += '<p>'+'+'+min_distance+' Kms.</p>';
          htmlneareststations += '</a></li>';
          // Number of blocks is an arbitrary measure
          htmlneareststations += '<li><aside class="icon comms-icon contacts-sms"></aside>';
          htmlneareststations += '<p></p><p class="small">';
          min_blocks = Math.round(min_distance*10); // I assume 1 block = 100 meters
          if (min_blocks<=10)
            htmlneareststations += 'Te encuentras a unas '+min_blocks+' cuadras aprox.';
          else if (min_blocks<=100)
            htmlneareststations += '¡Oh, vaya! Estás demasiado lejos para ir a pie.';
          else
            htmlneareststations += '¡OH, NO! Parece que no estás en la misma ciudad.';
          htmlneareststations += '</p></li></ul>';
          
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
          Map.init(applicationData.stations, '#list-of-nearest-stations');
          Map.geoSuccess(crd);
        };
        function error(err)
        {
          //console.warn('ERROR(' + err.code + '): ' + err.message);
          var htmlneareststations = '<p class="small">'+"Lo sentimos, no se pudo determinar su ubicación."+"</p>";
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
          Map.init(applicationData.stations, '#list-of-nearest-stations');
          Map.geoError();
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
      }
      else
      {
        /* geolocation IS NOT available */
        var htmlneareststations = '<p class="small">'+"La geolocalización no está disponible en su equipo."+"</p>";
        document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
      }
    }
  }
  
  function showtweets()
  {
    if (!navigator.onLine)
    {
      document.querySelector('#list-of-tweets').innerHTML = '<p class="small">'+"Usted no está conectado a Internet."+"</p>";
      document.querySelector('#tweets').className = 'current';
    }
    else
    {
      document.querySelector('#list-of-tweets').innerHTML = '<p class="small">'+"Por favor, espere un momento ... "+"<progress></progress></p>";
      document.querySelector('#tweets').className = 'current';
      var twitterAccount = "MetropolitanoPT";
      
      /* This new code is based on 
       * https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
       * */
      var httpRequest;
      var url = 'http://mozilla.pe/labs/metropolitano.php'
      //makeRequest('http://mozilla.pe/labs/metropolitano.php');
      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } 
        catch (e) {
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } 
          catch (e) {}
        }
      }

      if (!httpRequest) {
        console.log('Giving up :( Cannot create an XMLHTTP instance');
        document.querySelector('#list-of-tweets').innerHTML = '<p class="small">'+"No se puede usar AJAX en este navegador."+"</p>";
        return false;
      }
      httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            var response = JSON.parse(httpRequest.responseText);
            //console.log(response);
            response_length = response.statuses.length;
              if (response_length > 0)
              {
                var htmltweets = "";
                var twitterAccount="MetropolitanoPT";
                htmltweets = "<ul>";
                for (var i=0; i < response_length; i++)
                { //console.log(response.statuses[i].text);
                  if (response.statuses[i].text.charAt(0)!=='@')
                  {
                    htmltweets += '<li><aside class="icon comms-icon contacts-twitter"></aside><p>'+response.statuses[i].user.screen_name+"</p>";
                    htmltweets += '<p class="small">'+makeLink(response.statuses[i].text)+"</p></li>";
                  }
                }
                htmltweets += "</ul>";
                document.querySelector('#list-of-tweets').innerHTML = htmltweets;
              }
          } else {
            console.log('There was a problem with the request.');
            document.querySelector('#list-of-tweets').innerHTML = '<p class="small">'+"Hubo un problema con la petición."+"</p>";
          }
        }
      };
      httpRequest.open('GET', url);
      httpRequest.send();
    }
  }

//E. Maps

(function(){
  window.Map = {
    /*init: function(station){
      var netStatus = navigator.onLine ? 'online': 'offline';
      var mapButton = document.getElementById('map-button');
      var mapEl = document.getElementById('map');

      if (netStatus === 'online') {
        var map = L.mapbox.map('map', 'examples.map-9ijuk24y');
        var that = this;

        mapButton.addEventListener('click',
                                    function(){
                                      that.showMap(mapEl);
                                      that.addMarker(station, map);
                                    }, false);
      } else {
        var message = 'You need internet connection to use maps';
        var content = document.createTextNode(message);
        var wrapper = document.getElementById('msg');
        mapButton.disabled = true;
        wrapper.appendChild(content);
      }
      mapEl.classList.add('off');
    },*/
    map: null,

    init: function(station, el){
      this.cleanMap();
      this.insertMapEl(el);
      var that = this;
      if (station instanceof Array) {
        setTimeout(function(){
          var stations = station;
          that.initMap();
          for(var i=0;i<stations.length; i++){
            that.addMarker(stations[i], that.map);
          };
        }, 2000);
      } else {
        setTimeout(function(){
          that.initMap();
          that.addMarker(station, that.map);
        }, 2000);
      }
    },

    initMap: function() {
      var mapEl = document.getElementById('map');
      this.map = L.mapbox.map('map', 'examples.map-9ijuk24y');
      this.showMap(mapEl);
    },

    cleanMap: function(){
      var map = document.getElementById('map');
      if (map !== (undefined || null )) {
        map.parentElement.removeChild(map);
      }
    },

    insertMapEl: function(el){
      var mapEl = document.createElement('div');
      var container = document.querySelector(el);
      mapEl.setAttribute('id', 'map');
      container.appendChild(mapEl);
    },

    addMarker: function(place, map){
      var lat = place.coordinatelat;
      var lng = place.coordinatelng;
      L.mapbox.markerLayer({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        properties: {
          title: place.name,
          address: place.address
        }
      }).addTo(map);
      map.setView([lat,lng], 15);
      map.invalidateSize(false);
    },

    showMap: function(el){
      if ( el.classList.contains('on') ){
        el.classList.remove('on');
      } else {
        el.classList.add('on');
      }
    },

    geoSuccess: function(position){
      var that = this;
      setTimeout(function(){
        var lat = position.coords.latitude,
            lng = position.coords.longitude;
        that.map.setView([lat, lng], 13);
        var marker = L.marker([lat, lng]).addTo(that.map);
      }, 3000);
    },

    geoError: function(){
      var that = this;
      setTimeout(function(){
        that.map.setView([-12.057756, -77.035983], 13);
      }, 3000);
    }
  }
})();
