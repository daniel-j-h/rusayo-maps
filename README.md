# Missing Maps

This is an experiment for the Missing Maps folks to put the Rusayo Camps on the map.

## How It Works

The main idea is to self-host an interactive map of mostly static data and everything around it: to democratize map making.
We use this repository's Github Pages as a static file host but any static file host will do that can serve files via HTTP.

We host the following files
- The [Protomaps](https://protomaps.com) vector tile `.pmtiles` files contain geographic vector data e.g. building outlines
- The `index.html` contains the web site and renders the vector data with [Maplibre](https://maplibre.org) e.g. to style buildings in gray
- The `.pbf` files are map fonts encoded in signed distance field format (SDF) for the map to display text using the Noto fonts
- The `.woff2` files are web fonts used in the `index.html` web site matching the Noto fonts used by the map

For an overview and a deep dive I recommend reading through the following two articles, respectively
- [Maplibre + Protomaps: now's the time to get involved!](https://www.openstreetmap.org/user/daniel-j-h/diary/402706)
- [Everything You Wanted to Know About Vector Tiles (But Were Afraid to Ask)](https://www.openstreetmap.org/user/daniel-j-h/diary/404061)


## How to reproduce

The following tries to summarize the thinking process behind creating this self-hosted map project.
It's created from various bits and pieces which are all documented quite well on their own, but a bigger picture of how it all fits together is often missing; below we try to provide that overview.

### Create a base map

To visualize building outlines from OpenStreetMap we need a base map to put them on: think a map with place names, country borders, and more for the area we are interested in.

There are various ways to generate a base map
1. We can generate a base map from OpenStreetMap using [tilemaker](https://github.com/systemed/tilemaker) or [planetiler](https://github.com/onthegomap/planetiler) on an `.osm.pbf` OpenStreetMap snapshot e.g. from [Geofabrik](https://download.geofabrik.de). This will allow us to decide what data goes into the base map and therefore into the vector tiles we want to style later on. The downside is that it's quite an effort to run this out.
2. The Protomaps folks are creating a global base map from OpenStreetMap data on a daily basis and are bundling vector tile data up in a single `.pmtiles` file. We can use their pmtiles extract command line utility to download a basemap for the area we are interested in.

To download a `.pmtiles` base map for an area we are interested in go to [geojson.io](https://geojson.io), draw a region polygon, and save it as `basemap.geojson`

Use the `pmtiles extract` command line utility installed from [here](https://github.com/protomaps/go-pmtiles) or use the following command to run it from a docker image

    docker run -it --rm --pull=always -e TMPDIR=/d/out -v $(pwd):/d ghcr.io/protomaps/go-pmtiles:main extract https://build.protomaps.com/20240701.pmtiles /d/basemap.pmtiles --region /d/basemap.geojson --minzoom 11

This will download the base map vector tile data and save it as `basemap.pmtiles` file.
Read the `pmtiles extract` documentation [here](https://github.com/protomaps/go-pmtiles?tab=readme-ov-file#create-a-pmtiles-archive-from-a-larger-one) for more options.

We can visualize this `basemap.pmtiles` file using
- Maplibre and the Protomaps protocol in an `index.html`
- One of the base map themes from https://github.com/protomaps/basemaps to style the vector tile data e.g. the "white" style, and
- The map fonts from https://github.com/protomaps/basemaps-assets to make sure the map can render text such as place names

To make Maplibre understand `.pmtiles` vector tile files add

```javascript
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
```

To add the base map vector tile data to a Maplibre map add

```javascript
sources: {
  basemap: {
    type: "vector",
    url: "pmtiles://basemap.pmtiles",
    attribution: "© <a href='https://openstreetmap.org'>OpenStreetMap</a>",
  }
}
```
To style the base map vector tile data add with the "white" base map theme add

```javascript
layers: protomaps_themes_base.default("basemap", "white"),
```

To point Maplibre to the Noto signed distance field (SDF) Noto font `.pbf` files for text rendering add

```javascript
style: {
  glyphs: "assets/sdf/{fontstack}/{range}.pbf",
}
```


### Create use case tiles

Visualizing the base map we notice very small buildings not showing up.
The Protomaps base map is meant as a high-level overview map and does not include very small structures such as buildings below a certain area threshold.

For our custom use case of visualizing the latest buildings from OpenStreetMap we can do the following
1. Extract the latest building outlines from OpenStreetMap
2. Create a second `.pmtiles` file containing building outline vector data
3. Add that data to the map and style it accodringly on top of the base map

To extract building outlines from OpenStreetMap we have two options
1. Use the `osmium extract` tool to extract all buildings from an OpenStreetMap snapshot and then use `tippecanoe` to turn those building outlines into a `.pmtiles` file, or
2. Use e.g. `tilemaker` on an OpenStreetMap snapshot to create a `.pmtiles` file

To get to an OpenStreetMap snapshot with the latest buildings, download a small `.osm.pbf` file from [Geofabrik](http://download.geofabrik.de) either manually or with `curl`

```bash
curl --proto '=https' --tlsv1.3 -sSfO https://download.geofabrik.de/africa/congo-democratic-republic-latest.osm.pbf
```

We can cut out the small area we are interested in using `osmium extract` from the [osmium tools](https://osmcode.org/osmium-tool/)

    osmium extract -p basemap.geojson congo-democratic-republic-latest.osm.pbf -o basemap.osm.pbf --set-bounds

To extract all buildings we can use `osmium tags-filter` and filter all ways ("w") with tag "building=yes"

    osmium tags-filter -o geom.osm.pbf basemap.osm.pbf w/building=yes

To generate vector tiles in `.pmtiles` format from the small area of buildings we can use [tippecanoe](https://github.com/felt/tippecanoe)

    osmium export geom.osm.pbf -f geojsonseq | tippecanoe -o buildings.pmtiles -f

To debug the `.pmtiles` files we can drop the them into the [Protomaps PMTiles viewer for debugging](https://protomaps.github.io/PMTiles/)

Add this second `.pmtiles` vector tile data source to the map as with the base map above and style it accordingly.

Note: the base map already comes with building data and the base map theme comes with a layer styling them; that's why it's better to remove the high-level buildings layer that comes with the base map and only show the buildings layer we just created

```javascript
map.on("load", function() {
  map.removeLayer("buildings");

  // ...
}
```


### Styling and Interactivity

With a base map and a use case (i.e. building) data source, we can style the map data and bring in interactivity e.g. flying to locations.

The following documentation helps
1. https://maplibre.org/maplibre-style-spec/sources/ for data sources such as Vector or GeoJSON data sources
2. https://maplibre.org/maplibre-style-spec/layers/ for styling data and the concept of layers, a bit similar to CSS
3. https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/ the map's Javascript API e.g. to `map.flyTo` locations
4. https://maplibre.org/maplibre-gl-js/docs/examples/ Examples for inspiration and code snippets to get started


## Summary

Data
1. [Geofabrik](https://download.geofabrik.de) provides OpenStreetMap snapshots in `.osm.pbf` format
2. [protomaps/basemaps-assets](https://github.com/protomaps/basemaps-assets) provides Noto map fonts ready to use

Tools
1. [`osmium extract`](https://docs.osmcode.org/osmium/latest/osmium-extract.html) works on OpenStreetMap snapshot `.osm.pbf` files to cut out smaller areas
2. [`osmium tags-filter`](https://docs.osmcode.org/osmium/latest/osmium-tags-filter.html) works on OpenStreetMap snapshot `.osm.pbf` files to filter for specific tags
3. [`tippecanoe`](https://github.com/felt/tippecanoe) works on vector data e.g. in GeoJSON or `.osm.pbf` format to create Protomaps vector tiles `.pmtiles` files
