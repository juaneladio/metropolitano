(function(){
  window.Map = {
    init: function(station){
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
    }
  }
})();
