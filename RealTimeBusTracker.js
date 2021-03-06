mapboxgl.accessToken =
        "pk.eyJ1IjoibXBnaXM4OCIsImEiOiJja3licnh0Y3IwaWJxMnZta2V6cGFhMWFrIn0.dUOaM33YKdx7Is2OkQGXLA";

      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mpgis88/ckycd00e31yit14o47dmeubl2",
        center: [-71.104081, 42.365554],
        zoom: 14,
      });

      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-71.093729, 42.359244],
            },
            properties: {
              title: "Mapbox",
              description: "First Stop to MIT.",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-71.118625, 42.374863],
            },
            properties: {
              title: "Mapbox",
              description: "Last Stop to Harvard",
            },
          },
        ],
      };

      var marker = new mapboxgl.Marker()
        .setLngLat([-71.104081, 42.365554])
        .addTo(map);

      const busStops = [
        [-71.093729, 42.359244],
        [-71.094915, 42.360175],
        [-71.0958, 42.360698],
        [-71.099558, 42.362953],
        [-71.103476, 42.365248],
        [-71.106067, 42.366806],
        [-71.108717, 42.368355],
        [-71.110799, 42.369192],
        [-71.113095, 42.370218],
        [-71.115476, 42.372085],
        [-71.117585, 42.373016],
        [-71.118625, 42.374863],
      ];

      var counter = 0;
      function move() {
        setTimeout(() => {
          if (counter >= busStops.length) return;
          marker.setLngLat(busStops[counter]);
          counter++;
          move();
        }, 3000);
      }
      // add markers to map
      for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(feature.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`)
          )
          .addTo(map);
      };
