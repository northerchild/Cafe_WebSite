/*Map API*/
var api = "AIzaSyDqOGk74hJwr_haDR31WjrDobRzB3kDxJo";     

    function initMap() {
    	var latLgn= {
    		lat:4.5877907,
    		lng:-74.1221328
    	};

  
        var map = new google.maps.Map(document.getElementById('mapa'), {
          "center":latLgn ,
          "zoom": 16,
          "mapTypeId": google.maps.MapTypeId.ROADMAP
        });

        var contenido = "<h2>Bienvenidos todos al Northerchild Cafe</h2>";

        var informacion = new google.maps.InfoWindow
        ({
        	content: contenido
        });

      	var marker = new google.maps.Marker
        ({
        	position:latLgn,
        	map: map,
        	title: "Northerchild Cafe"
        });

        marker.addListener("click",function()
        {
        	informacion.open(map, marker);
        })
      }
      