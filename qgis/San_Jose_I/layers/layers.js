var wms_layers = [];

var lyr_NDVI_marco_2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_marco_2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6005017.151400, -2259158.475900, -5985411.053800, -2244535.116800]
                            })
                        });
var lyr_Cores_verdadeiras_marco_2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cores_verdadeiras_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cores_verdadeiras_marco_2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6005017.151400, -2259158.475900, -5985411.053800, -2244535.116800]
                            })
                        });
var format_AREA_EM_REGENERACAO_2 = new ol.format.GeoJSON();
var features_AREA_EM_REGENERACAO_2 = format_AREA_EM_REGENERACAO_2.readFeatures(json_AREA_EM_REGENERACAO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_EM_REGENERACAO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_EM_REGENERACAO_2.addFeatures(features_AREA_EM_REGENERACAO_2);
var lyr_AREA_EM_REGENERACAO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_EM_REGENERACAO_2, 
                style: style_AREA_EM_REGENERACAO_2,
                interactive: true,
                title: '<img src="styles/legend/AREA_EM_REGENERACAO_2.png" /> AREA_EM_REGENERACAO'
            });
var format_VEGETACAO_NATIVA_3 = new ol.format.GeoJSON();
var features_VEGETACAO_NATIVA_3 = format_VEGETACAO_NATIVA_3.readFeatures(json_VEGETACAO_NATIVA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEGETACAO_NATIVA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEGETACAO_NATIVA_3.addFeatures(features_VEGETACAO_NATIVA_3);
var lyr_VEGETACAO_NATIVA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VEGETACAO_NATIVA_3, 
                style: style_VEGETACAO_NATIVA_3,
                interactive: true,
                title: '<img src="styles/legend/VEGETACAO_NATIVA_3.png" /> VEGETACAO_NATIVA'
            });
var format_RL_4 = new ol.format.GeoJSON();
var features_RL_4 = format_RL_4.readFeatures(json_RL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_4.addFeatures(features_RL_4);
var lyr_RL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_4, 
                style: style_RL_4,
                interactive: true,
                title: '<img src="styles/legend/RL_4.png" /> RL'
            });
var format_processo_abertura_5 = new ol.format.GeoJSON();
var features_processo_abertura_5 = format_processo_abertura_5.readFeatures(json_processo_abertura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processo_abertura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processo_abertura_5.addFeatures(features_processo_abertura_5);
var lyr_processo_abertura_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_processo_abertura_5, 
                style: style_processo_abertura_5,
                interactive: true,
                title: '<img src="styles/legend/processo_abertura_5.png" /> processo_abertura'
            });
var format_SOJA_6 = new ol.format.GeoJSON();
var features_SOJA_6 = format_SOJA_6.readFeatures(json_SOJA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOJA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOJA_6.addFeatures(features_SOJA_6);
var lyr_SOJA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOJA_6, 
                style: style_SOJA_6,
                interactive: true,
                title: '<img src="styles/legend/SOJA_6.png" /> SOJA'
            });
var format_PECUARIA_7 = new ol.format.GeoJSON();
var features_PECUARIA_7 = format_PECUARIA_7.readFeatures(json_PECUARIA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PECUARIA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PECUARIA_7.addFeatures(features_PECUARIA_7);
var lyr_PECUARIA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PECUARIA_7, 
                style: style_PECUARIA_7,
                interactive: true,
                title: '<img src="styles/legend/PECUARIA_7.png" /> PECUARIA'
            });
var format_MS338_8 = new ol.format.GeoJSON();
var features_MS338_8 = format_MS338_8.readFeatures(json_MS338_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MS338_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MS338_8.addFeatures(features_MS338_8);
var lyr_MS338_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MS338_8, 
                style: style_MS338_8,
                interactive: true,
                title: '<img src="styles/legend/MS338_8.png" /> MS 338'
            });
var format_DIVISAO_DE_TALHOES_POLIGONOS_9 = new ol.format.GeoJSON();
var features_DIVISAO_DE_TALHOES_POLIGONOS_9 = format_DIVISAO_DE_TALHOES_POLIGONOS_9.readFeatures(json_DIVISAO_DE_TALHOES_POLIGONOS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVISAO_DE_TALHOES_POLIGONOS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVISAO_DE_TALHOES_POLIGONOS_9.addFeatures(features_DIVISAO_DE_TALHOES_POLIGONOS_9);
var lyr_DIVISAO_DE_TALHOES_POLIGONOS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVISAO_DE_TALHOES_POLIGONOS_9, 
                style: style_DIVISAO_DE_TALHOES_POLIGONOS_9,
                interactive: true,
                title: '<img src="styles/legend/DIVISAO_DE_TALHOES_POLIGONOS_9.png" /> DIVISAO_DE_TALHOES_POLIGONOS'
            });
var format_BENFEITORIAS_10 = new ol.format.GeoJSON();
var features_BENFEITORIAS_10 = format_BENFEITORIAS_10.readFeatures(json_BENFEITORIAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENFEITORIAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENFEITORIAS_10.addFeatures(features_BENFEITORIAS_10);
var lyr_BENFEITORIAS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BENFEITORIAS_10, 
                style: style_BENFEITORIAS_10,
                interactive: true,
                title: '<img src="styles/legend/BENFEITORIAS_10.png" /> BENFEITORIAS'
            });
var format_EUCALIPTO_11 = new ol.format.GeoJSON();
var features_EUCALIPTO_11 = format_EUCALIPTO_11.readFeatures(json_EUCALIPTO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUCALIPTO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUCALIPTO_11.addFeatures(features_EUCALIPTO_11);
var lyr_EUCALIPTO_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EUCALIPTO_11, 
                style: style_EUCALIPTO_11,
                interactive: true,
                title: '<img src="styles/legend/EUCALIPTO_11.png" /> EUCALIPTO'
            });
var format_RESERVATRIO_AGUA_12 = new ol.format.GeoJSON();
var features_RESERVATRIO_AGUA_12 = format_RESERVATRIO_AGUA_12.readFeatures(json_RESERVATRIO_AGUA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESERVATRIO_AGUA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVATRIO_AGUA_12.addFeatures(features_RESERVATRIO_AGUA_12);
var lyr_RESERVATRIO_AGUA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESERVATRIO_AGUA_12, 
                style: style_RESERVATRIO_AGUA_12,
                interactive: true,
                title: '<img src="styles/legend/RESERVATRIO_AGUA_12.png" /> RESERVATÓRIO_AGUA'
            });
var format_APP_13 = new ol.format.GeoJSON();
var features_APP_13 = format_APP_13.readFeatures(json_APP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_13.addFeatures(features_APP_13);
var lyr_APP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_13, 
                style: style_APP_13,
                interactive: true,
                title: '<img src="styles/legend/APP_13.png" /> APP'
            });
var format_AREA_GEO_14 = new ol.format.GeoJSON();
var features_AREA_GEO_14 = format_AREA_GEO_14.readFeatures(json_AREA_GEO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_GEO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_GEO_14.addFeatures(features_AREA_GEO_14);
var lyr_AREA_GEO_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_GEO_14, 
                style: style_AREA_GEO_14,
                interactive: true,
                title: '<img src="styles/legend/AREA_GEO_14.png" /> AREA_GEO'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_AREA_EM_REGENERACAO_2,lyr_VEGETACAO_NATIVA_3,lyr_RL_4,lyr_processo_abertura_5,lyr_SOJA_6,lyr_PECUARIA_7,lyr_MS338_8,lyr_DIVISAO_DE_TALHOES_POLIGONOS_9,lyr_BENFEITORIAS_10,lyr_EUCALIPTO_11,lyr_RESERVATRIO_AGUA_12,lyr_APP_13,lyr_AREA_GEO_14,],
                                title: "group1"});
var group_subgroup1 = new ol.layer.Group({
                                layers: [lyr_NDVI_marco_2023_0,lyr_Cores_verdadeiras_marco_2023_1,],
                                title: "sub-group1"});

lyr_NDVI_marco_2023_0.setVisible(true);lyr_Cores_verdadeiras_marco_2023_1.setVisible(true);lyr_AREA_EM_REGENERACAO_2.setVisible(true);lyr_VEGETACAO_NATIVA_3.setVisible(true);lyr_RL_4.setVisible(true);lyr_processo_abertura_5.setVisible(true);lyr_SOJA_6.setVisible(true);lyr_PECUARIA_7.setVisible(true);lyr_MS338_8.setVisible(true);lyr_DIVISAO_DE_TALHOES_POLIGONOS_9.setVisible(true);lyr_BENFEITORIAS_10.setVisible(true);lyr_EUCALIPTO_11.setVisible(true);lyr_RESERVATRIO_AGUA_12.setVisible(true);lyr_APP_13.setVisible(true);lyr_AREA_GEO_14.setVisible(true);
var layersList = [group_subgroup1,group_group1];
lyr_AREA_EM_REGENERACAO_2.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_VEGETACAO_NATIVA_3.set('fieldAliases', {'classe': 'classe', });
lyr_RL_4.set('fieldAliases', {'CLASSE': 'CLASSE', });
lyr_processo_abertura_5.set('fieldAliases', {'classe': 'classe', });
lyr_SOJA_6.set('fieldAliases', {'TALHÃO': 'TALHÃO', 'AREA_HA': 'AREA_HA', });
lyr_PECUARIA_7.set('fieldAliases', {'TALHÃO': 'TALHÃO', 'AREA_HA': 'AREA_HA', });
lyr_MS338_8.set('fieldAliases', {'classe': 'classe', 'AREA_HA': 'AREA_HA', });
lyr_DIVISAO_DE_TALHOES_POLIGONOS_9.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_BENFEITORIAS_10.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_EUCALIPTO_11.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_RESERVATRIO_AGUA_12.set('fieldAliases', {'classe': 'classe', 'AREA_HA': 'AREA_HA', });
lyr_APP_13.set('fieldAliases', {'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'LENGHT': 'LENGHT', });
lyr_AREA_GEO_14.set('fieldAliases', {'CLASSE': 'CLASSE', 'AREA_HA': 'AREA_HA', });
lyr_AREA_EM_REGENERACAO_2.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_VEGETACAO_NATIVA_3.set('fieldImages', {'classe': 'Range', });
lyr_RL_4.set('fieldImages', {'CLASSE': '', });
lyr_processo_abertura_5.set('fieldImages', {'classe': 'Range', });
lyr_SOJA_6.set('fieldImages', {'TALHÃO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_PECUARIA_7.set('fieldImages', {'TALHÃO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MS338_8.set('fieldImages', {'classe': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_DIVISAO_DE_TALHOES_POLIGONOS_9.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_BENFEITORIAS_10.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_EUCALIPTO_11.set('fieldImages', {'AREA_HA': 'TextEdit', });
lyr_RESERVATRIO_AGUA_12.set('fieldImages', {'classe': '', 'AREA_HA': '', });
lyr_APP_13.set('fieldImages', {'classe': 'Range', 'lagura': '', 'larguraapp': '', 'LENGHT': '', });
lyr_AREA_GEO_14.set('fieldImages', {'CLASSE': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_AREA_EM_REGENERACAO_2.set('fieldLabels', {});
lyr_VEGETACAO_NATIVA_3.set('fieldLabels', {});
lyr_RL_4.set('fieldLabels', {});
lyr_processo_abertura_5.set('fieldLabels', {});
lyr_SOJA_6.set('fieldLabels', {});
lyr_PECUARIA_7.set('fieldLabels', {});
lyr_MS338_8.set('fieldLabels', {});
lyr_DIVISAO_DE_TALHOES_POLIGONOS_9.set('fieldLabels', {});
lyr_BENFEITORIAS_10.set('fieldLabels', {});
lyr_EUCALIPTO_11.set('fieldLabels', {});
lyr_RESERVATRIO_AGUA_12.set('fieldLabels', {});
lyr_APP_13.set('fieldLabels', {});
lyr_AREA_GEO_14.set('fieldLabels', {});
lyr_AREA_GEO_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});