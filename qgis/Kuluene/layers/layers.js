var wms_layers = [];

var lyr_NDVI_MARCO_2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5816494.775800, -1332091.978300, -5798661.061600, -1321815.975300]
                            })
                        });
var lyr_NDVI_MARCO_2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5816494.775800, -1332091.978300, -5798661.061600, -1321815.975300]
                            })
                        });
var lyr_CORES_VERDADEIRAS_MARCO_2023_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_MARCO_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_MARCO_2023_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5816494.775800, -1332091.978300, -5798661.061600, -1321815.975300]
                            })
                        });
var format_LimiteKuluene_II_3 = new ol.format.GeoJSON();
var features_LimiteKuluene_II_3 = format_LimiteKuluene_II_3.readFeatures(json_LimiteKuluene_II_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteKuluene_II_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteKuluene_II_3.addFeatures(features_LimiteKuluene_II_3);
var lyr_LimiteKuluene_II_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteKuluene_II_3, 
                style: style_LimiteKuluene_II_3,
                interactive: true,
                title: '<img src="styles/legend/LimiteKuluene_II_3.png" /> Limite Kuluene_II'
            });
var format_ARL_4 = new ol.format.GeoJSON();
var features_ARL_4 = format_ARL_4.readFeatures(json_ARL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARL_4.addFeatures(features_ARL_4);
var lyr_ARL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARL_4, 
                style: style_ARL_4,
                interactive: true,
                title: '<img src="styles/legend/ARL_4.png" /> ARL'
            });
var format_APP_5 = new ol.format.GeoJSON();
var features_APP_5 = format_APP_5.readFeatures(json_APP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_5.addFeatures(features_APP_5);
var lyr_APP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_5, 
                style: style_APP_5,
                interactive: true,
                title: '<img src="styles/legend/APP_5.png" /> APP'
            });
var format_VNAbrir_6 = new ol.format.GeoJSON();
var features_VNAbrir_6 = format_VNAbrir_6.readFeatures(json_VNAbrir_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNAbrir_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNAbrir_6.addFeatures(features_VNAbrir_6);
var lyr_VNAbrir_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNAbrir_6, 
                style: style_VNAbrir_6,
                interactive: true,
                title: '<img src="styles/legend/VNAbrir_6.png" /> VN Abrir'
            });
var format_LimiteKuluene_I_7 = new ol.format.GeoJSON();
var features_LimiteKuluene_I_7 = format_LimiteKuluene_I_7.readFeatures(json_LimiteKuluene_I_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteKuluene_I_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteKuluene_I_7.addFeatures(features_LimiteKuluene_I_7);
var lyr_LimiteKuluene_I_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteKuluene_I_7, 
                style: style_LimiteKuluene_I_7,
                interactive: true,
                title: '<img src="styles/legend/LimiteKuluene_I_7.png" /> Limite Kuluene_I'
            });
var format_APP_8 = new ol.format.GeoJSON();
var features_APP_8 = format_APP_8.readFeatures(json_APP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_8.addFeatures(features_APP_8);
var lyr_APP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_8, 
                style: style_APP_8,
                interactive: true,
                title: '<img src="styles/legend/APP_8.png" /> APP'
            });
var format_1_9 = new ol.format.GeoJSON();
var features_1_9 = format_1_9.readFeatures(json_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_9.addFeatures(features_1_9);
var lyr_1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_9, 
                style: style_1_9,
                interactive: true,
                title: '<img src="styles/legend/1_9.png" /> 1'
            });
var format_VNAbrir_10 = new ol.format.GeoJSON();
var features_VNAbrir_10 = format_VNAbrir_10.readFeatures(json_VNAbrir_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNAbrir_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNAbrir_10.addFeatures(features_VNAbrir_10);
var lyr_VNAbrir_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNAbrir_10, 
                style: style_VNAbrir_10,
                interactive: true,
                title: '<img src="styles/legend/VNAbrir_10.png" /> VN Abrir'
            });
var group_Kuluene_I = new ol.layer.Group({
                                layers: [lyr_LimiteKuluene_I_7,lyr_APP_8,lyr_1_9,lyr_VNAbrir_10,],
                                title: "Kuluene_I"});
var group_Kuluene_II = new ol.layer.Group({
                                layers: [lyr_LimiteKuluene_II_3,lyr_ARL_4,lyr_APP_5,lyr_VNAbrir_6,],
                                title: "Kuluene_II"});
var group_CORES_VERDADEIRAS = new ol.layer.Group({
                                layers: [lyr_NDVI_MARCO_2023_1,lyr_CORES_VERDADEIRAS_MARCO_2023_2,],
                                title: "CORES_VERDADEIRAS"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_MARCO_2023_1,],
                                title: "NDVI"});

lyr_NDVI_MARCO_2023_0.setVisible(true);lyr_NDVI_MARCO_2023_1.setVisible(true);lyr_CORES_VERDADEIRAS_MARCO_2023_2.setVisible(true);lyr_LimiteKuluene_II_3.setVisible(true);lyr_ARL_4.setVisible(true);lyr_APP_5.setVisible(true);lyr_VNAbrir_6.setVisible(true);lyr_LimiteKuluene_I_7.setVisible(true);lyr_APP_8.setVisible(true);lyr_1_9.setVisible(true);lyr_VNAbrir_10.setVisible(true);
var layersList = [group_NDVI,group_CORES_VERDADEIRAS,group_Kuluene_II,group_Kuluene_I];
lyr_LimiteKuluene_II_3.set('fieldAliases', {'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_ARL_4.set('fieldAliases', {'ID': 'ID', 'IDENTIFIC': 'IDENTIFIC', 'AVERBACAO': 'AVERBACAO', 'SITUACAO': 'SITUACAO', 'AREA_HA': 'AREA_HA', });
lyr_APP_5.set('fieldAliases', {'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_VNAbrir_6.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_LimiteKuluene_I_7.set('fieldAliases', {'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_APP_8.set('fieldAliases', {'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_1_9.set('fieldAliases', {'ID': 'ID', 'IDENTIFIC': 'IDENTIFIC', 'AVERBACAO': 'AVERBACAO', 'SITUACAO': 'SITUACAO', 'AREA_HA': 'AREA_HA', });
lyr_VNAbrir_10.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_LimiteKuluene_II_3.set('fieldImages', {'ID': '', 'AREA_HA': '', });
lyr_ARL_4.set('fieldImages', {'ID': 'TextEdit', 'IDENTIFIC': 'TextEdit', 'AVERBACAO': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_APP_5.set('fieldImages', {'ID': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_VNAbrir_6.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_LimiteKuluene_I_7.set('fieldImages', {'ID': '', 'AREA_HA': '', });
lyr_APP_8.set('fieldImages', {'ID': '', 'AREA_HA': '', });
lyr_1_9.set('fieldImages', {'ID': '', 'IDENTIFIC': '', 'AVERBACAO': '', 'SITUACAO': '', 'AREA_HA': '', });
lyr_VNAbrir_10.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_LimiteKuluene_II_3.set('fieldLabels', {});
lyr_ARL_4.set('fieldLabels', {});
lyr_APP_5.set('fieldLabels', {});
lyr_VNAbrir_6.set('fieldLabels', {});
lyr_LimiteKuluene_I_7.set('fieldLabels', {});
lyr_APP_8.set('fieldLabels', {});
lyr_1_9.set('fieldLabels', {});
lyr_VNAbrir_10.set('fieldLabels', {});
lyr_VNAbrir_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});