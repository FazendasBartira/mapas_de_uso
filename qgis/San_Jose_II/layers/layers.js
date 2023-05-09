var wms_layers = [];

var lyr_NDVI_Marco_2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Marco_2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6016430.155200, -2273542.969000, -6002174.649400, -2260926.082000]
                            })
                        });
var lyr_Cores_verdadeiras_Marco_2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cores_verdadeiras_Marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cores_verdadeiras_Marco_2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6016430.155200, -2273542.969000, -6002174.649400, -2260926.082000]
                            })
                        });
var format_RL_2 = new ol.format.GeoJSON();
var features_RL_2 = format_RL_2.readFeatures(json_RL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_2.addFeatures(features_RL_2);
var lyr_RL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_2, 
                style: style_RL_2,
                interactive: true,
                title: '<img src="styles/legend/RL_2.png" /> RL'
            });
var format_RESERVATORIO_3 = new ol.format.GeoJSON();
var features_RESERVATORIO_3 = format_RESERVATORIO_3.readFeatures(json_RESERVATORIO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESERVATORIO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVATORIO_3.addFeatures(features_RESERVATORIO_3);
var lyr_RESERVATORIO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESERVATORIO_3, 
                style: style_RESERVATORIO_3,
                interactive: true,
                title: '<img src="styles/legend/RESERVATORIO_3.png" /> RESERVATORIO'
            });
var format_Regeneracao_4 = new ol.format.GeoJSON();
var features_Regeneracao_4 = format_Regeneracao_4.readFeatures(json_Regeneracao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_4.addFeatures(features_Regeneracao_4);
var lyr_Regeneracao_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_4, 
                style: style_Regeneracao_4,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_4.png" /> Regeneracao'
            });
var format_Pecuaria_5 = new ol.format.GeoJSON();
var features_Pecuaria_5 = format_Pecuaria_5.readFeatures(json_Pecuaria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pecuaria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pecuaria_5.addFeatures(features_Pecuaria_5);
var lyr_Pecuaria_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pecuaria_5, 
                style: style_Pecuaria_5,
                interactive: true,
                title: '<img src="styles/legend/Pecuaria_5.png" /> Pecuaria'
            });
var format_Estrada_interna_6 = new ol.format.GeoJSON();
var features_Estrada_interna_6 = format_Estrada_interna_6.readFeatures(json_Estrada_interna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estrada_interna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estrada_interna_6.addFeatures(features_Estrada_interna_6);
var lyr_Estrada_interna_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estrada_interna_6, 
                style: style_Estrada_interna_6,
                interactive: true,
                title: '<img src="styles/legend/Estrada_interna_6.png" /> Estrada_interna'
            });
var format_CANI_7 = new ol.format.GeoJSON();
var features_CANI_7 = format_CANI_7.readFeatures(json_CANI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANI_7.addFeatures(features_CANI_7);
var lyr_CANI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANI_7, 
                style: style_CANI_7,
                interactive: true,
                title: '<img src="styles/legend/CANI_7.png" /> CANI'
            });
var format_RL_em_restaurao_8 = new ol.format.GeoJSON();
var features_RL_em_restaurao_8 = format_RL_em_restaurao_8.readFeatures(json_RL_em_restaurao_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_em_restaurao_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_em_restaurao_8.addFeatures(features_RL_em_restaurao_8);
var lyr_RL_em_restaurao_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_em_restaurao_8, 
                style: style_RL_em_restaurao_8,
                interactive: true,
                title: '<img src="styles/legend/RL_em_restaurao_8.png" /> RL_em_restauração'
            });
var format_Benfeitorias_9 = new ol.format.GeoJSON();
var features_Benfeitorias_9 = format_Benfeitorias_9.readFeatures(json_Benfeitorias_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_9.addFeatures(features_Benfeitorias_9);
var lyr_Benfeitorias_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_9, 
                style: style_Benfeitorias_9,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_9.png" /> Benfeitorias'
            });
var format_AREA_10 = new ol.format.GeoJSON();
var features_AREA_10 = format_AREA_10.readFeatures(json_AREA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_10.addFeatures(features_AREA_10);
var lyr_AREA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_10, 
                style: style_AREA_10,
                interactive: true,
                title: '<img src="styles/legend/AREA_10.png" /> AREA'
            });
var format_APPD_11 = new ol.format.GeoJSON();
var features_APPD_11 = format_APPD_11.readFeatures(json_APPD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APPD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPD_11.addFeatures(features_APPD_11);
var lyr_APPD_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APPD_11, 
                style: style_APPD_11,
                interactive: true,
                title: '<img src="styles/legend/APPD_11.png" /> APPD'
            });
var format_APP_12 = new ol.format.GeoJSON();
var features_APP_12 = format_APP_12.readFeatures(json_APP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_12.addFeatures(features_APP_12);
var lyr_APP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_12, 
                style: style_APP_12,
                interactive: true,
                title: '<img src="styles/legend/APP_12.png" /> APP'
            });
var format_Agricultura_13 = new ol.format.GeoJSON();
var features_Agricultura_13 = format_Agricultura_13.readFeatures(json_Agricultura_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agricultura_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agricultura_13.addFeatures(features_Agricultura_13);
var lyr_Agricultura_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agricultura_13, 
                style: style_Agricultura_13,
                interactive: true,
                title: '<img src="styles/legend/Agricultura_13.png" /> Agricultura'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_RL_2,lyr_RESERVATORIO_3,lyr_Regeneracao_4,lyr_Pecuaria_5,lyr_Estrada_interna_6,lyr_CANI_7,lyr_RL_em_restaurao_8,lyr_Benfeitorias_9,lyr_AREA_10,lyr_APPD_11,lyr_APP_12,lyr_Agricultura_13,],
                                title: "group1"});
var group_imagens = new ol.layer.Group({
                                layers: [lyr_NDVI_Marco_2023_0,lyr_Cores_verdadeiras_Marco_2023_1,],
                                title: "imagens"});

lyr_NDVI_Marco_2023_0.setVisible(true);lyr_Cores_verdadeiras_Marco_2023_1.setVisible(true);lyr_RL_2.setVisible(true);lyr_RESERVATORIO_3.setVisible(true);lyr_Regeneracao_4.setVisible(true);lyr_Pecuaria_5.setVisible(true);lyr_Estrada_interna_6.setVisible(true);lyr_CANI_7.setVisible(true);lyr_RL_em_restaurao_8.setVisible(true);lyr_Benfeitorias_9.setVisible(true);lyr_AREA_10.setVisible(true);lyr_APPD_11.setVisible(true);lyr_APP_12.setVisible(true);lyr_Agricultura_13.setVisible(true);
var layersList = [group_imagens,group_group1];
lyr_RL_2.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_RESERVATORIO_3.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_Regeneracao_4.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Pecuaria_5.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Estrada_interna_6.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_CANI_7.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'AREA_HA': 'AREA_HA', });
lyr_RL_em_restaurao_8.set('fieldAliases', {'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Benfeitorias_9.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_AREA_10.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_APPD_11.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'fid_2': 'fid_2', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_APP_12.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Agricultura_13.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_RL_2.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_RESERVATORIO_3.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_Regeneracao_4.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Pecuaria_5.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Estrada_interna_6.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_CANI_7.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RL_em_restaurao_8.set('fieldImages', {'classe': 'Range', 'lagura': 'TextEdit', 'larguraapp': 'TextEdit', });
lyr_Benfeitorias_9.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_AREA_10.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_APPD_11.set('fieldImages', {'fid': '', 'Talhao': '', 'fid_2': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_APP_12.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Agricultura_13.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RL_2.set('fieldLabels', {});
lyr_RESERVATORIO_3.set('fieldLabels', {});
lyr_Regeneracao_4.set('fieldLabels', {});
lyr_Pecuaria_5.set('fieldLabels', {});
lyr_Estrada_interna_6.set('fieldLabels', {});
lyr_CANI_7.set('fieldLabels', {});
lyr_RL_em_restaurao_8.set('fieldLabels', {});
lyr_Benfeitorias_9.set('fieldLabels', {});
lyr_AREA_10.set('fieldLabels', {});
lyr_APPD_11.set('fieldLabels', {});
lyr_APP_12.set('fieldLabels', {});
lyr_Agricultura_13.set('fieldLabels', {});
lyr_Agricultura_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});