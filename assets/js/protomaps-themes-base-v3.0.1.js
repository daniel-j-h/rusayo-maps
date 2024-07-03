"use strict";
var protomaps_themes_base = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default,
    labels: () => labels,
    labelsWithCustomTheme: () => labelsWithCustomTheme,
    layersWithCustomTheme: () => layersWithCustomTheme,
    layersWithPartialCustomTheme: () => layersWithPartialCustomTheme,
    noLabels: () => noLabels,
    noLabelsWithCustomTheme: () => noLabelsWithCustomTheme
  });

  // src/base_layers.ts
  function nolabels_layers(source, t) {
    return [
      {
        id: "background",
        type: "background",
        paint: {
          "background-color": t.background
        }
      },
      {
        id: "earth",
        type: "fill",
        source,
        "source-layer": "earth",
        paint: {
          "fill-color": t.earth
        }
      },
      {
        id: "landuse_park",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: [
          "any",
          [
            "in",
            "pmap:kind",
            "national_park",
            "park",
            "cemetery",
            "protected_area",
            "nature_reserve",
            "forest",
            "golf_course"
          ]
        ],
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            t.park_a,
            12,
            t.park_b
          ]
        }
      },
      {
        id: "landuse_urban_green",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: [
          "any",
          ["in", "pmap:kind", "allotments", "village_green", "playground"]
        ],
        paint: {
          "fill-color": t.park_b,
          "fill-opacity": 0.7
        }
      },
      {
        id: "landuse_hospital",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["==", "pmap:kind", "hospital"]],
        paint: {
          "fill-color": t.hospital
        }
      },
      {
        id: "landuse_industrial",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["==", "pmap:kind", "industrial"]],
        paint: {
          "fill-color": t.industrial
        }
      },
      {
        id: "landuse_school",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["in", "pmap:kind", "school", "university", "college"]],
        paint: {
          "fill-color": t.school
        }
      },
      {
        id: "landuse_beach",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["in", "pmap:kind", "beach"]],
        paint: {
          "fill-color": t.beach
        }
      },
      {
        id: "landuse_zoo",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["in", "pmap:kind", "zoo"]],
        paint: {
          "fill-color": t.zoo
        }
      },
      {
        id: "landuse_military",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: [
          "any",
          ["in", "pmap:kind", "military", "naval_base", "airfield"]
        ],
        paint: {
          "fill-color": t.zoo
        }
      },
      {
        id: "natural_wood",
        type: "fill",
        source,
        "source-layer": "natural",
        filter: ["any", ["in", "pmap:kind", "wood", "nature_reserve", "forest"]],
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            t.wood_a,
            12,
            t.wood_b
          ]
        }
      },
      {
        id: "natural_scrub",
        type: "fill",
        source,
        "source-layer": "natural",
        filter: ["in", "pmap:kind", "scrub", "grassland", "grass"],
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            t.scrub_a,
            12,
            t.scrub_b
          ]
        }
      },
      {
        id: "natural_glacier",
        type: "fill",
        source,
        "source-layer": "natural",
        filter: ["==", "pmap:kind", "glacier"],
        paint: {
          "fill-color": t.glacier
        }
      },
      {
        id: "natural_sand",
        type: "fill",
        source,
        "source-layer": "natural",
        filter: ["==", "pmap:kind", "sand"],
        paint: {
          "fill-color": t.sand
        }
      },
      {
        id: "landuse_aerodrome",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["in", "pmap:kind", "aerodrome"]],
        paint: {
          "fill-color": t.aerodrome
        }
      },
      {
        id: "transit_runway",
        type: "line",
        source,
        "source-layer": "transit",
        filter: ["any", ["in", "pmap:kind_detail", "runway"]],
        paint: {
          "line-color": t.runway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            10,
            0,
            12,
            4,
            18,
            30
          ]
        }
      },
      {
        id: "transit_taxiway",
        type: "line",
        source,
        "source-layer": "transit",
        minzoom: 13,
        filter: ["any", ["in", "pmap:kind_detail", "taxiway"]],
        paint: {
          "line-color": t.runway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            15,
            6
          ]
        }
      },
      {
        id: "water",
        type: "fill",
        source,
        "source-layer": "water",
        paint: {
          "fill-color": t.water
        }
      },
      {
        id: "physical_line_stream",
        type: "line",
        source,
        "source-layer": "physical_line",
        minzoom: 14,
        filter: ["all", ["in", "pmap:kind", "stream"]],
        paint: {
          "line-color": t.water,
          "line-width": 0.5
        }
      },
      {
        id: "physical_line_river",
        type: "line",
        source,
        "source-layer": "physical_line",
        minzoom: 9,
        filter: ["all", ["in", "pmap:kind", "river"]],
        paint: {
          "line-color": t.water,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            9,
            0,
            9.5,
            1,
            18,
            12
          ]
        }
      },
      {
        id: "landuse_pedestrian",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["==", "pmap:kind", "pedestrian"]],
        paint: {
          "fill-color": t.pedestrian
        }
      },
      {
        id: "landuse_pier",
        type: "fill",
        source,
        "source-layer": "landuse",
        filter: ["any", ["==", "pmap:kind", "pier"]],
        paint: {
          "fill-color": t.pier
        }
      },
      {
        id: "roads_tunnels_other_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["in", "pmap:kind", "other", "path"]
        ],
        paint: {
          "line-color": t.tunnel_other_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7
          ]
        }
      },
      {
        id: "roads_tunnels_minor_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"]
        ],
        paint: {
          "line-color": t.tunnel_minor_casing,
          "line-dasharray": [3, 2],
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            12,
            0,
            12.5,
            1
          ]
        }
      },
      {
        id: "roads_tunnels_link_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: ["all", ["<", "pmap:level", 0], ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.tunnel_link_casing,
          "line-dasharray": [3, 2],
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            12,
            0,
            12.5,
            1
          ]
        }
      },
      {
        id: "roads_tunnels_medium_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.tunnel_medium_casing,
          "line-dasharray": [3, 2],
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            0.5,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            10,
            0,
            10.5,
            1
          ]
        }
      },
      {
        id: "roads_tunnels_major_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.tunnel_major_casing,
          "line-dasharray": [3, 2],
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            0.5,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            9,
            0,
            9.5,
            1
          ]
        }
      },
      {
        id: "roads_tunnels_highway_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.tunnel_highway_casing,
          "line-dasharray": [6, 0.5],
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            3.5,
            0.5,
            18,
            15
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            1,
            20,
            15
          ]
        }
      },
      {
        id: "roads_tunnels_other",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["in", "pmap:kind", "other", "path"]
        ],
        paint: {
          "line-color": t.tunnel_other,
          "line-dasharray": [4.5, 0.5],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7
          ]
        }
      },
      {
        id: "roads_tunnels_minor",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"]
        ],
        paint: {
          "line-color": t.tunnel_minor,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ]
        }
      },
      {
        id: "roads_tunnels_link",
        type: "line",
        source,
        "source-layer": "roads",
        filter: ["all", ["<", "pmap:level", 0], ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.tunnel_minor,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ]
        }
      },
      {
        id: "roads_tunnels_medium",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.tunnel_medium,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_tunnels_major",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.tunnel_major,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            6,
            0,
            12,
            1.6,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_tunnels_highway",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["<", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.tunnel_highway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            6,
            1.1,
            12,
            1.6,
            15,
            5,
            18,
            15
          ]
        }
      },
      {
        id: "buildings",
        type: "fill",
        source,
        "source-layer": "buildings",
        paint: {
          "fill-color": t.buildings,
          "fill-opacity": 0.5
        }
      },
      {
        id: "transit_pier",
        type: "line",
        source,
        "source-layer": "transit",
        filter: ["any", ["==", "pmap:kind", "pier"]],
        paint: {
          "line-color": t.transit_pier,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            12,
            0,
            12.5,
            0.5,
            20,
            16
          ]
        }
      },
      {
        id: "roads_minor_service_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 13,
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"],
          ["==", "pmap:kind_detail", "service"]
        ],
        paint: {
          "line-color": t.minor_service_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            18,
            8
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            0.8
          ]
        }
      },
      {
        id: "roads_minor_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"],
          ["!=", "pmap:kind_detail", "service"]
        ],
        paint: {
          "line-color": t.minor_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            12,
            0,
            12.5,
            1
          ]
        }
      },
      {
        id: "roads_link_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 13,
        filter: ["all", ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.minor_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1.5
          ]
        }
      },
      {
        id: "roads_medium_casing",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.medium_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            10,
            0,
            10.5,
            1.5
          ]
        }
      },
      {
        id: "roads_major_casing_late",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.major_casing_late,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            6,
            0,
            12,
            1.6,
            15,
            3,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            9,
            0,
            9.5,
            1
          ]
        }
      },
      {
        id: "roads_highway_casing_late",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.highway_casing_late,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            3.5,
            0.5,
            18,
            15
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            1,
            20,
            15
          ]
        }
      },
      {
        id: "roads_other",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["in", "pmap:kind", "other", "path"]
        ],
        paint: {
          "line-color": t.other,
          "line-dasharray": [3, 1],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7
          ]
        }
      },
      {
        id: "roads_link",
        type: "line",
        source,
        "source-layer": "roads",
        filter: ["all", ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.link,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ]
        }
      },
      {
        id: "roads_minor_service",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"],
          ["==", "pmap:kind_detail", "service"]
        ],
        paint: {
          "line-color": t.minor_service,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            18,
            8
          ]
        }
      },
      {
        id: "roads_minor",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"],
          ["!=", "pmap:kind_detail", "service"]
        ],
        paint: {
          "line-color": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            t.minor_a,
            16,
            t.minor_b
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ]
        }
      },
      {
        id: "roads_medium",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.medium,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_major_casing_early",
        type: "line",
        source,
        "source-layer": "roads",
        maxzoom: 12,
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.major_casing_early,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            0.5,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            9,
            0,
            9.5,
            1
          ]
        }
      },
      {
        id: "roads_major",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.major,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            6,
            0,
            12,
            1.6,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_highway_casing_early",
        type: "line",
        source,
        "source-layer": "roads",
        maxzoom: 12,
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.highway_casing_early,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            3.5,
            0.5,
            18,
            15
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            1
          ]
        }
      },
      {
        id: "roads_highway",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.highway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            6,
            1.1,
            12,
            1.6,
            15,
            5,
            18,
            15
          ]
        }
      },
      {
        id: "transit_railway",
        type: "line",
        source,
        "source-layer": "transit",
        filter: ["all", ["==", "pmap:kind", "rail"]],
        paint: {
          "line-dasharray": [0.3, 0.75],
          "line-opacity": 0.5,
          "line-color": t.railway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            6,
            0.15,
            18,
            9
          ]
        }
      },
      {
        id: "boundaries_country",
        type: "line",
        source,
        "source-layer": "boundaries",
        filter: ["<=", "pmap:min_admin_level", 2],
        paint: {
          "line-color": t.boundaries,
          "line-width": 1,
          "line-dasharray": [3, 2]
        }
      },
      {
        id: "boundaries",
        type: "line",
        source,
        "source-layer": "boundaries",
        filter: [">", "pmap:min_admin_level", 2],
        paint: {
          "line-color": t.boundaries,
          "line-width": 0.5,
          "line-dasharray": [3, 2]
        }
      },
      {
        id: "roads_bridges_other_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["in", "pmap:kind", "other", "path"]
        ],
        paint: {
          "line-color": t.bridges_other_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7
          ]
        }
      },
      {
        id: "roads_bridges_link_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: ["all", [">", "pmap:level", 0], ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.bridges_minor_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            12,
            0,
            12.5,
            1.5
          ]
        }
      },
      {
        id: "roads_bridges_minor_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"]
        ],
        paint: {
          "line-color": t.bridges_minor_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            0.8
          ]
        }
      },
      {
        id: "roads_bridges_medium_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.bridges_medium_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            10,
            0,
            10.5,
            1.5
          ]
        }
      },
      {
        id: "roads_bridges_major_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.bridges_major_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            0.5,
            18,
            10
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            9,
            0,
            9.5,
            1.5
          ]
        }
      },
      {
        id: "roads_bridges_other",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["in", "pmap:kind", "other", "path"]
        ],
        paint: {
          "line-color": t.bridges_other,
          "line-dasharray": [2, 1],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7
          ]
        }
      },
      {
        id: "roads_bridges_minor",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "minor_road"]
        ],
        paint: {
          "line-color": t.bridges_minor,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11
          ]
        }
      },
      {
        id: "roads_bridges_link",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: ["all", [">", "pmap:level", 0], ["==", "pmap:link", 1]],
        paint: {
          "line-color": t.bridges_minor,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11
          ]
        }
      },
      {
        id: "roads_bridges_medium",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "medium_road"]
        ],
        paint: {
          "line-color": t.bridges_medium,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_bridges_major",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "major_road"]
        ],
        paint: {
          "line-color": t.bridges_major,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            6,
            0,
            12,
            1.6,
            15,
            3,
            18,
            13
          ]
        }
      },
      {
        id: "roads_bridges_highway_casing",
        type: "line",
        source,
        "source-layer": "roads",
        minzoom: 12,
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.bridges_highway_casing,
          "line-gap-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            3.5,
            0.5,
            18,
            15
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            7.5,
            1,
            20,
            15
          ]
        }
      },
      {
        id: "roads_bridges_highway",
        type: "line",
        source,
        "source-layer": "roads",
        filter: [
          "all",
          [">", "pmap:level", 0],
          ["==", "pmap:kind", "highway"],
          ["!=", "pmap:link", 1]
        ],
        paint: {
          "line-color": t.bridges_highway,
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            6,
            1.1,
            12,
            1.6,
            15,
            5,
            18,
            15
          ]
        }
      }
    ];
  }
  function labels_layers(source, t) {
    return [
      {
        id: "physical_line_waterway_label",
        type: "symbol",
        source,
        "source-layer": "physical_line",
        minzoom: 13,
        filter: ["all", ["in", "pmap:kind", "river", "stream"]],
        layout: {
          "symbol-placement": "line",
          "text-font": ["Noto Sans Regular"],
          "text-field": ["get", "name"],
          "text-size": 12,
          "text-letter-spacing": 0.3
        },
        paint: {
          "text-color": t.waterway_label
        }
      },
      {
        id: "physical_point_peak",
        type: "symbol",
        source,
        "source-layer": "physical_point",
        filter: ["any", ["==", "pmap:kind", "peak"]],
        layout: {
          "text-font": ["Noto Sans Italic"],
          "text-field": ["get", "name"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 10, 8, 16, 12],
          "text-letter-spacing": 0.1,
          "text-max-width": 9
        },
        paint: {
          "text-color": t.peak_label,
          "text-halo-width": 1.5
        }
      },
      {
        id: "roads_labels_minor",
        type: "symbol",
        source,
        "source-layer": "roads",
        minzoom: 15,
        filter: ["any", ["in", "pmap:kind", "minor_road", "other", "path"]],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "symbol-placement": "line",
          "text-font": ["Noto Sans Regular"],
          "text-field": ["get", "name"],
          "text-size": 12
        },
        paint: {
          "text-color": t.roads_label_minor,
          "text-halo-color": t.roads_label_minor_halo,
          "text-halo-width": 2
        }
      },
      {
        id: "physical_point_ocean",
        type: "symbol",
        source,
        "source-layer": "physical_point",
        filter: [
          "any",
          [
            "in",
            "pmap:kind",
            "sea",
            "ocean",
            "lake",
            "water",
            "bay",
            "strait",
            "fjord"
          ]
        ],
        layout: {
          "text-font": ["Noto Sans Medium"],
          "text-field": ["get", "name"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 3, 10, 10, 12],
          "text-letter-spacing": 0.1,
          "text-max-width": 9,
          "text-transform": "uppercase"
        },
        paint: {
          "text-color": t.ocean_label
        }
      },
      {
        id: "physical_point_lakes",
        type: "symbol",
        source,
        "source-layer": "physical_point",
        filter: ["any", ["in", "pmap:kind", "lake", "water"]],
        layout: {
          "text-font": ["Noto Sans Medium"],
          "text-field": ["get", "name"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 3, 0, 6, 12, 10, 12],
          "text-letter-spacing": 0.1,
          "text-max-width": 9
        },
        paint: {
          "text-color": t.ocean_label
        }
      },
      {
        id: "roads_labels_major",
        type: "symbol",
        source,
        "source-layer": "roads",
        minzoom: 11,
        filter: [
          "any",
          ["in", "pmap:kind", "highway", "major_road", "medium_road"]
        ],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "symbol-placement": "line",
          "text-font": ["Noto Sans Regular"],
          "text-field": ["get", "name"],
          "text-size": 12
        },
        paint: {
          "text-color": t.roads_label_major,
          "text-halo-color": t.roads_label_major_halo,
          "text-halo-width": 2
        }
      },
      {
        id: "places_subplace",
        type: "symbol",
        source,
        "source-layer": "places",
        filter: ["==", "pmap:kind", "neighbourhood"],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "text-field": "{name}",
          "text-font": ["Noto Sans Regular"],
          "text-max-width": 7,
          "text-letter-spacing": 0.1,
          "text-padding": [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            2,
            8,
            4,
            12,
            18,
            15,
            20
          ],
          "text-size": [
            "interpolate",
            ["exponential", 1.2],
            ["zoom"],
            11,
            8,
            14,
            14,
            18,
            24
          ],
          "text-transform": "uppercase"
        },
        paint: {
          "text-color": t.subplace_label,
          "text-halo-color": t.subplace_label_halo,
          "text-halo-width": 1.5
        }
      },
      {
        id: "places_locality",
        type: "symbol",
        source,
        "source-layer": "places",
        filter: ["==", "pmap:kind", "locality"],
        layout: {
          "icon-image": ["step", ["zoom"], "townspot", 8, ""],
          "icon-size": 0.7,
          "text-field": "{name}",
          "text-font": [
            "case",
            ["<=", ["get", "pmap:min_zoom"], 5],
            ["literal", ["Noto Sans Medium"]],
            ["literal", ["Noto Sans Regular"]]
          ],
          "text-padding": [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            3,
            8,
            7,
            12,
            11
          ],
          "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            2,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 13],
              8,
              [">=", ["get", "pmap:population_rank"], 13],
              13,
              0
            ],
            4,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 13],
              10,
              [">=", ["get", "pmap:population_rank"], 13],
              15,
              0
            ],
            6,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 12],
              11,
              [">=", ["get", "pmap:population_rank"], 12],
              17,
              0
            ],
            8,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 11],
              11,
              [">=", ["get", "pmap:population_rank"], 11],
              18,
              0
            ],
            10,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 9],
              12,
              [">=", ["get", "pmap:population_rank"], 9],
              20,
              0
            ],
            15,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 8],
              12,
              [">=", ["get", "pmap:population_rank"], 8],
              22,
              0
            ]
          ],
          "icon-padding": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            0,
            8,
            4,
            10,
            8,
            12,
            6,
            22,
            2
          ],
          "text-anchor": ["step", ["zoom"], "left", 8, "center"],
          "text-radial-offset": 0.4
        },
        paint: {
          "text-color": t.city_label,
          "text-halo-color": t.city_label_halo,
          "text-halo-width": 1
        }
      },
      {
        id: "places_region",
        type: "symbol",
        source,
        "source-layer": "places",
        filter: ["==", "pmap:kind", "region"],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "text-field": [
            "step",
            ["zoom"],
            ["get", "name:short"],
            6,
            ["get", "name"]
          ],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 3, 11, 7, 16],
          "text-radial-offset": 0.2,
          "text-anchor": "center",
          "text-transform": "uppercase"
        },
        paint: {
          "text-color": t.state_label,
          "text-halo-color": t.state_label_halo,
          "text-halo-width": 2
        }
      },
      {
        id: "places_country",
        type: "symbol",
        source,
        "source-layer": "places",
        filter: ["==", "pmap:kind", "country"],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "text-field": "{name}",
          "text-font": ["Noto Sans Medium"],
          "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            2,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 10],
              8,
              [">=", ["get", "pmap:population_rank"], 10],
              12,
              0
            ],
            6,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 8],
              10,
              [">=", ["get", "pmap:population_rank"], 8],
              18,
              0
            ],
            8,
            [
              "case",
              ["<", ["get", "pmap:population_rank"], 7],
              11,
              [">=", ["get", "pmap:population_rank"], 7],
              20,
              0
            ]
          ],
          "icon-padding": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            2,
            14,
            2,
            16,
            20,
            17,
            2,
            22,
            2
          ],
          "text-transform": "uppercase"
        },
        paint: {
          "text-color": t.country_label
        }
      }
    ];
  }

  // src/themes.ts
  var CONTRAST = {
    background: "#dddddd",
    earth: "#ededed",
    park_a: "#bfc99c",
    park_b: "#bfc99c",
    hospital: "#ffeae8",
    industrial: "#f8ffed",
    school: "#f2fef9",
    wood_a: "#bfc99c",
    wood_b: "#bfc99c",
    pedestrian: "#eef0f0",
    scrub_a: "#bfc99c",
    scrub_b: "#bfc99c",
    glacier: "#ffffff",
    sand: "#ebe7da",
    beach: "#ebe7da",
    aerodrome: "#dbe7e7",
    runway: "#d1d9d9",
    water: "#84b7cf",
    pier: "#ededed",
    zoo: "#ebe6ed",
    military: "#ebe6ed",
    tunnel_other_casing: "#ffffff",
    tunnel_minor_casing: "#e2e2e2",
    tunnel_link_casing: "#e2e2e2",
    tunnel_medium_casing: "#e1e1e1",
    tunnel_major_casing: "#e3cfd3",
    tunnel_highway_casing: "#ebcea2",
    tunnel_other: "#f7f7f7",
    tunnel_minor: "#ebebeb",
    tunnel_link: "#ebebeb",
    tunnel_medium: "#ebebeb",
    tunnel_major: "#ebebeb",
    tunnel_highway: "#ebebeb",
    transit_pier: "#ededed",
    buildings: "#cbcece",
    minor_service_casing: "#e2e2e2",
    minor_casing: "#e2e2e2",
    link_casing: "#e2e2e2",
    medium_casing: "#e1e1e1",
    major_casing_late: "#e3cfd3",
    highway_casing_late: "#ebcea2",
    other: "#ffffff",
    minor_service: "#ffffff",
    minor_a: "#fff2bb",
    minor_b: "#fff2bb",
    link: "#fff2bb",
    medium: "#ffea94",
    major_casing_early: "#e3cfd3",
    major: "#ffdf59",
    highway_casing_early: "#ebcea2",
    highway: "#e9ac77",
    railway: "#b3bcc9",
    boundaries: "#5c4a6b",
    waterway_label: "#a4cae1",
    bridges_other_casing: "#ffffff",
    bridges_minor_casing: "#e2e2e2",
    bridges_link_casing: "#e1e1e1",
    bridges_medium_casing: "#e1e1e1",
    bridges_major_casing: "#e3cfd3",
    bridges_highway_casing: "#ebcea2",
    bridges_other: "#ffffff",
    bridges_minor: "#ffffff",
    bridges_link: "#e1e1e1",
    bridges_medium: "#ffffff",
    bridges_major: "#ffffff",
    bridges_highway: "#fefffc",
    roads_label_minor: "#91888b",
    roads_label_minor_halo: "#ffffff",
    roads_label_major: "#91888b",
    roads_label_major_halo: "#ffffff",
    ocean_label: "#ffffff",
    peak_label: "#61bb5b",
    subplace_label: "#757d91",
    subplace_label_halo: "#ffffff",
    city_label: "#3c3c3c",
    city_label_halo: "#ffffff",
    state_label: "#777777",
    state_label_halo: "#ffffff",
    country_label: "#9590aa"
  };
  var LIGHT = {
    background: "#cccccc",
    earth: "#e0e0e0",
    park_a: "#cfddd5",
    park_b: "#9cd3b4",
    hospital: "#e4dad9",
    industrial: "#d1dde1",
    school: "#e4ded7",
    wood_a: "#d0ded0",
    wood_b: "#a0d9a0",
    pedestrian: "#e3e0d4",
    scrub_a: "#cedcd7",
    scrub_b: "#99d2bb",
    glacier: "#e7e7e7",
    sand: "#e2e0d7",
    beach: "#e8e4d0",
    aerodrome: "#dadbdf",
    runway: "#e9e9ed",
    water: "#80deea",
    pier: "#e0e0e0",
    zoo: "#c6dcdc",
    military: "#dcdcdc",
    tunnel_other_casing: "#e0e0e0",
    tunnel_minor_casing: "#e0e0e0",
    tunnel_link_casing: "#e0e0e0",
    tunnel_medium_casing: "#e0e0e0",
    tunnel_major_casing: "#e0e0e0",
    tunnel_highway_casing: "#e0e0e0",
    tunnel_other: "#d5d5d5",
    tunnel_minor: "#d5d5d5",
    tunnel_link: "#d5d5d5",
    tunnel_medium: "#d5d5d5",
    tunnel_major: "#d5d5d5",
    tunnel_highway: "#d5d5d5",
    transit_pier: "#e0e0e0",
    buildings: "#cccccc",
    minor_service_casing: "#e0e0e0",
    minor_casing: "#e0e0e0",
    link_casing: "#e0e0e0",
    medium_casing: "#e0e0e0",
    major_casing_late: "#e0e0e0",
    highway_casing_late: "#e0e0e0",
    other: "#ebebeb",
    minor_service: "#ebebeb",
    minor_a: "#ebebeb",
    minor_b: "#ffffff",
    link: "#ffffff",
    medium: "#f5f5f5",
    major_casing_early: "#e0e0e0",
    major: "#ffffff",
    highway_casing_early: "#e0e0e0",
    highway: "#ffffff",
    railway: "#a7b1b3",
    boundaries: "#adadad",
    waterway_label: "#ffffff",
    bridges_other_casing: "#e0e0e0",
    bridges_minor_casing: "#e0e0e0",
    bridges_link_casing: "#e0e0e0",
    bridges_medium_casing: "#e0e0e0",
    bridges_major_casing: "#e0e0e0",
    bridges_highway_casing: "#e0e0e0",
    bridges_other: "#ebebeb",
    bridges_minor: "#ffffff",
    bridges_link: "#ffffff",
    bridges_medium: "#f0eded",
    bridges_major: "#f5f5f5",
    bridges_highway: "#ffffff",
    roads_label_minor: "#91888b",
    roads_label_minor_halo: "#ffffff",
    roads_label_major: "#938a8d",
    roads_label_major_halo: "#ffffff",
    ocean_label: "#ffffff",
    peak_label: "#7e9aa0",
    subplace_label: "#8f8f8f",
    subplace_label_halo: "#e0e0e0",
    city_label: "#5c5c5c",
    city_label_halo: "#e0e0e0",
    state_label: "#b3b3b3",
    state_label_halo: "#e0e0e0",
    country_label: "#a3a3a3"
  };
  var DARK = {
    background: "#34373d",
    earth: "#1f1f1f",
    park_a: "#232325",
    park_b: "#232325",
    hospital: "#252424",
    industrial: "#222222",
    school: "#262323",
    wood_a: "#202121",
    wood_b: "#202121",
    pedestrian: "#1e1e1e",
    scrub_a: "#222323",
    scrub_b: "#222323",
    glacier: "#1c1c1c",
    sand: "#212123",
    beach: "#28282a",
    aerodrome: "#1e1e1e",
    runway: "#333333",
    water: "#34373d",
    pier: "#222222",
    zoo: "#222323",
    military: "#242323",
    tunnel_other_casing: "#141414",
    tunnel_minor_casing: "#141414",
    tunnel_link_casing: "#141414",
    tunnel_medium_casing: "#141414",
    tunnel_major_casing: "#141414",
    tunnel_highway_casing: "#141414",
    tunnel_other: "#292929",
    tunnel_minor: "#292929",
    tunnel_link: "#292929",
    tunnel_medium: "#292929",
    tunnel_major: "#292929",
    tunnel_highway: "#292929",
    transit_pier: "#333333",
    buildings: "#111111",
    minor_service_casing: "#1f1f1f",
    minor_casing: "#1f1f1f",
    link_casing: "#1f1f1f",
    medium_casing: "#1f1f1f",
    major_casing_late: "#1f1f1f",
    highway_casing_late: "#1f1f1f",
    other: "#333333",
    minor_service: "#333333",
    minor_a: "#3d3d3d",
    minor_b: "#333333",
    link: "#3d3d3d",
    medium: "#3d3d3d",
    major_casing_early: "#1f1f1f",
    major: "#3d3d3d",
    highway_casing_early: "#1f1f1f",
    highway: "#474747",
    railway: "#000000",
    boundaries: "#5b6374",
    waterway_label: "#717784",
    bridges_other_casing: "#2b2b2b",
    bridges_minor_casing: "#1f1f1f",
    bridges_link_casing: "#1f1f1f",
    bridges_medium_casing: "#1f1f1f",
    bridges_major_casing: "#1f1f1f",
    bridges_highway_casing: "#1f1f1f",
    bridges_other: "#333333",
    bridges_minor: "#333333",
    bridges_link: "#3d3d3d",
    bridges_medium: "#3d3d3d",
    bridges_major: "#3d3d3d",
    bridges_highway: "#474747",
    roads_label_minor: "#525252",
    roads_label_minor_halo: "#1f1f1f",
    roads_label_major: "#666666",
    roads_label_major_halo: "#1f1f1f",
    ocean_label: "#717784",
    peak_label: "#898080",
    subplace_label: "#525252",
    subplace_label_halo: "#1f1f1f",
    city_label: "#7a7a7a",
    city_label_halo: "#212121",
    state_label: "#3d3d3d",
    state_label_halo: "#1f1f1f",
    country_label: "#5c5c5c"
  };
  var WHITE = {
    background: "#ffffff",
    earth: "#ffffff",
    park_a: "#fcfcfc",
    park_b: "#fcfcfc",
    hospital: "#f8f8f8",
    industrial: "#fcfcfc",
    school: "#f8f8f8",
    wood_a: "#fafafa",
    wood_b: "#fafafa",
    pedestrian: "#fdfdfd",
    scrub_a: "#fafafa",
    scrub_b: "#fafafa",
    glacier: "#fcfcfc",
    sand: "#fafafa",
    beach: "#f6f6f6",
    aerodrome: "#fdfdfd",
    runway: "#efefef",
    water: "#dcdcdc",
    pier: "#f5f5f5",
    zoo: "#f7f7f7",
    military: "#fcfcfc",
    tunnel_other_casing: "#d6d6d6",
    tunnel_minor_casing: "#fcfcfc",
    tunnel_link_casing: "#fcfcfc",
    tunnel_medium_casing: "#fcfcfc",
    tunnel_major_casing: "#fcfcfc",
    tunnel_highway_casing: "#fcfcfc",
    tunnel_other: "#d6d6d6",
    tunnel_minor: "#d6d6d6",
    tunnel_link: "#d6d6d6",
    tunnel_medium: "#d6d6d6",
    tunnel_major: "#d6d6d6",
    tunnel_highway: "#d6d6d6",
    transit_pier: "#efefef",
    buildings: "#efefef",
    minor_service_casing: "#ffffff",
    minor_casing: "#ffffff",
    link_casing: "#ffffff",
    medium_casing: "#ffffff",
    major_casing_late: "#ffffff",
    highway_casing_late: "#ffffff",
    other: "#f5f5f5",
    minor_service: "#f5f5f5",
    minor_a: "#ebebeb",
    minor_b: "#f5f5f5",
    link: "#ebebeb",
    medium: "#ebebeb",
    major_casing_early: "#ffffff",
    major: "#ebebeb",
    highway_casing_early: "#ffffff",
    highway: "#ebebeb",
    railway: "#d6d6d6",
    boundaries: "#adadad",
    waterway_label: "#adadad",
    bridges_other_casing: "#ffffff",
    bridges_minor_casing: "#ffffff",
    bridges_link_casing: "#ffffff",
    bridges_medium_casing: "#ffffff",
    bridges_major_casing: "#ffffff",
    bridges_highway_casing: "#ffffff",
    bridges_other: "#f5f5f5",
    bridges_minor: "#f5f5f5",
    bridges_link: "#ebebeb",
    bridges_medium: "#ebebeb",
    bridges_major: "#ebebeb",
    bridges_highway: "#ebebeb",
    roads_label_minor: "#adadad",
    roads_label_minor_halo: "#ffffff",
    roads_label_major: "#999999",
    roads_label_major_halo: "#ffffff",
    ocean_label: "#adadad",
    peak_label: "#adadad",
    subplace_label: "#8f8f8f",
    subplace_label_halo: "#ffffff",
    city_label: "#5c5c5c",
    city_label_halo: "#ffffff",
    state_label: "#b3b3b3",
    state_label_halo: "#ffffff",
    country_label: "#b8b8b8"
  };
  var GRAYSCALE = {
    background: "#a3a3a3",
    earth: "#cccccc",
    park_a: "#c2c2c2",
    park_b: "#c2c2c2",
    hospital: "#d0d0d0",
    industrial: "#c6c6c6",
    school: "#d0d0d0",
    wood_a: "#c2c2c2",
    wood_b: "#c2c2c2",
    pedestrian: "#c4c4c4",
    scrub_a: "#c2c2c2",
    scrub_b: "#c2c2c2",
    glacier: "#d2d2d2",
    sand: "#d2d2d2",
    beach: "#d2d2d2",
    aerodrome: "#c9c9c9",
    runway: "#f5f5f5",
    water: "#a3a3a3",
    pier: "#b8b8b8",
    zoo: "#c7c7c7",
    military: "#bfbfbf",
    tunnel_other_casing: "#b8b8b8",
    tunnel_minor_casing: "#b8b8b8",
    tunnel_link_casing: "#b8b8b8",
    tunnel_medium_casing: "#b8b8b8",
    tunnel_major_casing: "#b8b8b8",
    tunnel_highway_casing: "#b8b8b8",
    tunnel_other: "#d6d6d6",
    tunnel_minor: "#d6d6d6",
    tunnel_link: "#d6d6d6",
    tunnel_medium: "#d6d6d6",
    tunnel_major: "#d6d6d6",
    tunnel_highway: "#d6d6d6",
    transit_pier: "#b8b8b8",
    buildings: "#e0e0e0",
    minor_service_casing: "#cccccc",
    minor_casing: "#cccccc",
    link_casing: "#cccccc",
    medium_casing: "#cccccc",
    major_casing_late: "#cccccc",
    highway_casing_late: "#cccccc",
    other: "#e0e0e0",
    minor_service: "#e0e0e0",
    minor_a: "#ebebeb",
    minor_b: "#e0e0e0",
    link: "#ebebeb",
    medium: "#ebebeb",
    major_casing_early: "#cccccc",
    major: "#ebebeb",
    highway_casing_early: "#cccccc",
    highway: "#ebebeb",
    railway: "#f5f5f5",
    boundaries: "#5c5c5c",
    waterway_label: "#7a7a7a",
    bridges_other_casing: "#cccccc",
    bridges_minor_casing: "#cccccc",
    bridges_link_casing: "#cccccc",
    bridges_medium_casing: "#cccccc",
    bridges_major_casing: "#cccccc",
    bridges_highway_casing: "#cccccc",
    bridges_other: "#e0e0e0",
    bridges_minor: "#e0e0e0",
    bridges_link: "#ebebeb",
    bridges_medium: "#ebebeb",
    bridges_major: "#ebebeb",
    bridges_highway: "#ebebeb",
    roads_label_minor: "#999999",
    roads_label_minor_halo: "#e0e0e0",
    roads_label_major: "#8f8f8f",
    roads_label_major_halo: "#ebebeb",
    ocean_label: "#7a7a7a",
    peak_label: "#5c5c5c",
    subplace_label: "#7a7a7a",
    subplace_label_halo: "#cccccc",
    city_label: "#474747",
    city_label_halo: "#cccccc",
    state_label: "#999999",
    state_label_halo: "#cccccc",
    country_label: "#858585"
  };
  var BLACK = {
    background: "#2b2b2b",
    earth: "#141414",
    park_a: "#181818",
    park_b: "#181818",
    hospital: "#1d1d1d",
    industrial: "#101010",
    school: "#111111",
    wood_a: "#1a1a1a",
    wood_b: "#1a1a1a",
    pedestrian: "#191919",
    scrub_a: "#1c1c1c",
    scrub_b: "#1c1c1c",
    glacier: "#191919",
    sand: "#161616",
    beach: "#1f1f1f",
    aerodrome: "#191919",
    runway: "#323232",
    water: "#333333",
    pier: "#0a0a0a",
    zoo: "#191919",
    military: "#121212",
    tunnel_other_casing: "#101010",
    tunnel_minor_casing: "#101010",
    tunnel_link_casing: "#101010",
    tunnel_medium_casing: "#101010",
    tunnel_major_casing: "#101010",
    tunnel_highway_casing: "#101010",
    tunnel_other: "#292929",
    tunnel_minor: "#292929",
    tunnel_link: "#292929",
    tunnel_medium: "#292929",
    tunnel_major: "#292929",
    tunnel_highway: "#292929",
    transit_pier: "#0a0a0a",
    buildings: "#0a0a0a",
    minor_service_casing: "#141414",
    minor_casing: "#141414",
    link_casing: "#141414",
    medium_casing: "#141414",
    major_casing_late: "#141414",
    highway_casing_late: "#141414",
    other: "#1f1f1f",
    minor_service: "#1f1f1f",
    minor_a: "#292929",
    minor_b: "#1f1f1f",
    link: "#1f1f1f",
    medium: "#292929",
    major_casing_early: "#141414",
    major: "#292929",
    highway_casing_early: "#141414",
    highway: "#292929",
    railway: "#292929",
    boundaries: "#707070",
    waterway_label: "#707070",
    bridges_other_casing: "#141414",
    bridges_minor_casing: "#141414",
    bridges_link_casing: "#141414",
    bridges_medium_casing: "#141414",
    bridges_major_casing: "#141414",
    bridges_highway_casing: "#141414",
    bridges_other: "#1f1f1f",
    bridges_minor: "#1f1f1f",
    bridges_link: "#292929",
    bridges_medium: "#292929",
    bridges_major: "#292929",
    bridges_highway: "#292929",
    roads_label_minor: "#525252",
    roads_label_minor_halo: "#141414",
    roads_label_major: "#5c5c5c",
    roads_label_major_halo: "#141414",
    ocean_label: "#707070",
    peak_label: "#707070",
    subplace_label: "#5c5c5c",
    subplace_label_halo: "#141414",
    city_label: "#999999",
    city_label_halo: "#141414",
    state_label: "#3d3d3d",
    state_label_halo: "#141414",
    country_label: "#707070"
  };
  var themes = {
    light: LIGHT,
    dark: DARK,
    white: WHITE,
    grayscale: GRAYSCALE,
    black: BLACK,
    contrast: CONTRAST
  };
  var themes_default = themes;

  // src/index.ts
  function src_default(source, key) {
    const theme = themes_default[key];
    return nolabels_layers(source, theme).concat(labels_layers(source, theme));
  }
  function noLabels(source, key) {
    const theme = themes_default[key];
    return nolabels_layers(source, theme);
  }
  function labels(source, key) {
    const theme = themes_default[key];
    return labels_layers(source, theme);
  }
  function layersWithCustomTheme(source, theme) {
    return nolabels_layers(source, theme).concat(labels_layers(source, theme));
  }
  function layersWithPartialCustomTheme(source, key, partialTheme) {
    const mergedTheme = __spreadValues(__spreadValues({}, themes_default[key]), partialTheme);
    return nolabels_layers(source, mergedTheme).concat(
      labels_layers(source, mergedTheme)
    );
  }
  function noLabelsWithCustomTheme(source, theme) {
    return nolabels_layers(source, theme);
  }
  function labelsWithCustomTheme(source, theme) {
    return labels_layers(source, theme);
  }
  return __toCommonJS(src_exports);
})();
