// Initialize and add the map
function initMap() {
    var drawing_flag = true;
    var mapProp = {
        center: new google.maps.LatLng(41.25808, -96.08271),
        zoom: 4,
        gestureHandling: 'greedy',
        mapTypeId: 'roadmap',
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var drawingObjects = [];
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['marker', 'circle', 'polyline']
            },
            markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' },
            circleOptions: {
                fillColor: '#333',
                fillOpacity: .3,
                strokeWeight: 2,
                clickable: true,
                editable: true,
                zIndex: 1
            },
            polylineOptions: {
                fillColor: '#fff',
                fillOpacity: .3,
                StrokeColor: '#fff',
                StrokeOpacity: .3,
                strokeWeight: 2,
                clickable: true,
                editable: true,
                zIndex: 1
            }
        });                                              
    //drawing click event
    drawObjects_Click = function () {
        if (drawing_flag) {
            drawing_flag = false;
            drawingManager.setMap(map);
        } else {
            drawing_flag = true;
            //for (var i = 0; i < ctrl.drawingObjects.length; i++) {
            //            ctrl.drawingObjects[i].setMap(null);
            //}
            //ctrl.drawingObjects = [];
            drawingManager.setMap(null);
        }
    }
    addMarker_Click = function (markernumber) {
        var client = new HttpClient();
        console.log("here I am daddy!");
        client.get('http://localhost:8080/mapmarker/1', function(response) {
            console.log(response)
        });
    }
}
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
















