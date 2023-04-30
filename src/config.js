/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capas',
		completeWith: 'Completar con:',
		editWith: 'Editar con:',
		openWith: 'Abrir con:',
		showWith: 'Mostrar con:',
		show2With: 'Mostrar también con:',
		checkTools: 'Validar con:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Nodo:',
		noNodesFound: 'No se ha encontrado información.',
		wayLabel: 'Vía:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap DE',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			maxZoom: 18,
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'PNOA'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{
			group: 'Wheelchair',
			title: 'Wheelchair=yes',
			query: '(node[wheelchair=yes][shop]({{bbox}});node[wheelchair=yes][amenity]({{bbox}});node[wheelchair=yes][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			iconStyle: 'background-color:#714601',
						scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Wheelchair=limited',
			query: '(node[wheelchair=limited][shop]({{bbox}});node[wheelchair=limited][amenity]({{bbox}});node[wheelchair=limited][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Wheelchair=no',
			query: '(node[wheelchair=no][shop]({{bbox}});node[wheelchair=no][amenity]({{bbox}});node[wheelchair=no][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Wheelchair',
			title: 'Falta Wheelchair',
			query: '(node[!wheelchair][shop]({{bbox}});node[!wheelchair][amenity]({{bbox}});node[!wheelchair][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera adaptada',
			query: '(way[wheelchair=yes][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera amb limitacions',
			query: '(way[wheelchair=limited][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera no adaptada',
			query: '(way[wheelchair=no][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Voreres',
			title: 'Vorera sense informació',
			query: '(way[!wheelchair][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament adaptat',
			query: '(way[wheelchair=yes][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament limitat',
			query: '(way[wheelchair=limited][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Encreuament no adaptat',
			query: '(way[wheelchair=no][highway=footway][footway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
				{
			group: 'Encreuaments',
			title: 'Wheelchair=yes',
			query: '(node[wheelchair=yes][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg',
			iconStyle: 'background-color:#714601',
						scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_yes_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Wheelchair=limited',
			query: '(node[wheelchair=limited][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_limited_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Wheelchair=no',
			query: '(node[wheelchair=no][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no_shop.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_no_shop.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Encreuaments',
			title: 'Falta Wheelchair',
			query: '(node[!wheelchair][highway=crossing]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via adaptada',
			query: '(way[wheelchair=yes][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via amb limitacions',
			query: '(way[wheelchair=limited][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via no adaptada',
			query: '(way[wheelchair=no][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Vies',
			title: 'Via sense informació',
			query: '(way[!wheelchair][highway]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		{
			group: 'Àrees',
			title: 'Àrea adaptada',
			query: '(way[wheelchair=yes][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#40E0D0',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#40E0D0',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea amb limitacions',
			query: '(way[wheelchair=limited][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FFA500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FFA500',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea no adaptada',
			query: '(way[wheelchair=no][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Àrees',
			title: 'Àrea sense informació',
			query: '(way[!wheelchair][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Altres',
			title: 'Plaça aparcament',
			query: '(node["capacity:disabled"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/capacity_disabled.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/capacity_disabled.svg'
					})
				});
				return style;
			}
		},
				{
			group: 'Altres',
			title: 'Escales',
			query: '(way[highway=steps]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/dots.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Altres',
			title: 'Obstacles',
			query: '(node["obstacle:wheelchair"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/obstacle_wheelchair_yes.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Elevades >> <a href="https://mapcomplete.osm.be/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome" Test</a><b>Completar aquí</b>',
			query: '(node[kerb=raised]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_raised.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_raised.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Rebaixades >> <a href="https://mapcomplete.osm.be/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome" Test</a><b>Completar aquí</b>',
			query: '(node[kerb=lowered]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_lowered.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_lowered.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Vorades',
			title: 'Anivellades >> <a href="https://mapcomplete.osm.be/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome" Test</a><b>Completar aquí</b>',
			query: '(node[kerb=flush]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_flush.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_flush.svg'
					})
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Steps up',
			query: '(nwr["highway"="steps"]["incline"="up"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/steps_up.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/steps_up.svg',
							scale:0.006
						}),
							text: new ol.style.Text({
								text: "/",
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Steps down',
			query: '(nwr["highway"="steps"]["incline"="down"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/steps_down.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/steps_down.svg',
							scale:0.006
						}),
							text: new ol.style.Text({
								text: "\\",
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Up',
			query: '(nwr["highway"!="elevator"]["incline"="up"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Down',
			query: '(nwr["highway"!="elevator"]["incline"="down"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'No Incline',
			query: '(nwr["highway"!="elevator"]["incline"="no"]({{bbox}});node(w);nwr["highway"!="elevator"]["incline"~"^0"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_nul.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_nul.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Up 1-4%',
			query: '(nwr["highway"!="elevator"]["incline"~"^[1-4]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up_0.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up_0.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Up 5-9%',
			query: '(nwr["highway"!="elevator"]["incline"~"^[5-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up_5.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up_5.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Up 10-14%',
			query: '(nwr["highway"!="elevator"]["incline"~"^1[0-4]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up_10.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up_10.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Up 15-19%',
			query: '(nwr["highway"!="elevator"]["incline"~"^1[5-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up_15.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up_15.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Up 20+%',
			query: '(nwr["highway"!="elevator"]["incline"~"^[2-9][0-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_up_20.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_up_20.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Down -1-4%',
			query: '(nwr["highway"!="elevator"]["incline"~"^-[1-4]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down_0.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down_0.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Down -5-9%',
			query: '(nwr["highway"!="elevator"]["incline"~"^-[5-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down_5.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down_5.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Down -10-14%',
			query: '(nwr["highway"!="elevator"]["incline"~"^-1[0-4]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down_10.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down_10.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Down -15-19%',
			query: '(nwr["highway"!="elevator"]["incline"~"^-1[5-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down_15.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down_15.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Down -20+%',
			query: '(nwr["highway"!="elevator"]["incline"~"^-[2-9][0-9]%"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_down_20.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_down_20.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Incline',
			title: 'Incline Unknown',
			query: '(way["highway"]["highway"!="elevator"][!"incline"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/incline_question.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^incline$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'accessibilitat/incline_question.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},

		{
			group: 'Vorades',
			title: 'Falta informació >> <a href="https://mapcomplete.osm.be/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome" Test</a><b>Completar aquí</b>',
			query: '(node[kerb=yes]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/kerb_yes.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.0004,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/kerb_yes.svg'
					})
				});
				return style;
			}

		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
		
//Mapcomplete editor
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fincline.json&language=ca#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'accessibilitat/incline_question.svg', height: 20, width: 20})));
		

		
		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeGo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',transit', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//Apple
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Apple Maps', href: 'https://duckduckgo.com/?t=ffab&q=' + coordinateLL[1] + ',' + coordinateLL[0] + '+Show+on+Map&ia=maps&iaxm=maps,' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'applemaps_logo.png', height: 20, width: 20})));
		//Bing
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Bing', href: 'https://www.bing.com/maps?cp=' + coordinateLL[1] + '~' + coordinateLL[0] + '&lvl=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'bing_logo.png', height: 20, width: 20})));
		//Mapillary
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Mapillary', href: 'https://www.mapillary.com/app/?lat=' + coordinateLL[1] + '&lng=' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapillary_logo.png', height: 20, width: 20})));
		
		//Karta View
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Karta View', href: 'https://kartaview.org/map/@' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20) + 'z' , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'kartaview_logo.png', height: 20, width: 20})));
		
		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));
		
		//Notes Review
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes Review', href: 'https://ent8r.github.io/NotesReview/?view=map&map=' + Math.min(view.getZoom(), 20) + '%2F' + coordinateLL[1] + '%2F' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'notesreview_logo.png', height: 20, width: 20})));
		
		//Latest OpenStreetMap Edits per Tile
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		
		var show = $('<div>').html(config.i18n.showWith);
		//OpenLevelUp
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenLevelUp!', href: 'https://openlevelup.net/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'openlevelup_logo.png', height: 20, width: 20})));
		
		//Waymarkedtrails
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Waymarked trails', href: 'https://hiking.waymarkedtrails.org/#?map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'waymarkedtrails_logo.png', height: 20, width: 20})));
		
		//OpenCampingMap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenCampingMap', href: 'https://opencampingmap.org/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/0/1/fff', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'opencampingmap_logo.svg', height: 20, width: 20})));
		
		//Osmand
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Osmand', href: 'https://osmand.net/map#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));
		
		//Openrouteservice
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenRouteService', href: 'https://maps.openrouteservice.org/#/place/@' + coordinateLL[0] + ',' + coordinateLL[1] + ',' + Math.min(view.getZoom(), 20) , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ors_logo.svg', height: 20, width: 20})));
		
		//OSM Routing Machine
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Routing Machine', href: 'http://map.project-osrm.org/?z=' + Math.min(view.getZoom(), 20) + '&center=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&hl=en&alt=0&srv=0', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osrm_logo.png', height: 20, width: 20})));
		
		//Graphhopper
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Graphhopper', href: 'https://graphhopper.com/maps/?point=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&locale=en&elevation=true&profile=car&use_miles=false&selected_detail=Elevation&layer=Omniscale', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'graphhopper_logo.png', height: 20, width: 20})));
		
		//Brouter
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Brouter', href: 'http://brouter.de/brouter-web/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/standard', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'brouter_logo.png', height: 20, width: 20})));
		
		//F4 Map 3D
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://demo.f4map.com/#lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&zoom=' + Math.min(view.getZoom(), 20) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'f4map_logo.png', height: 20, width: 20})));
		
		//Qwant
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Qwant', href: 'https://www.qwant.com/maps/place/latlon:' + coordinateLL[1] + ':' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'qwantmaps_logo.svg', height: 20, width: 20})));
		
		//Mapy.cz
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Mapy.cz', href: 'https://en.mapy.cz/zakladni?x=' + coordinateLL[0] + '&y=' + coordinateLL[1] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapycz_logo.png', height: 20, width: 20})));
		
		//OpenStreetBrowser
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenStreetBrowser', href: 'https://www.openstreetbrowser.org/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osb_logo.png', height: 20, width: 20})));
		
		var show2 = $('<div>').html(config.i18n.show2With);
		
		//OSM Accessibility Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Accessibility Map', href: 'https://yopaseopor.github.io/osmaccessibilitymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM FireFighters Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Fire Fighters Map', href: 'https://yopaseopor.github.io/osmffmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmffmap_logo.svg', height: 20, width: 20})));
		
				//OSM Historic Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Historic Map', href: 'https://yopaseopor.github.io/osmhistoricmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmhistoricmap_logo.png', height: 20, width: 20})));
				
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Lit Map', href: 'https://yopaseopor.github.io/osmlitmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlitmap_logo.svg', height: 20, width: 20})));
		
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Limits Map', href: 'https://yopaseopor.github.io/osmlimitsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlimitsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Library Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Library Map', href: 'https://yopaseopor.github.io/osmlibrarymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlibrarymap_logo.svg', height: 20, width: 20})));
		
				//OSM MTB Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM MTB Map', href: 'https://yopaseopor.github.io/osmmtbmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM Parking Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Parking Map', href: 'https://osm-es.github.io/osmparkingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmparkingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Recycling Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Recycling Map', href: 'https://yopaseopor.github.io/osmrecyclingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmrecyclingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Validator Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Validator Map', href: 'https://yopaseopor.github.io/osmvalidatormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmvalidatormap_logo.svg', height: 20, width: 20})));
		
				//OSM POIs Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM POIs Map', href: 'https://yopaseopor.github.io/osmpoismap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmpoismap_logo.svg', height: 20, width: 20})));
		
					return $.merge($.merge($.merge($.merge($.merge(open, show), show2), tool), complete), edit);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
