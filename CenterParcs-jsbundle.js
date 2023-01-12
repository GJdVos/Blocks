    (function (n, t, i) {
        function u(t, i) {
            this.element = t;
            this.options = n.extend({}, f, i);
            this._defaults = f;
            this._name = r;
            this._geocoder = null;
            this.init();
        }
        var r = "GetGeoLocation",
            f = { dxControl: null, apikey: "" };
        u.prototype = {
            init: function () {
                var t = this,
                    n;
                typeof google == "undefined"
                    ? ((n = i.createElement("script")),
                      n.setAttribute("src", "https://maps.googleapis.com/maps/api/js" + (t.options.apikey != "" ? "?key=" + t.options.apikey : "")),
                      (n.onload = function () {
                          t._geocoder = new google.maps.Geocoder();
                      }),
                      i.head.appendChild(n))
                    : (this._geocoder = new google.maps.Geocoder());
            },
            get: function () {
                var t = this,
                    i = n(t.element).val();
                this._geocoder.geocode({ address: i }, function (n, i) {
                    if (i === "OK") {
                        var r = n[0].geometry.location.lat(),
                            u = n[0].geometry.location.lng();
                        t.options.dxControl.SetValue(r + ";" + u);
                    }
                });
            },
        };
        n.fn[r] = function (t) {
            return this.each(function () {
                n.data(this, "plugin_" + r) ? typeof t == "string" && n.data(this, "plugin_" + r)[t]() : n.data(this, "plugin_" + r, new u(this, t));
            });
        };
    })(jQuery, window, document),

    (function (n, t, i) {
        "use strict";
        t.renderRouteData = function (t, i) {
            n(".directionsDistance").text(t);
            n(".directionsDuration").text(i);
        };
        t.createDirectionsFromAddress = function (t) {
            var i = n(t).data("itemid"),
                u = n(t).data("travelmode"),
                r = n("#{0} .formInput input".replace("{0}", i)).val(),
                f;
            r.length > 0 &&
                (r.indexOf(",") == -1 && (r += ", Nederland"),
                typeof ga != "undefined" && ga("send", "event", "GoogleMaps", "GetDirections", "ByAddress"),
                n("#{0} .formButtons".replace("{0}", i)).children().removeClass("active"),
                n("#{0} .formButtons".replace("{0}", i))
                    .find('[data-travelmode="' + u + '"]')
                    .addClass("active"),
                (f = new google.maps.LatLng(n(t).data("latitude").replace(",", "."), n(t).data("longitude").replace(",", "."))),
                Concepts2Go.Cms.GoogleMaps.calculateAndDisplayRoute(f, r, renderRouteData, u),
                setRouteInfo(t, i));
        };
        t.setRouteInfo = function (t, i) {
            var r = n(t).data("translation"),
                u = n(".directions .travelmodeDistance").data("text");
            n(".directions .travelmodeDistance").html(u + " " + r);
            n("#{0} .directions .routeInfo".replace("{0}", i)).show();
        };
    })(jQuery, window, document);