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
  //stationsindirection
  document.querySelector('#btn-stationsindirection-back').addEventListener ('click', function () {
    this.className = 'fade-out';
//    document.querySelector('#stationsindirection').className = 'right';
//    document.querySelector('station').className = 'current';
  });
    
// C. General functions

  function makeLink(text) // this REGEX converts http(s) links that are embedded in the tweet text into real hyperlinks.
  {  
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;  
    return text.replace(exp,"<a href='$1' target='_blank'>$1</a>");
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
    var htmlstations = "<ul>";
    var numberstations = applicationData.stations.length;
    for (var i=0; i<numberstations; i++)
    {
      htmlstations += "<li><a href='javascript:showstation("+i+")'>";
      htmlstations += '<aside class="icon comms-icon contacts-location"></aside>';
      htmlstations += "<p>"+applicationData.stations[i].name+"</p></a></li>";
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
      htmlstations += '* '+applicationData.stations[stationIterated].name+"<br>";
      else
      htmlstations += '-'+applicationData.stations[stationIterated].name+"<br>";
    }
    htmlstations += '</p>';
    document.querySelector('#list-of-stationsindirection').innerHTML = htmlstations;
    document.querySelector('#stationsindirection').className = 'fade-in';
	}
  
  function showstation(stationselected)
  {
    // a. Show stations details
    var htmlstation = "";
    htmlstation += '<ul><li><aside class="icon comms-icon contacts-location"></aside>';
    htmlstation += "<p>"+applicationData.stations[stationselected].name+"</p>";
    htmlstation += "<p>"+applicationData.stations[stationselected].address+"</p>";
    htmlstation += "</li>";
    if (stationselected == localStorage.getItem("myfavoritestations"))
      htmlstation += '<div id="favoritebutton"><a role="button" href="javascript:removefavoritestation('+stationselected+',applicationData)">'+"Dejar de ser favorita"+"</a></div>";
    else
      htmlstation += '<div id="favoritebutton"><a role="button" href="javascript:addfavoritestation('+stationselected+',applicationData)">'+"Fijar como favorita"+"</a></div>";
    htmlstation += "</ul>";
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
      htmlstation += "<header>"+"Rutas disponibles hoy "+dayname+"</header><ul>";
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
  }
  
  function addfavoritestation(stationselected,applicationData)
  {
    localStorage.setItem("myfavoritestations",stationselected);
    if ("mozNotification" in navigator)
    { // FirefoxOS
      var notification = navigator.mozNotification.createNotification(
        "Metropolitano de Lima",
        "Nueva estación favorita"
        );
      notification.onshow = function () { setTimeout(notification.close(), 1000); }
                    notification.show();
    }
    else
    if ("Notification" in navigator)
    { // Firefox +22
      var n = new Notification("Metropolitano de Lima",{body:"Nueva estación favorita"});
    }
    else
    { // Other browsers: do nothing
    }
    var htmlbutton = '<a role="button" href="javascript:removefavoritestation('+stationselected+',applicationData)">'+"Dejar de ser favorita"+"</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
  }
  
  function removefavoritestation(stationselected,applicationData)
  {
    localStorage.removeItem("myfavoritestations");
    var htmlbutton = '<a role="button" href="javascript:addfavoritestation('+stationselected+',applicationData)">'+"Fijar como favorita"+"</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
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
  
  function showfavoritestations()
  { 
    var favoritestation = localStorage.getItem("myfavoritestations");
    var htmlfavoritestations = "";
    if (favoritestation)
    { htmlfavoritestations = "<ul>";
      htmlfavoritestations += '<li><a href="javascript:showstation('+favoritestation+')">';
      htmlfavoritestations += '<aside class="icon comms-icon contacts-location"></aside>';
      htmlfavoritestations += "<p>"+applicationData.stations[favoritestation].name+"</p></a></li>";
      htmlfavoritestations += "</ul>";
      htmlfavoritestations += '<a role="button" class="danger" href="javascript:removeallfavorites()">'+"Dejar de ser favorita"+"</a>";
    }
    else
    {
      htmlfavoritestations = '<p class="small">'+"No hay estación favorita."+"</p>";
    }
    document.querySelector('#list-of-favorite-stations').innerHTML = htmlfavoritestations;
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
      document.querySelector('#list-of-tweets').innerHTML = '<p class="small">'+"Usted no está conectado a Internet."+"</p>";
      document.querySelector('#tweets').className = 'current';
    }
    else
    {
      document.querySelector('#list-of-nearest-stations').innerHTML = '<p class="small">'+"Por favor, espere un momento ... "+"<progress></progress></p>";
      document.querySelector('#nearest-stations').className = 'current';
      if ("geolocation" in navigator)
      {
        var options = {
          /*enableHighAccuracy: true,
          timeout: 15000, //15 sec
          maximumAge: 0*/
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
              neareststation = i;
            }
          }
          var htmlneareststations = "";
          if (neareststation)
          { htmlneareststations = "<ul>";
            htmlneareststations += '<li><a href="javascript:showstation('+neareststation+')">';
            htmlneareststations += '<aside class="icon comms-icon contacts-location"></aside>';
            htmlneareststations += "<p>"+applicationData.stations[neareststation].name+"</p><p>"+min_distance +"Km aprox."+"</p></a></li>";
            htmlneareststations += "</ul>";
          }
          else
          {
            htmlneareststations = "<ul><li><p>"+"No se puede determinar estación cercana."+"</p></li></ul>";
          }
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
        };
        function error(err)
        {
          //console.warn('ERROR(' + err.code + '): ' + err.message);
          var htmlneareststations = '<p class="small">'+"Lo sentimos, no se pudo determinar su ubicación."+"</p>";
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
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
      var cb = new Codebird;
      cb.setConsumerKey("SARefZOgzpapJ53OkZVw", "TskSVBlbiwC8YAoE5A8eCl95uSJug0GISQKvFBbC88I");
      cb.__call(
        "search_tweets",
        "q=from:"+twitterAccount,
        function (reply)
        { //console.log(reply);
          // If there are answers
          reply_length = reply.statuses.length;
          if (reply_length > 0)
          {
            var htmltweets = "";
            htmltweets = "<ul>";
            for (var i=0; i < reply_length; i++)
            { //console.log(reply.statuses[i].text);
              if (reply.statuses[i].text.charAt(0)!=='@')
              {
                htmltweets += '<li><aside class="icon comms-icon contacts-twitter"></aside><p>'+twitterAccount+"</p>";
                htmltweets += '<p class="small">'+makeLink(reply.statuses[i].text)+"</p></a></li>";
              }
            }
            htmltweets += "</ul>";
            document.querySelector('#list-of-tweets').innerHTML = htmltweets;
          }
        },
        true // this parameter is required by Codebird
      );
    }
  }
  
