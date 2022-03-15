var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_censo_0 = new ol.format.GeoJSON();
var features_censo_0 = format_censo_0.readFeatures(json_censo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_censo_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_censo_0.addFeatures(features_censo_0);var lyr_censo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_censo_0, 
                style: style_censo_0,
                title: '<img src="styles/legend/censo_0.png" /> censo'
            });

lyr_censo_0.setVisible(true);
var layersList = [baseLayer,lyr_censo_0];
lyr_censo_0.set('fieldAliases', {'gid': 'gid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_censo_0.set('fieldImages', {'gid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_censo_0.set('fieldLabels', {'gid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', });
lyr_censo_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});