var Concepts2Go = Concepts2Go || {};
Concepts2Go.Cms = Concepts2Go.Cms || {};

/*
TODO:
- make possible to use multiple maps on one single page
- 
*/

Concepts2Go.Cms.GoogleMaps = (function ($) {
    var _googleMaps = {};

    var _infowindow = new google.maps.InfoWindow({
        content: "Default"
    });

    var _directionsService = new google.maps.DirectionsService;
    var _directionsDisplay = new google.maps.DirectionsRenderer;
    var _nodeToString = function nodeToString(node) {
        var tmpNode = document.createElement("div");
        tmpNode.appendChild(node.cloneNode(true));
        var str = tmpNode.innerHTML;
        tmpNode = node = null; // prevent memory leaks in IE
        return str;
    }

    _googleMaps.googleMapsObject = null;
    _googleMaps.useMarkerClusterer = false;
    _googleMaps.markerClusterer = null;
    _googleMaps.customStyles = [];

    _googleMaps.destroyMap = function () {
        if (typeof _googleMaps.googleMapsObject !== "undefined") {
            _googleMaps.googleMapsObject = null;

            if (_googleMaps.useMarkerClusterer && _googleMaps.markerClusterer != null) {
                _googleMaps.markerClusterer.clearMarkers();
            }
        }
    };

    _googleMaps.createMap = function (mapOptions, elementId, markerClusterLocationUrl, markerIconUrl) {
        if (elementId == null) {
            elementId = "map";
        }

        var mapCanvas = document.getElementById(elementId);

        if (mapOptions == null) {
            mapOptions = {
                center: new google.maps.LatLng(52.0382262, 4.8914077),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                draggable: true,
                panControl: true,
                maxZoom: 13
            };
        }

        mapOptions.styles = _googleMaps.customStyles;

        _googleMaps.googleMapsObject = new google.maps.Map(mapCanvas, mapOptions);
        _directionsDisplay.setMap(_googleMaps.googleMapsObject);

        if (_googleMaps.useMarkerClusterer) {
            var options = {
                imagePath: markerClusterLocationUrl || '/App_SkinMaster/images/markerClusterer/m',
                maxZoom: 13
            };

            _googleMaps.markerClusterer = new MarkerClusterer(_googleMaps.googleMapsObject, [], options);

            google.maps.event.addListener(_googleMaps.markerClusterer, "clusterclick", function (cluster) {
                if (_googleMaps.googleMapsObject.getZoom() == _googleMaps.markerClusterer.getMaxZoom()) {
                    // when no zoom, show all markers in single popup
                    if (cluster.getMarkers().length > 0) {
                        var infoWindowContent = "";
                        $.each(cluster.getMarkers(), function (index, marker) {
                            infoWindowContent += _nodeToString(marker.html);
                        });

                        var infowindowCluster = new google.maps.InfoWindow({
                            position: cluster.getCenter()
                        });

                        infowindowCluster.setContent(infoWindowContent.toString());
                        infowindowCluster.open(_googleMaps.googleMapsObject);
                    }
                }
            });
        }
    }

    _googleMaps.InitMarker = function (element, title, latitude, longitude, inrange, markerIconUrl) {
        if (inrange == undefined) {
            inrange = true;
        }
        if (latitude != null && longitude != null && (inrange)) {

            var markerIconUrl = markerIconUrl || '/App_SkinMaster/images/googlemaps-marker.png';
            var position = new google.maps.LatLng(latitude, longitude);

            // todo: use different icons for different Expertises
            var marker = new google.maps.Marker({
                map: _googleMaps.googleMapsObject,
                position: position,
                icon: markerIconUrl,
                title: title,
                html: element,
                iconHover: markerIconUrl,
                iconDefault: markerIconUrl
            });

            //console.log([title, latitude, longitude, inrange]);

            google.maps.event.addListener(marker, 'click', function () {
                _infowindow.setContent(this.html);
                _infowindow.open(_googleMaps.googleMapsObject, this);
            });
            google.maps.event.addListener(marker, 'mouseover', function () {
                this.setIcon(this.iconHover);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
                this.setIcon(this.iconDefault);
            });

            marker.setMap(_googleMaps.googleMapsObject);

            if (_googleMaps.useMarkerClusterer) {

                _googleMaps.markerClusterer.addMarker(marker);
            }

            element._mapMarker = marker;
        }
        else {
            // TODO: fallback
        }
    };

    _googleMaps.addMarkers = function (markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            marker.setMap(_googleMaps.googleMapsObject);
            google.maps.event.addListener(marker, 'click', function () {
                _infowindow.setContent(this.html);
                _infowindow.open(_googleMaps.googleMapsObject, this);
            });
            google.maps.event.addListener(marker, 'mouseover', function () {
                this.setIcon(this.iconHover);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
                this.setIcon(this.iconDefault);
            });

            if (_googleMaps.useMarkerClusterer) {
                _googleMaps.markerClusterer.addMarker(marker);
            }
        }
    };

    _googleMaps.calculateAndDisplayRoute = function (destinationLatLng, userLocation, delegateRenderRouteData, travelmode) {
        if (travelmode == undefined) {
            travelmode = google.maps.TravelMode.DRIVING;
        }

        _directionsService.route({
            origin: userLocation,
            destination: destinationLatLng,
            travelMode: travelmode
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _directionsDisplay.setDirections(response);

                delegateRenderRouteData(response.routes[0].legs[0].distance.text, response.routes[0].legs[0].duration.text);

            }
            else {
                console.log('Directions request failed due to ' + status);
            }
        });
    }

    return _googleMaps;
}($));