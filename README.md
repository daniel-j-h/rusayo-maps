# Missing Maps

This is an experiment for the Missing Maps folks to put the Rusayo Camps on the map.

Todo: writeup on how this works top to bottom.

### Resources
- https://osmcode.org/osmium-tool/
- https://github.com/systemed/tilemaker
- https://github.com/felt/tippecanoe
- https://github.com/protomaps/go-pmtiles
- https://github.com/protomaps/PMTiles
- https://github.com/protomaps/basemaps
- https://github.com/protomaps/basemaps-assets
- https://github.com/maplibre/maplibre-gl-js


### Notes

Get an OpenStreetMap snapshot

    curl --proto '=https' --tlsv1.3 -sSfO https://download.geofabrik.de/africa/congo-democratic-republic-latest.osm.pbf

Cut out the small area we are interested in

    osmium extract -p basemap.geojson congo-democratic-republic-latest.osm.pbf -o basemap.pbf --set-bounds

Either use tilemaker or planetiler to generate tiles

    docker run -it --rm --pull always -v $(pwd):/d ghcr.io/systemed/tilemaker:master /d/basemap.pbf --output /d/basemap.pmtiles --config /d/tilemaker-config.json --process /d/tilemaker-process.lua

or if it's a simple use case such as buildings, we can use osmium tags-filter and tippecanoe

    osmium tags-filter -o geom.osm.pbf utah.osm.pbf w/building=yes
    osmium export geom.osm.pbf -f geojsonseq | tippecanoe -o buildings.pmtiles -f

Get a basemap to visualize the buildings on

    docker run -it --rm --pull=always -e TMPDIR=/d/out -v $(pwd):/d ghcr.io/protomaps/go-pmtiles:main extract https://build.protomaps.com/20240701.pmtiles /d/basemap.pmtiles --region /d/basemap.geojson --minzoom 11
